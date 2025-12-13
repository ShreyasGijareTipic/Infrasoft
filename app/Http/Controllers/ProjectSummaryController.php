<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Project;
use App\Models\WorkPointDetail;
use App\Models\SurveyDetail;
use App\Models\Expense;
use App\Models\Income;
use Illuminate\Support\Facades\DB;

class ProjectSummaryController extends Controller
{
    // public function index(Request $request)
    // {
    //     $companyId = auth()->user()->company_id;
    //     $projectId = $request->project_id;

    //     $projects = Project::where('company_id', $companyId)
    //         ->when($projectId, fn($q) => $q->where('id', $projectId))
    //         ->get();

    //     $response = [];

    //     foreach ($projects as $project) {
    //         // ---------- DTH ----------
    //         $totalDthPoints = WorkPointDetail::where('company_id', $companyId)
    //             ->where('project_id', $project->id)
    //             ->sum(DB::raw('CAST(work_point AS DECIMAL(12,2))'));

    //         $totalDthBilling = WorkPointDetail::where('company_id', $companyId)
    //             ->where('project_id', $project->id)
    //             ->sum('total');

    //         // ---------- Survey ----------
    //         $totalSurveyPoints = SurveyDetail::where('company_id', $companyId)
    //             ->where('project_id', $project->id)
    //             ->sum(DB::raw('CAST(survey_point AS DECIMAL(12,2))'));

    //         $totalSurveyBilling = SurveyDetail::where('company_id', $companyId)
    //             ->where('project_id', $project->id)
    //             ->sum('total');

    //         // ---------- Expenses ----------
    //         // Transport (only expense_types.name = 'Transportation')
    //         $transport = Expense::join('expense_types', 'expenses.expense_id', '=', 'expense_types.id')
    //             ->where('expenses.company_id', $companyId)
    //             ->where('expenses.project_id', $project->id)
    //             ->where('expense_types.name', 'Transportation')
    //             ->sum('expenses.total_price');

    //         // Diesel / Fuel (expense_types.name = 'Fuel Expense')
    //         $diesel = Expense::join('expense_types', 'expenses.expense_id', '=', 'expense_types.id')
    //             ->where('expenses.company_id', $companyId)
    //             ->where('expenses.project_id', $project->id)
    //             ->where('expense_types.name', 'Fuel Expense')
    //             ->sum('expenses.total_price');

    //         // Other Billing (everything except Transportation & Fuel Expense)
    //         $otherBilling = Expense::leftJoin('expense_types', 'expenses.expense_id', '=', 'expense_types.id')
    //             ->where('expenses.company_id', $companyId)
    //             ->where('expenses.project_id', $project->id)
    //             ->where(function ($q) {
    //                 $q->whereNull('expense_types.name')
    //                   ->orWhereNotIn('expense_types.name', ['Transportation', 'Fuel Expense']);
    //             })
    //             ->sum('expenses.total_price');

    //         // ---------- Final Bill ----------
    //         $finalBill = $totalDthBilling + $totalSurveyBilling + $transport + $otherBilling;
    //         $gstBill   = round($finalBill * 0.18, 2);
    //         $totalBill = $finalBill + $gstBill;

    //         // ---------- Income ----------
    //         $paidAmount = Income::where('company_id', $companyId)
    //             ->where('project_id', $project->id)
    //             ->sum('received_amount');

    //         $pendingAmount = Income::where('company_id', $companyId)
    //             ->where('project_id', $project->id)
    //             ->sum('pending_amount');

    //         // Receiver Banks
    //         $receiverBanks = Income::select('receivers_bank', DB::raw('SUM(received_amount) as amount'))
    //             ->where('company_id', $companyId)
    //             ->where('project_id', $project->id)
    //             ->groupBy('receivers_bank')
    //             ->get()
    //             ->map(fn($r) => ['bank_name' => $r->receivers_bank, 'amount' => (float) $r->amount]);

    //         $extraBilling = 0;
    //         $bankTotal = $receiverBanks->sum('amount');

    //         $profitLoss = $bankTotal - $totalBill - $extraBilling;
    //         $isProfit   = $profitLoss >= 0;

    //         $response[] = [
    //             'sr_no'                     => $project->id,
    //             'site_name'                => $project->project_name,
    //             'company_name'             => $project->customer_name,
    //             'total_dth_points'         => $totalDthPoints,
    //             'total_dth_billing_amount' => $totalDthBilling,
    //             'total_survey_points'      => $totalSurveyPoints,
    //             'total_survey_billing_amount' => $totalSurveyBilling,
    //             'transport'                => $transport,
    //             'other_billing'            => $otherBilling,
    //             'final_bill'               => $finalBill,
    //             'gst_bill'                 => $gstBill,
    //             'total_bill'               => $totalBill,
    //             'paid_amount'              => $paidAmount,
    //             'pending_amount'           => $pendingAmount,
    //             'total_diesel_amount'      => $diesel,
    //             'extra_billing'            => $extraBilling,
    //             'receiver_banks'           => $receiverBanks,
    //             'profit_or_loss'           => $profitLoss,
    //             'is_profit'                => $isProfit,
    //         ];
    //     }

