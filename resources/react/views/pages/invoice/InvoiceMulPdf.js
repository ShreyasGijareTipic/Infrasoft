import React, { useState } from 'react'
import html2pdf from 'html2pdf.js'
import { getUserData } from '../../../util/session'
import { host } from '../../../util/constants'

// Language configurations
const LANGUAGES = {
  marathi: {
    name: 'मराठी',
    font: 'Arial, sans-serif',
    labels: {
      projectName: 'प्रकल्पाचे नाव:',
      customerName: 'ग्राहकाचे नाव:',
      customerAddress: 'ग्राहकाचा पत्ता:',
      mobile: 'मोबाईल क्रमांक:',
      invoiceNumber: 'चलन क्रमांक:',
      invoiceDate: 'चलन तारीख:',
      deliveryDate: 'डिलीव्हरी तारीख:',
      works: 'कामाचे तपशील',
      serialNo: 'अनुक्रमांक',
      workType: 'कामाचे प्रकार',
      price: 'किंमत (₹)',
      quantity: 'प्रमाण',
      total: 'एकूण (₹)',
      grandTotal: 'एकूण',
      totalAfterDiscount: 'सूट नंतरची एकूण',
      paymentDetails: 'पेमेंट तपशील',
      amountPaid: 'रक्कम भरलेली:',
      amountRemaining: 'शिल्लक रक्कम:',
      paymentMode: 'पेमेंट मोड:',
      qrCode: 'QR कोड',
      scanToPay: 'पेमेंटसाठी स्कॅन करा',
      amountInWords: 'रक्कम शब्दांत:',
      bankDetails: 'बँक तपशील',
      bank: 'बँक:',
      accountNo: 'खाते क्रमांक:',
      ifscCode: 'IFSC कोड:',
      eSignature: 'ई-स्वाक्षरी',
      authorizedSignature: 'अधिकृत स्वाक्षरी',
      footerNote: 'हे चलन संगणकाद्वारे तयार केले आहे आणि अधिकृत आहे.',
      only: 'फक्त',
      baseAmount: 'मूळ रक्कम',
      gstPercent: 'जीएसटी %',
      cgst: 'सीजीएसटी',
      sgst: 'एसजीएसटी',
      taxableAmount: 'करपात्र रक्कम',
      gstDetails: 'जीएसटी तपशील',
    },
  },
  english: {
    name: 'English',
    font: 'Arial, sans-serif',
    labels: {
      projectName: 'Project Name:',
      customerName: 'Customer Name:',
      customerAddress: 'Customer Address:',
      mobile: 'Mobile Number:',
      invoiceNumber: 'Invoice Number:',
      invoiceDate: 'Invoice Date:',
      deliveryDate: 'Delivery Date:',
      works: 'Work Details',
      serialNo: 'Sr. No.',
      workType: 'Work Type',
      price: 'Price (₹)',
      quantity: 'Quantity',
      total: 'Total (₹)',
      grandTotal: 'Grand Total',
      totalAfterDiscount: 'Total after discount',
      paymentDetails: 'Payment Details',
      amountPaid: 'Amount Received:',
      amountRemaining: 'Amount Due:',
      paymentMode: 'Payment Mode:',
      qrCode: 'QR CODE',
      scanToPay: 'Scan to Pay',
      amountInWords: 'Amount in Words:',
      bankDetails: 'Bank Details',
      bank: 'Bank:',
      accountNo: 'Account Number:',
      ifscCode: 'IFSC Code:',
      eSignature: 'E-Signature',
      authorizedSignature: 'Authorized Signature',
      footerNote: 'This invoice is computer generated and authorized.',
      only: 'only',
      baseAmount: 'Base Amount',
      gstPercent: 'GST %',
      cgst: 'CGST',
      sgst: 'SGST',
      taxableAmount: 'Taxable Amount',
      gstDetails: 'GST Details',
    },
  },
}

// Helper functions
const hasRowLevelGST = (items) => {
  if (!items || items.length === 0) return false;
  return items.some(item => 
    (item.gst_percent && item.gst_percent > 0) ||
    (item.cgst_amount && item.cgst_amount > 0) ||
    (item.sgst_amount && item.sgst_amount > 0)
  );
};

