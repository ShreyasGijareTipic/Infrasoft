<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Project;
use App\Models\WorkPointDetail;
use App\Models\SurveyDetail;
use App\Models\Expense;
use App\Models\Order;
use App\Models\Income;
use Illuminate\Support\Facades\DB;

class ProjectSummaryController extends Controller
{
    public function index(Request $request)
    {
        $companyId = auth()->user()->company_id;
        $projectId = $request->project_id;

        $projects = Project::where('company_id', $companyId)
            ->when($projectId, fn($q) => $q->where('id', $projectId))
            ->get();

        $response = [];

        foreach ($projects as $project) {
            // ---------- DTH ----------
            $totalDthPoints = WorkPointDetail::where('company_id', $companyId)
                ->where('project_id', $project->id)
                ->sum(DB::raw('CAST(work_point AS DECIMAL(12,2))'));

            $totalDthBilling = WorkPointDetail::where('company_id', $companyId)
                ->where('project_id', $project->id)
                ->sum('total');

            // Calculate average DTH rate
            $avgDthRate = $totalDthPoints > 0 ? round($totalDthBilling / $totalDthPoints, 2) : 0;

            // ---------- Survey ----------
            $totalSurveyPoints = SurveyDetail::where('company_id', $companyId)
                ->where('project_id', $project->id)
                ->sum(DB::raw('CAST(survey_point AS DECIMAL(12,2))'));

            $totalSurveyBilling = SurveyDetail::where('company_id', $companyId)
                ->where('project_id', $project->id)
                ->sum('total');

            // Calculate average Survey rate
            $avgSurveyRate = $totalSurveyPoints > 0 ? round($totalSurveyBilling / $totalSurveyPoints, 2) : 0;

            // ---------- Expenses ----------
            // Transportation expenses
            $transport = Expense::join('expense_types', 'expenses.expense_id', '=', 'expense_types.id')
                ->where('expenses.company_id', $companyId)
                ->where('expenses.project_id', $project->id)
                ->where('expense_types.name', 'Transportation')
                ->sum('expenses.total_price');

            // Fuel/Diesel expenses
            $diesel = Expense::join('expense_types', 'expenses.expense_id', '=', 'expense_types.id')
                ->where('expenses.company_id', $companyId)
                ->where('expenses.project_id', $project->id)
                ->where('expense_types.name', 'Fuel Expense')
                ->sum('expenses.total_price');

            // Other expenses (excluding Transportation and Fuel)
            $otherBilling = Expense::leftJoin('expense_types', 'expenses.expense_id', '=', 'expense_types.id')
                ->where('expenses.company_id', $companyId)
                ->where('expenses.project_id', $project->id)
                ->where(function ($q) {
                    $q->whereNull('expense_types.name')
                      ->orWhereNotIn('expense_types.name', [
                          'Transportation', 
                          'Fuel Expense'
                      ]);
                })
                ->sum('expenses.total_price');

            // Extra billing from project table
            $extraBilling = 0;
            if (isset($project->extra_billing)) {
                $extraBilling = $project->extra_billing;
            }

            // ---------- Total Expenses ----------
            $totalExpenses = $transport + $otherBilling + $diesel + $extraBilling;

            // ---------- Expense Breakdown ----------
            $expenseBreakdown = Expense::leftJoin('expense_types', 'expenses.expense_id', '=', 'expense_types.id')
                ->where('expenses.company_id', $companyId)
                ->where('expenses.project_id', $project->id)
                ->select(
                    DB::raw('COALESCE(expense_types.name, "Uncategorized") as expense_type'),
                    DB::raw('SUM(expenses.total_price) as total')
                )
                ->groupBy('expense_types.name')
                ->get()
                ->map(fn($item) => [
                    'type' => $item->expense_type,
                    'amount' => (float) $item->total
                ]);

            // ---------- Orders Data (Revenue) ----------
            // FIXED: Use finalAmount instead of totalAmount (finalAmount includes tax)
            // FIXED: Use finalAmount instead of totalAmount (finalAmount includes tax)
            $ordersData = Order::where('company_id', $companyId)
                ->where('project_id', $project->id)
                ->selectRaw('
                    SUM(finalAmount) as total_amount,
                    SUM(finalAmount) as total_amount,
                    SUM(paidAmount) as paid_amount,
                    SUM(finalAmount - paidAmount) as pending_amount
                    SUM(finalAmount - paidAmount) as pending_amount
                ')
                ->first();

            $totalAmount = $ordersData->total_amount ?? 0;
            $paidAmount = $ordersData->paid_amount ?? 0;
            $pendingAmount = $ordersData->pending_amount ?? 0;

           // ---------- Income (payment received - for display only) ----------
        $paidAmount = Income::where('company_id', $companyId)
            ->where('project_id', $project->id)
            ->sum('received_amount');

        $pendingAmount = Income::where('company_id', $companyId)
            ->where('project_id', $project->id)
            ->sum('pending_amount');

        // Total invoice amount should match paid + pending
        $totalInvoiceAmount = $paidAmount + $pendingAmount;

        $receiverBanks = Income::select('receivers_bank', DB::raw('SUM(received_amount) as amount'))
            ->where('company_id', $companyId)
            ->where('project_id', $project->id)
            ->groupBy('receivers_bank')
            ->get()
            ->map(fn($r) => [
                'bank_name' => $r->receivers_bank,
                'amount'    => (float) $r->amount
            ]);

            // ---------- Profit / Loss Calculation ----------
            // Profit/Loss = Total Order Amount (with tax) - Total Expenses
            // Profit/Loss = Total Order Amount (with tax) - Total Expenses
            $profitLoss = $totalAmount - $totalExpenses;
            $isProfit = $profitLoss >= 0;

            // ---------- Response ----------
            $response[] = [
                'sr_no' => $project->id,
                'site_name' => $project->project_name,
                'company_name' => $project->customer_name,
                
                // DTH Details
                'total_dth_points' => (float) $totalDthPoints,
                'avg_dth_rate' => (float) $avgDthRate,
                'total_dth_billing_amount' => (float) $totalDthBilling,
                
                // Survey Details
                'total_survey_points' => (float) $totalSurveyPoints,
                'avg_survey_rate' => (float) $avgSurveyRate,
                'total_survey_billing_amount' => (float) $totalSurveyBilling,

                // Revenue from Orders (FIXED: now using finalAmount)
                // Revenue from Orders (FIXED: now using finalAmount)
                'total_amount' => (float) $totalAmount,
                'paid_amount' => (float) $paidAmount,
                'pending_amount' => (float) $pendingAmount,

                // Expenses breakdown
                'transport' => (float) $transport,
                'other_billing' => (float) $otherBilling,
                'total_diesel_amount' => (float) $diesel,
                'extra_billing' => (float) $extraBilling,
                'total_expenses' => (float) $totalExpenses,

                // Receiver banks (bank-wise payment tracking)
                // Receiver banks (bank-wise payment tracking)
                'receiver_banks' => $receiverBanks,

                // Profit/Loss calculation
                'profit_or_loss' => (float) $profitLoss,
                'is_profit' => $isProfit,
                
                // Additional helpful fields
                'calculation_details' => [
                    'revenue' => (float) $totalAmount,
                    'expenses' => (float) $totalExpenses,
                    'result' => (float) $profitLoss,
                ],
                
                // Expense breakdown for debugging
                'expense_breakdown' => $expenseBreakdown
            ];
        }

        return response()->json(['data' => $response], 200);
    }
}