    //     return response()->json(['data' => $response], 200);
    // }


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

        // Other expenses (excluding Transportation, Fuel, Vendor Payments, and Raw Materials if they have specific types)
        // NOTE: If vendor payments and raw materials are stored as expense types, 
        // we need to exclude them to avoid double counting
        $otherBilling = Expense::leftJoin('expense_types', 'expenses.expense_id', '=', 'expense_types.id')
            ->where('expenses.company_id', $companyId)
            ->where('expenses.project_id', $project->id)
            ->where(function ($q) {
                $q->whereNull('expense_types.name')
                  ->orWhereNotIn('expense_types.name', [
                      'Transportation', 
                      'Fuel Expense'
                      // Add more expense types to exclude if vendor/raw material have specific names:
                      // 'Vendor Payment',
                      // 'Raw Material',
                      // 'Material Purchase'
                  ]);
            })
            ->sum('expenses.total_price');

        // Extra billing from project table or separate field
        $extraBilling = 0;
        // Check if project has extra_billing field
        if (isset($project->extra_billing)) {
            $extraBilling = $project->extra_billing;
        }
        // OR if it's stored as a specific expense type:
        // $extraBilling = Expense::join('expense_types', 'expenses.expense_id', '=', 'expense_types.id')
        //     ->where('expenses.company_id', $companyId)
        //     ->where('expenses.project_id', $project->id)
        //     ->where('expense_types.name', 'Extra Billing')
        //     ->sum('expenses.total_price');

        // ---------- Billing ----------
        $finalBill = $totalDthBilling + $totalSurveyBilling;            // DTH + Survey only (before GST)
        $gstBill   = round($finalBill * 0.18, 2);                       // GST on final bill
        $totalBill = $finalBill + $gstBill;                              // Total invoice (with GST)

        // ---------- Total Expenses (ALL expenses including extra billing) ----------
        $totalExpenses = $transport + $otherBilling + $diesel + $extraBilling;

        // ---------- Debugging: Get expense breakdown by type ----------
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

        // ---------- Profit / Loss ----------
        // CRITICAL FIX: Profit/Loss = Total Bill (with GST) - ALL Expenses
        $profitLoss = $totalBill - $totalExpenses;
        $isProfit   = $profitLoss >= 0;

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

        // ---------- Response ----------
        $response[] = [
            'sr_no'                      => $project->id,
            'site_name'                   => $project->project_name,
            'company_name'                => $project->customer_name,
            
            // DTH Details
            'total_dth_points'            => (float) $totalDthPoints,
            'avg_dth_rate'                => (float) $avgDthRate,
            'total_dth_billing_amount'    => (float) $totalDthBilling,
            
            // Survey Details
            'total_survey_points'         => (float) $totalSurveyPoints,
            'avg_survey_rate'             => (float) $avgSurveyRate,
            'total_survey_billing_amount' => (float) $totalSurveyBilling,

            // Billing
            'final_bill'                  => (float) $finalBill,      // DTH + Survey (before GST)
            'gst_bill'                    => (float) $gstBill,        // GST amount
            'total_bill'                  => (float) $totalBill,      // Final + GST

            // Expenses breakdown
            'transport'                   => (float) $transport,
            'other_billing'               => (float) $otherBilling,
            'total_diesel_amount'         => (float) $diesel,
            'extra_billing'               => (float) $extraBilling,
            'total_expenses'              => (float) $totalExpenses,  // ALL expenses combined

            // Income (payments received)
            'paid_amount'                 => (float) $paidAmount,
            'pending_amount'              => (float) $pendingAmount,
            'total_invoice_amount'        => (float) $totalInvoiceAmount,
            'receiver_banks'              => $receiverBanks,

            // Profit/Loss calculation
            'profit_or_loss'              => (float) $profitLoss,
            'is_profit'                   => $isProfit,
            
            // Additional helpful fields
            'calculation_details' => [
                'revenue' => (float) $totalBill,
                'expenses' => (float) $totalExpenses,
                'result' => (float) $profitLoss,
            ],
            
            // Expense breakdown for debugging
            'expense_breakdown' => $expenseBreakdown
        ];
    }

    return response()->json(['data' => $response], 200);
}


// public function index(Request $request)
// {
//     $companyId = auth()->user()->company_id;
//     $projectId = $request->project_id;

//     $projects = Project::where('company_id', $companyId)
//         ->when($projectId, fn($q) => $q->where('id', $projectId))
//         ->get();