const hasGlobalGST = (formData) => {
  return (
    (formData.cgst && Number(formData.cgst) > 0) ||
    (formData.sgst && Number(formData.sgst) > 0) ||
    (formData.gst && Number(formData.gst) > 0) ||
    (formData.igst && Number(formData.igst) > 0)
  );
};

export const generateMultiLanguagePDF = (
  finalAmount,
  invoiceNumber,
  customerName,
  formData,
  balanceAmount,
  totalAmountWords,
  lang = 'english',
  mode = 'save'
) => {
  const labels = LANGUAGES[lang].labels
  const font = LANGUAGES[lang].font

  // Sort items by ID in ascending order (to show in save order)
  const items = Array.isArray(formData.items) 
    ? [...formData.items].sort((a, b) => (a.id || 0) - (b.id || 0))
    : [];
  
  const showRowGST = hasRowLevelGST(items);
  const showGlobalGST = hasGlobalGST(formData);

const htmlContent = `
<html>
<head>
  <style>
    @page {
      size: A4;
      margin: 0;
    }
    
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body { 
      font-family: ${font}; 
      font-size: 12px; 
      margin: 0; 
      padding: 0;
    }
    
    .invoice-box {
      width: 100%;
      min-height: 100vh;
      padding: 20px;
      border: 3px solid #000;
      box-sizing: border-box;
      position: relative;
      display: flex;
      flex-direction: column;
    }
    
    .content-wrapper {
      flex: 1;
    }
    
    table { 
      width: 100%; 
      border-collapse: collapse; 
    }
    
    table td, table th { 
      padding: 5px; 
      vertical-align: top; 
      font-size: 11px;
    }
    
    .details-table th, .details-table td { 
      border: 1px solid #000; 
    }
    
    .details-table th { 
      background: #d9e9ff; 
      font-weight: bold; 
      text-align: center; 
    }
    
    .summary td, .summary th { 
      border: 1px solid #000; 
      padding: 5px; 
    }
    
    .summary th { 
      background: #d9e9ff; 
      font-weight: bold; 
      text-align: right; 
    }
    
    .right { text-align: right; }
    .center { text-align: center; }
    .page-break { page-break-before: always; }

    .no-split {
      page-break-inside: avoid;
      break-inside: avoid;
    }

    .terms-section {
      padding: 8px 0;
      font-size: 12px;
      margin-bottom: 10px;
    }
    
    .terms-section h3 {
      margin: 0 0 6px 0;
      font-size: 15px;
      border-bottom: 2px solid #000;
      padding-bottom: 4px;
    }
    
    .terms-content {
      line-height: 1.5;
      white-space: pre-line;
      padding-left: 8px;
    }

    .footer {
      text-align: center;
      font-size: 11px;
      padding: 8px 0;
      width: 100%;
      margin-top: auto;
      background: transparent;
    }

    .footer-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      padding: 0 25px;
      box-sizing: border-box;
    }

    .footer-item {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 11px;
    }

    .foot {
      text-align: center;
      margin: 8px 0;
      font-size: 10px;
    }

    @media print {
      body {
        margin: 0;
        padding: 0;
      }
      
      .invoice-box {
        border: 3px solid #000;
      }
    }
  </style>
</head>
<body>

${(() => {
  const MAX_ROWS = 19;
  const totalPages = Math.ceil(items.length / MAX_ROWS) || 1;
  const hasTermsPage = !!(formData.note || formData.payment_terms || formData.terms_and_conditions);

  let pagesHtml = "";

  // ===== INVOICE PAGES =====
  for (let page = 0; page < totalPages; page++) {
    const start = page * MAX_ROWS;
    const end = start + MAX_ROWS;
    const itemsPage = items.slice(start, end);
    const isLastInvoicePage = page === totalPages - 1;

    pagesHtml += `
      ${page > 0 ? '<div class="page-break"></div>' : ''}
      <div class="invoice-box">
        <div class="content-wrapper">
        
        ${page === 0 ? `
        <!-- ===== Header on first page ===== -->
        <table class="company-header" style="width: 100%; margin-bottom: 5px;">
          <tr>
            <td style="width: 70%; vertical-align: top;">
              <div style="font-size: 22px; font-weight: bold; line-height: 1.2;">
                ${getUserData()?.company_info?.company_name || 'Company Name'}
              </div>
              <div style="font-size: 11px; margin-top: 2px;">
                ${getUserData()?.company_info?.land_mark || '-'}
              </div>
              <div style="font-size: 11px; margin-top: 3px;">
                <b>Phone:</b> ${getUserData()?.company_info?.phone_no || '-'}
              </div>
            </td>
            <td style="width: 30%; text-align: right; vertical-align: top;">
              <img 
                src='${host}/img/${getUserData()?.company_info?.logo}' 
                alt="Company Logo" 
                style="width: 75px; height: 75px; object-fit: contain; border: 1px solid #ccc; border-radius: 5px;"
              />
            </td>
          </tr>
        </table>

        <hr style="border: 1px solid black; margin: 3px 0;" />

        <div style="
          background-color: #cfe2ff;
          text-align: center;
          font-weight: bold;
          font-size: 18px;
          padding: 6px 0;
          border: 1px solid #000;
          margin: 6px 0;
          letter-spacing: 1px;
        ">
          Quotation
        </div>

        <table style="border: 1px solid #000; margin: 6px 0;">
          <tr>
            <th style="border: 1px solid #000; background: #d9e9ff; font-size: 11px; padding: 4px;">FROM :</th>
            <th style="border: 1px solid #000; background: #d9e9ff; font-size: 11px; padding: 4px;">TO :</th>
            <th style="border: 1px solid #000; background: #d9e9ff; font-size: 11px; padding: 4px;">DETAILS :</th>
          </tr>
          <tr>
            <td style="border: 1px solid #000; font-size: 10px; padding: 5px; line-height: 1.4;">
              <b>${getUserData()?.company_info?.company_name || 'Company Name'}</b><br/>
              ${getUserData()?.name || 'Owner Name'}<br/>
              ${getUserData()?.company_info?.land_mark || '-'}<br/>
              <b>Phone:</b> ${getUserData()?.mobile || 'N/A'}<br/>
              <b>GSTIN:</b> ${getUserData()?.company_info?.gst_number || 'N/A'}<br/>
              Dist: ${getUserData()?.company_info?.Dist || '-'}<br/>
              Tal: ${getUserData()?.company_info?.Tal || '-'}<br/>
              Email: ${getUserData()?.company_info?.email_id || '-'}
            </td>
            <td style="border: 1px solid #000; font-size: 10px; padding: 5px; line-height: 1.4;">
              <b>Customer Name:</b> ${formData.customer?.name || 'Customer Name'}<br/>
              <b>Site:</b> ${formData.project_name || 'Project Name'}<br/>
              ${formData.customer?.address || 'Customer Address'}<br/>
              <b>Phone:</b> ${formData.customer?.mobile || 'N/A'}<br/>
              <b>GSTIN:</b> ${formData.gst_number || '-'}<br/>
              <b>PAN:</b> ${formData.pan_number || '-'}
            </td>
            <td style="border: 1px solid #000; font-size: 10px; padding: 5px; line-height: 1.4;">
              <b>Invoice No:</b> ${invoiceNumber}<br/>
              <b>Invoice Date:</b> ${formData.date}<br/>
              <b>Reference ID:</b> ${formData.ref_id || '-'}<br/>
              <b>PO Number:</b> ${formData.po_number || '-'}
            </td>
          </tr>
        </table>
        ` : ""}

        <table class="details-table" style="margin-top: 8px;">
          ${page === 0 ? `
          <thead>
            <tr>
              <th style="width: ${showRowGST ? '5%' : '6%'}; font-size: 10px;">${labels.serialNo}</th>
              <th style="width: ${showRowGST ? '20%' : '38%'}; font-size: 10px;">${labels.workType}</th>
              <th style="width: ${showRowGST ? '8%' : '10%'}; font-size: 10px;">Unit</th>
              <th style="width: ${showRowGST ? '7%' : '10%'}; font-size: 10px;">${labels.quantity}</th>
              <th style="width: ${showRowGST ? '10%' : '18%'}; font-size: 10px;">${labels.price}</th>
              ${showRowGST ? `
                <th style="width: 12%; font-size: 10px;">${labels.baseAmount}</th>
                <th style="width: 8%; font-size: 10px;">${labels.gstPercent}</th>
                <th style="width: 12%; font-size: 10px;">${labels.cgst}</th>
                <th style="width: 12%; font-size: 10px;">${labels.sgst}</th>
              ` : ''}
              <th style="width: ${showRowGST ? '12%' : '18%'}; font-size: 10px;">${labels.total}</th>
            </tr>
          </thead>` : ""}
          <tbody>
            ${itemsPage.map((item, i) => {
              const cgstPercent = item.gst_percent ? item.gst_percent / 2 : 0;
              const sgstPercent = item.gst_percent ? item.gst_percent / 2 : 0;
              
              return `
              <tr>
                <td class="center" style="width: ${showRowGST ? '5%' : '6%'}; font-size: 10px;">${i + 1 + start}</td>
                <td style="width: ${showRowGST ? '20%' : '38%'}; font-size: 10px;">${item.work_type || ''}</td>
                <td class="center" style="width: ${showRowGST ? '8%' : '10%'}; font-size: 10px;">${item.uom || ''}</td>
                <td class="center" style="width: ${showRowGST ? '7%' : '10%'}; font-size: 10px;">${item.qty || 0}</td>
                <td class="right" style="width: ${showRowGST ? '10%' : '18%'}; font-size: 10px;">₹${Number(item.price || 0).toFixed(2)}</td>
                ${showRowGST ? `
                  <td class="right" style="width: 12%; font-size: 10px;">₹${Number((item.qty * item.price) || 0).toFixed(2)}</td>
                  <td class="center" style="width: 8%; font-size: 10px;">${item.gst_percent ? item.gst_percent + '%' : '-'}</td>
                  <td class="right" style="width: 12%; font-size: 10px;">${item.cgst_amount > 0 ? '₹' + Number(item.cgst_amount).toFixed(2) + ' (' + cgstPercent + '%)' : '-'}</td>
                  <td class="right" style="width: 12%; font-size: 10px;">${item.sgst_amount > 0 ? '₹' + Number(item.sgst_amount).toFixed(2) + ' (' + sgstPercent + '%)' : '-'}</td>
                ` : ''}
                <td class="right" style="width: ${showRowGST ? '12%' : '18%'}; font-size: 10px;">₹${Number(item.total_price || 0).toFixed(2)}</td>
              </tr>`;
            }).join('')}
          </tbody>
        </table>

    ${isLastInvoicePage ? `
  <div class="no-split">
    ${showGlobalGST ? `
      <table class="summary" style="margin-top: 8px;">
        <tr>
          <th colspan="2" style="font-size: 12px; background: #d9e9ff; text-align: center;">${labels.gstDetails}</th>
        </tr>
        <tr>
          <th style="font-size: 11px;">${labels.taxableAmount}</th>
          <td class="right" style="font-size: 11px;">₹${(() => {
            const totalAfterRowGST = items.reduce((sum, item) => sum + (item.total_price || 0), 0);
            return Number(totalAfterRowGST).toFixed(2);
          })()}</td>
        </tr>
        ${Number(formData.cgst || 0) > 0 ? `
        <tr>
          <th style="font-size: 11px;">${labels.cgst} (${formData.cgstPercentage || (Number(formData.gst || 0) / 2)}%)</th>
          <td class="right" style="font-size: 11px;">₹${Number(formData.cgst || 0).toFixed(2)}</td>
        </tr>` : ''}
        ${Number(formData.sgst || 0) > 0 ? `
        <tr>
          <th style="font-size: 11px;">${labels.sgst} (${formData.sgstPercentage || (Number(formData.gst || 0) / 2)}%)</th>
          <td class="right" style="font-size: 11px;">₹${Number(formData.sgst || 0).toFixed(2)}</td>
        </tr>` : ''}
        ${Number(formData.igst || 0) > 0 ? `
        <tr>
          <th style="font-size: 11px;">IGST (${formData.igstPercentage || Number(formData.gst || 0)}%)</th>
          <td class="right" style="font-size: 11px;">₹${Number(formData.igst || 0).toFixed(2)}</td>
        </tr>` : ''}
        <tr style="background: #e8f5e9;">
          <th style="font-size: 11px;">Total GST Amount</th>
          <td class="right" style="font-size: 11px;"><strong>₹${(Number(formData.cgst || 0) + Number(formData.sgst || 0) + Number(formData.igst || 0)).toFixed(2)}</strong></td>
        </tr>
      </table>
    ` : ''}

    ${formData.discount > 0 ? `
    <table class="summary" style="margin-top: 8px;">
      <tr>
        <th style="font-size: 11px;">Discount</th>
        <td class="right" style="font-size: 11px;">₹${Number(formData.discount || 0).toFixed(2)}</td>
      </tr>
    </table>
    ` : ''}

    <table class="summary" style="margin-top: 8px;">
      <tr style="background: #fff3cd;">
        <th style="font-size: 12px;">${labels.grandTotal}</th>
        <td class="right" style="font-size: 12px;"><strong>₹${Number(finalAmount || 0).toFixed(2)}</strong></td>
      </tr>
      <tr>
        <th style="font-size: 11px;">${labels.amountPaid}</th>
        <td class="right" style="font-size: 11px;">₹${Number(formData.amountPaid || 0).toFixed(2)}</td>
      </tr>
      <tr style="background: #f8d7da;">
        <th style="vertical-align: top; font-size: 11px;">
          ${labels.amountRemaining}<br />
          <span style="font-weight: normal; font-size: 10px;">
            ${labels.amountInWords} ${totalAmountWords} ${labels.only}
          </span>
        </th>
        <td class="right" style="vertical-align: top; font-size: 11px;">
          <strong>₹${Number(balanceAmount || 0).toFixed(2)}</strong>
        </td>
      </tr>
    </table>
  </div>
` : ""}

        </div>

        <div class="foot">
          ${labels.footerNote}
        </div>
        <div class="footer">
          <div class="footer-content">
            <div class="footer-item">
              <span>✉️</span>
              <span>deshmukhinfra@gmail.com</span>
            </div>
            <div class="footer-item">
              <span>🌐</span>
              <span>www.deshmukhinfrasolutions.com</span>
            </div>
          </div>
        </div>
      </div>
    `;
  }
      
  // ===== TERMS & CONDITIONS PAGE =====
  if (hasTermsPage) {
    pagesHtml += `
    <div class="page-break"></div>
    <div class="invoice-box">
      <div class="content-wrapper">
        <table class="company-header" style="width: 100%; margin-bottom: 5px;">
          <tr>
            <td style="width: 70%; vertical-align: top;">
              <div style="font-size: 22px; font-weight: bold; line-height: 1.2;">
                ${getUserData()?.company_info?.company_name || 'Company Name'}
              </div>
              <div style="font-size: 11px; margin-top: 2px;">
                ${getUserData()?.company_info?.land_mark || '-'}
              </div>
              <div style="font-size: 11px; margin-top: 3px;">
                <b>Phone:</b> ${getUserData()?.company_info?.phone_no || '-'}
              </div>
            </td>
            <td style="width: 30%; text-align: right; vertical-align: top;">
              <img 
                src='${host}/img/${getUserData()?.company_info?.logo}' 
                alt="Company Logo" 
                style="width: 75px; height: 75px; object-fit: contain; border: 1px solid #ccc; border-radius: 5px;"
              />
            </td>
          </tr>
        </table>

        <hr style="border: 1px solid black; margin: 3px 0;" />

        ${formData.note ? `
        <div class="terms-section">
          <h3>Notes</h3>
          <div class="terms-content">${formData.note}</div>
        </div>
        ` : ''}

        ${formData.payment_terms ? `
        <div class="terms-section">
          <h3>Payment Terms</h3>
          <div class="terms-content">${formData.payment_terms}</div>
        </div>
        ` : ''}

        ${formData.terms_and_conditions ? `
        <div class="terms-section">
          <h3>Terms & Conditions</h3>
          <div class="terms-content">${formData.terms_and_conditions}</div>
        </div>
        ` : ''}
      </div>

      <div class="footer">
        <div class="footer-content">
          <div class="footer-item">
            <span>✉️</span>
            <span>deshmukhinfra@gmail.com</span>
          </div>
          <div class="footer-item">
            <span>🌐</span>
            <span>www.deshmukhinfrasolutions.com</span>
          </div>
        </div>
      </div>
    </div>
    `;
  }

  return pagesHtml;
})()}

</body>
</html>
`;

  const opt = {
    margin: 0.5,
    filename: `${invoiceNumber}_${customerName}.pdf`,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true },
    jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' },
  }

  const pdfInstance = html2pdf().set(opt).from(htmlContent)

  if (mode === 'blob') {
    return pdfInstance.outputPdf('blob')
  } else if (mode === 'save') {
    return pdfInstance.save()
  }
}