//     $response = [];

//     foreach ($projects as $project) {
//         // ---------- DTH ----------
//         $totalDthPoints = WorkPointDetail::where('company_id', $companyId)
//             ->where('project_id', $project->id)
//             ->sum(DB::raw('CAST(work_point AS DECIMAL(12,2))'));

//         $totalDthBilling = WorkPointDetail::where('company_id', $companyId)
//             ->where('project_id', $project->id)
//             ->sum('total');

//         // ---------- Survey ----------
//         $totalSurveyPoints = SurveyDetail::where('company_id', $companyId)
//             ->where('project_id', $project->id)
//             ->sum(DB::raw('CAST(survey_point AS DECIMAL(12,2))'));

//         $totalSurveyBilling = SurveyDetail::where('company_id', $companyId)
//             ->where('project_id', $project->id)
//             ->sum('total');

//         // ---------- Expenses ----------
//         $transport = Expense::join('expense_types', 'expenses.expense_id', '=', 'expense_types.id')
//             ->where('expenses.company_id', $companyId)
//             ->where('expenses.project_id', $project->id)
//             ->where('expense_types.name', 'Transportation')
//             ->sum('expenses.total_price');

//         $diesel = Expense::join('expense_types', 'expenses.expense_id', '=', 'expense_types.id')
//             ->where('expenses.company_id', $companyId)
//             ->where('expenses.project_id', $project->id)
//             ->where('expense_types.name', 'Fuel Expense')
//             ->sum('expenses.total_price');

//         $otherBilling = Expense::leftJoin('expense_types', 'expenses.expense_id', '=', 'expense_types.id')
//             ->where('expenses.company_id', $companyId)
//             ->where('expenses.project_id', $project->id)
//             ->where(function ($q) {
//                 $q->whereNull('expense_types.name')
//                   ->orWhereNotIn('expense_types.name', ['Transportation', 'Fuel Expense']);
//             })
//             ->sum('expenses.total_price');

//         // If you have a separate “extra billing” table/logic, replace 0 with query
//         $extraBilling = 0;

//         // ---------- Billing ----------
//         $grossBill = $totalDthBilling + $totalSurveyBilling;      // DTH + Survey only
//         $gstBill   = round($grossBill * 0.18, 2);                 // GST on gross bill
//         $totalBill = $grossBill + $gstBill;                       // Invoice before expense deduction

//         // ---------- Net after expenses ----------
//         $totalExpenses = $transport + $otherBilling + $diesel + $extraBilling;

//         // Final bill = Gross (DTH+Survey) - expenses
//         $finalBill = $grossBill - $totalExpenses;

//         // Profit/Loss (same as final_bill if you treat final_bill as net income)
//         $profitLoss = $finalBill;
//         $isProfit   = $profitLoss >= 0;

//         // ---------- Income (for display) ----------
//         $paidAmount = Income::where('company_id', $companyId)
//             ->where('project_id', $project->id)
//             ->sum('received_amount');

//         $pendingAmount = Income::where('company_id', $companyId)
//             ->where('project_id', $project->id)
//             ->sum('pending_amount');

//         $receiverBanks = Income::select('receivers_bank', DB::raw('SUM(received_amount) as amount'))
//             ->where('company_id', $companyId)
//             ->where('project_id', $project->id)
//             ->groupBy('receivers_bank')
//             ->get()
//             ->map(fn($r) => [
//                 'bank_name' => $r->receivers_bank,
//                 'amount'    => (float) $r->amount
//             ]);

//         // ---------- Response ----------
//         $response[] = [
//             'sr_no'                      => $project->id,
//             'site_name'                   => $project->project_name,
//             'company_name'                => $project->customer_name,

//             'total_dth_points'            => $totalDthPoints,
//             'total_dth_billing_amount'    => $totalDthBilling,
//             'total_survey_points'         => $totalSurveyPoints,
//             'total_survey_billing_amount' => $totalSurveyBilling,

//             // Billing
//             'final_bill'                  => $finalBill,    // (DTH + Survey) – Expenses
//             'gst_bill'                    => $gstBill,      // GST on gross bill
//             'total_bill'                  => $totalBill,    // Gross + GST (invoice amount)

//             // Expenses
//             'transport'                   => $transport,
//             'other_billing'               => $otherBilling,
//             'total_diesel_amount'         => $diesel,
//             'extra_billing'               => $extraBilling,
//             'total_expenses'              => $totalExpenses,

//             // Income
//             'paid_amount'                 => $paidAmount,
//             'pending_amount'              => $pendingAmount,
//             'receiver_banks'              => $receiverBanks,

//             // Profit / Loss (net after expenses)
//             'profit_or_loss'              => $profitLoss,
//             'is_profit'                   => $isProfit,
//         ];
//     }

//     return response()->json(['data' => $response], 200);
// }


}