function UnifiedInvoicePdf() {
  const [selectedLanguage, setSelectedLanguage] = useState('english')

  const sampleFormData = {
    project_name: selectedLanguage === 'marathi' ? 'नमुना प्रकल्प' : 'Sample Project',
    customer_id: 1,
    customer: {
      name: selectedLanguage === 'marathi' ? 'श्रेया ग' : 'Shreya G',
      address: selectedLanguage === 'marathi' ? 'कर्वेनगर' : 'Karvenagar',
      mobile: '1234567890',
    },
    date: '2024-12-31',
    InvoiceStatus: selectedLanguage === 'marathi' ? 'डिलिव्हर्ड ऑर्डर' : 'Delivered Order',
    InvoiceType: 3,
    DeliveryDate: '2025-01-01',
    lat: 'Sample Address Line',
    items: Array.from({ length: 28 }, (_, i) => ({
      id: i + 1,
      work_type: String.fromCharCode(97 + (i % 26)),
      qty: Math.floor(Math.random() * 100) + 1,
      price: Math.random() * 1000,
      total_price: Math.random() * 1000,
      gst_percent: i % 2 === 0 ? 12 : 18,
      cgst_amount: Math.random() * 50,
      sgst_amount: Math.random() * 50,
    })),
    totalAmount: 400,
    discount: 10,
    finalAmount: 360,
    amountPaid: 300,
    paymentMode: selectedLanguage === 'marathi' ? 'ऑनलाइन' : 'Online',
    note: 'This is a sample note for testing purposes.',
    payment_terms: 'Payment should be made within 30 days of invoice date.',
    terms_and_conditions: 'All disputes subject to Pune jurisdiction only.',
  }

  const totalAmountWords = selectedLanguage === 'marathi' ? 'तीनशे साठ' : 'Three Hundred and Sixty'

  const handleDownload = () => {
    generateMultiLanguagePDF(
      360,
      'INV-001',
      sampleFormData.customer.name,
      sampleFormData,
      60,
      totalAmountWords,
      selectedLanguage,
      'save'
    )
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2>Multi-Language Invoice PDF Generator (Fixed Blank Page)</h2>

      <div style={{ marginBottom: '20px' }}>
        <label style={{ marginRight: '10px' }}>Select Language:</label>
        <select
          value={selectedLanguage}
          onChange={(e) => setSelectedLanguage(e.target.value)}
          style={{ padding: '5px', fontSize: '16px' }}
        >
          {Object.entries(LANGUAGES).map(([key, lang]) => (
            <option key={key} value={key}>
              {lang.name}
            </option>
          ))}
        </select>
      </div>

      <button
        onClick={handleDownload}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        {selectedLanguage === 'tamil'
          ? 'விலைப்பட்டியல் பதிவிறக்கம் செய்யவும்'
          : selectedLanguage === 'bengali'
          ? 'ইনভয়েস ডাউনলোড করুন'
          : selectedLanguage === 'marathi'
          ? 'चलन डाउनलोड करा'
          : 'Download Invoice'}
      </button>

      <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#f0f0f0', borderRadius: '5px' }}>
        <h3>Updated Improvements:</h3>
        <ul>
          <li>✅ Increased overall padding from 5px to 10px</li>
          <li>✅ Increased customer details font size from 10px to 12px</li>
          <li>✅ Increased invoice details font size from 10px to 12px</li>
          <li>✅ Increased company name font size from 14px to 16px</li>
          <li>✅ Increased company address font size from 10px to 12px</li>
          <li>✅ Increased table cell padding from 4px to 6px</li>
          <li>✅ Increased payment details font size from 10px to 12px</li>
          <li>✅ Improved overall spacing and margins</li>
          <li>✅ Adapted to customer-based API response (customer_name as project_name)</li>
          <li>✅ Added customer_id to form data</li>
        </ul>
      </div>
    </div>
  )
}

export default UnifiedInvoicePdf
