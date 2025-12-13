import{d as Z,u as J,b as K,r as C,j as t,C as V}from"./index-fatTeUCR.js";import{c as Q}from"./index.esm-Mmat67Is.js";import{g as X,a as I}from"./api-CIBCEetx.js";import{h as tt}from"./html2pdf-D5qRTS5t.js";import{R as et}from"./RecordPaymentModal-MtvtoeIs.js";import{C as st}from"./cil-mobile-D_M5GP1R.js";import{C as at,a as ot}from"./CCardBody-CWs2rFEf.js";import{C as nt}from"./CCardHeader-DIjx7CZA.js";import{C as rt}from"./DefaultLayout-Dto4nkGD.js";import{C as H}from"./CButton-Dnh0eu3x.js";import{c as lt}from"./cil-arrow-left-D66Kb3Zq.js";import{c as it}from"./cil-pencil-m516yCOw.js";import{c as dt}from"./cil-credit-card-KG5pHjdT.js";import"./jspdf.es.min-Ui-YsfFS.js";import"./jspdf.es.min-CYe8ge7c.js";import"./typeof-QjJsDpFa.js";import"./html2canvas.esm-DZlvpFNH.js";import"./Feilds-BHjWXeSc.js";import"./CForm-BbEA8t0A.js";import"./CFormLabel-Cp8KupB2.js";import"./CFormInput-wID138bU.js";import"./CFormControlWrapper-BGWL0obt.js";import"./CFormSelect-f1NQQOIZ.js";import"./cil-x-0440B5Ce.js";import"./RawMaterial-BtjEDAbB.js";const ct={english:{name:"English",labels:{proformaInvoice:"Proforma Invoice",invoiceNo:"Invoice No:",tallyInvoiceNo:"Tally Invoice No:",invoiceDate:"Invoice Date:",deliveryDate:"Delivery Date:",workOrder:"Work Order:",project:"Project:",customer:"Customer:",location:"Location:",mobile:"Mobile:",workDetails:"Work Details",srNo:"Sr. No.",workType:"Work Type",unit:"Unit",quantity:"Quantity",price:"Price",baseAmount:"Base Amount",gstPercent:"GST %",cgst:"CGST",sgst:"SGST",igst:"IGST",total:"Total",subtotal:"Subtotal:",discount:"Discount:",taxableAmount:"Taxable Amount:",gstDetails:"GST Details",totalGst:"Total GST:",finalAmount:"Final Amount:",grandTotal:"Grand Total:",paidAmount:"Amount Paid:",balanceAmount:"Balance Amount:",amountInWords:"Amount in Words:",only:"Only",paymentTerms:"Payment Terms",termsConditions:"Terms & Conditions",notes:"Notes",authorizedSignature:"Authorized Signature",footer:"This invoice has been computer-generated and is authorized."}},marathi:{name:"मराठी",labels:{proformaInvoice:"प्रोफॉर्मा इनव्हॉईस",invoiceNo:"इनव्हॉईस क्रमांक:",tallyInvoiceNo:"टॅली इनव्हॉईस क्रमांक:",invoiceDate:"इनव्हॉईस तारीख:",deliveryDate:"डिलिव्हरी तारीख:",workOrder:"वर्क ऑर्डर:",project:"प्रकल्प:",customer:"ग्राहक:",location:"स्थान:",mobile:"मोबाईल:",workDetails:"कामाचे तपशील",srNo:"अ.क्र.",workType:"काम प्रकार",unit:"युनिट",quantity:"प्रमाण",price:"किंमत",baseAmount:"मूळ रक्कम",gstPercent:"जीएसटी %",cgst:"सीजीएसटी",sgst:"एसजीएसटी",igst:"आयजीएसटी",total:"एकूण",subtotal:"उपएकूण:",discount:"सूट:",taxableAmount:"करपात्र रक्कम:",gstDetails:"जीएसटी तपशील",totalGst:"एकूण जीएसटी:",finalAmount:"अंतिम रक्कम:",grandTotal:"एकूण रक्कम:",paidAmount:"भरलेली रक्कम:",balanceAmount:"शिल्लक रक्कम:",amountInWords:"रकमा शब्दांत:",only:"फक्त",paymentTerms:"पेमेंट अटी",termsConditions:"अटी व शर्ती",notes:"टिपा",authorizedSignature:"अधिकृत स्वाक्षरी",footer:"हे संगणकाद्वारे तयार केलेले इनव्हॉईस अधिकृत आहे."}}},mt=a=>{if(a===0)return"Zero";const b=["","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"],y=["Ten","Eleven","Twelve","Thirteen","Fourteen","Fifteen","Sixteen","Seventeen","Eighteen","Nineteen"],n=["","","Twenty","Thirty","Forty","Fifty","Sixty","Seventy","Eighty","Ninety"],s=r=>{let x="";return r>=100&&(x+=b[Math.floor(r/100)]+" Hundred ",r%=100),r>=20?(x+=n[Math.floor(r/10)],r%10>0&&(x+=" "+b[r%10])):r>=10?x+=y[r-10]:r>0&&(x+=b[r]),x.trim()};let e="",i=Math.floor(a);if(i>=1e7){const r=Math.floor(i/1e7);e+=s(r)+" Crore ",i%=1e7}if(i>=1e5){const r=Math.floor(i/1e5);e+=s(r)+" Lakh ",i%=1e5}if(i>=1e3){const r=Math.floor(i/1e3);e+=s(r)+" Thousand ",i%=1e3}return i>0&&(e+=s(i)),e.trim()+" Rupees Only"},ht=async(a,b="english",y="save")=>{var T,k,z,W,R,E,L,O,v,c,M,m,S,w,N,G,A,P,o,d,g,j,_,u;const n=ct[b].labels,s=X(),e=(T=a.details)==null?void 0:T.some(l=>(parseFloat(l.gst_percent)||0)>0||(parseFloat(l.cgst_amount)||0)>0||(parseFloat(l.sgst_amount)||0)>0),i=(parseFloat(a.cgst_amount)||0)>0||(parseFloat(a.sgst_amount)||0)>0||(parseFloat(a.igst_amount)||0)>0,r=mt(parseFloat(a.pending_amount)||0),x=`
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    @page { size: A4; margin: 0; }
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: Arial, sans-serif; font-size: 11px; }
    .invoice-box { 
      padding: 15px; 
      border: 2px solid #000; 
      page-break-after: always;
    }
    table { width: 100%; border-collapse: collapse; }
    .border-table { border: 1px solid #000; }
    .border-table th, .border-table td { 
      border: 1px solid #000; 
      padding: 4px; 
      font-size: 10px;
    }
    .border-table th { background: #d9e9ff; font-weight: bold; }
    .text-center { text-align: center; }
    .text-right { text-align: right; }
    .text-left { text-align: left; }
    .header-title {
      background: #cfe2ff;
      text-align: center;
      font-weight: bold;
      font-size: 16px;
      padding: 5px;
      border: 1px solid #000;
      margin: 5px 0;
    }
    .section-title {
      font-size: 12px;
      font-weight: bold;
      color: #0066cc;
      border-bottom: 2px solid #0066cc;
      padding-bottom: 3px;
      margin: 8px 0 5px 0;
    }
    .terms-content {
      white-space: pre-line;
      line-height: 1.4;
      padding: 5px;
    }
    .footer-bar {
      display: flex;
      justify-content: space-between;
      padding: 8px 20px;
      font-size: 10px;
      margin-top: 10px;
    }
  </style>
</head>
<body>
  <div class="invoice-box">
    <!-- Company Header -->
    <table style="margin-bottom: 5px;">
      <tr>
        <td style="width: 70%;">
          <div style="font-size: 20px; font-weight: bold;">${((k=s==null?void 0:s.company_info)==null?void 0:k.company_name)||"Company Name"}</div>
          <div style="font-size: 10px; margin-top: 2px;">${((z=s==null?void 0:s.company_info)==null?void 0:z.land_mark)||"-"}</div>
          <div style="font-size: 10px;"><b>Phone:</b> ${((W=s==null?void 0:s.company_info)==null?void 0:W.phone_no)||"-"}</div>
        </td>
        <td style="width: 30%; text-align: right;">
          ${(R=s==null?void 0:s.company_info)!=null&&R.logo?`<img src="/img/${s.company_info.logo}" style="width: 70px; height: 70px; object-fit: contain; border: 1px solid #ccc; border-radius: 5px;" />`:""}
        </td>
      </tr>
    </table>

    <hr style="border: 1px solid #000; margin: 3px 0;" />

    <!-- Title -->
    <div class="header-title">${n.proformaInvoice}</div>

    <!-- From/To/Details -->
    <table class="border-table" style="margin: 5px 0;">
      <tr>
        <th>FROM:</th>
        <th>TO:</th>
        <th>DETAILS:</th>
      </tr>
      <tr>
        <td style="line-height: 1.3;">
          <b>${((E=s==null?void 0:s.company_info)==null?void 0:E.company_name)||"Company Name"}</b><br/>
          ${(s==null?void 0:s.name)||""}<br/>
          ${((L=s==null?void 0:s.company_info)==null?void 0:L.land_mark)||"-"}<br/>
          <b>Phone:</b> ${((O=s==null?void 0:s.company_info)==null?void 0:O.phone_no)||"N/A"}<br/>
          <b>Email:</b> ${((v=s==null?void 0:s.company_info)==null?void 0:v.email_id)||"N/A"}<br/>
          <b>GSTIN:</b> ${(s==null?void 0:s.gst)||"N/A"}
        </td>
        <td style="line-height: 1.3;">
          <b>${((c=a.customer)==null?void 0:c.name)||"N/A"}</b><br/>
          <b>Site:</b> ${((M=a.project)==null?void 0:M.project_name)||"N/A"}<br/>
          ${((m=a.customer)==null?void 0:m.address)||"N/A"}<br/>
          <b>Phone:</b> ${((S=a.customer)==null?void 0:S.mobile)||"N/A"}<br/>
          <b>GSTIN:</b> ${((w=a.customer)==null?void 0:w.gstin)||"-"}
        </td>
        <td style="line-height: 1.3;">
          <b>Invoice No:</b> ${a.proforma_invoice_number}<br/>
          ${a.tally_invoice_number?`<b>Tally Invoice:</b> ${a.tally_invoice_number}<br/>`:""}
          <b>Date:</b> ${new Date(a.invoice_date).toLocaleDateString()}<br/>
          ${a.delivery_date?`<b>Delivery:</b> ${new Date(a.delivery_date).toLocaleDateString()}<br/>`:""}
          <b>Work Order:</b> ${((N=a.work_order)==null?void 0:N.invoice_number)||"N/A"}
        </td>
      </tr>
    </table>

    <!-- Work Details Table -->
    <table class="border-table" style="margin-top: 5px;">
      <thead>
        <tr>
          <th style="width: 5%;">${n.srNo}</th>
          <th style="width: ${e?"25%":"35%"};">${n.workType}</th>
          <th style="width: 8%;">${n.unit}</th>
          <th style="width: 8%;">${n.quantity}</th>
          <th style="width: ${e?"10%":"16%"};">${n.price}</th>
          ${e?`
          <th style="width: 10%;">${n.baseAmount}</th>
          <th style="width: 7%;">${n.gstPercent}</th>
          <th style="width: 10%;">${n.cgst}${(G=a.details[0])!=null&&G.gst_percent?` (${parseFloat(a.details[0].gst_percent)/2}%)`:""}</th>
          <th style="width: 10%;">${n.sgst}${(A=a.details[0])!=null&&A.gst_percent?` (${parseFloat(a.details[0].gst_percent)/2}%)`:""}</th>
          `:""}
          <th style="width: ${e?"12%":"16%"};">${n.total}</th>
        </tr>
      </thead>
      <tbody>
        ${(a.details||[]).map((l,f)=>{const F=parseFloat(l.qty)||0,q=parseFloat(l.price)||0,p=F*q,h=parseFloat(l.gst_percent)||0,B=parseFloat(l.cgst_amount)||0,U=parseFloat(l.sgst_amount)||0,Y=parseFloat(l.total_price)||0;return`
            <tr>
              <td class="text-center">${f+1}</td>
              <td>${l.work_type||"-"}</td>
              <td class="text-center">${l.uom||"-"}</td>
              <td class="text-center">${F.toFixed(2)}</td>
              <td class="text-right">₹${q.toFixed(2)}</td>
              ${e?`
              <td class="text-right">₹${p.toFixed(2)}</td>
              <td class="text-center">${h>0?h.toFixed(2)+"%":"-"}</td>
              <td class="text-right">${B>0?"₹"+B.toFixed(2):"-"}</td>
              <td class="text-right">${U>0?"₹"+U.toFixed(2):"-"}</td>
              `:""}
              <td class="text-right">₹${Y.toFixed(2)}</td>
            </tr>
          `}).join("")}
      </tbody>
    </table>

    ${i?`
    <!-- GST Details Section -->
    <div class="section-title">${n.gstDetails}</div>
    <table class="border-table">
      <tr>
        <th class="text-left">${n.taxableAmount}</th>
        <td class="text-center">₹${parseFloat(a.taxable_amount||0).toFixed(2)}</td>
      </tr>
      ${parseFloat(a.cgst_amount)>0?`
      <tr>
        <th class="text-left">${n.cgst} (${a.cgst_percentage||9}%)</th>
        <td class="text-center">₹${parseFloat(a.cgst_amount).toFixed(2)}</td>
      </tr>`:""}
      ${parseFloat(a.sgst_amount)>0?`
      <tr>
        <th class="text-left">${n.sgst} (${a.sgst_percentage||9}%)</th>
        <td class="text-center">₹${parseFloat(a.sgst_amount).toFixed(2)}</td>
      </tr>`:""}
      ${parseFloat(a.igst_amount)>0?`
      <tr>
        <th class="text-left">${n.igst} (${a.igst_percentage||18}%)</th>
        <td class="text-center">₹${parseFloat(a.igst_amount).toFixed(2)}</td>
      </tr>`:""}
      <tr style="background: #d4edda;">
        <th class="text-left">${n.totalGst}</th>
        <td class="text-center"><b>₹${(parseFloat(a.cgst_amount||0)+parseFloat(a.sgst_amount||0)+parseFloat(a.igst_amount||0)).toFixed(2)}</b></td>
      </tr>
    </table>
    `:""}

    ${parseFloat(a.discount)>0?`
    <!-- Discount Section -->
    <table class="border-table" style="margin-top: 5px;">
      <tr>
        <th class="text-left">${n.discount}</th>
        <td class="text-center">₹${parseFloat(a.discount).toFixed(2)}</td>
      </tr>
    </table>
    `:""}

    <!-- Grand Total -->
    <table class="border-table" style="margin-top: 5px;">
      <tr>
        <th class="text-left">${n.grandTotal}</th>
        <td class="text-center"><b>₹${parseFloat(a.final_amount).toFixed(2)}</b></td>
      </tr>
    </table>

    <!-- Payment Summary -->
    <table class="border-table" style="margin-top: 5px;">
      <tr>
        <th class="text-left">${n.paidAmount}</th>
        <td class="text-center">₹${parseFloat(a.paid_amount).toFixed(2)}</td>
      </tr>
      <tr style="background: #fff3cd;">
        <th class="text-left">${n.balanceAmount}</th>
        <td class="text-center">₹${parseFloat(a.pending_amount).toFixed(2)}</td>
      </tr>
    </table>

    <div style="margin-top: 5px; font-size: 10px;">
      <b>${n.amountInWords}</b> ${r}
    </div>

    ${(P=s==null?void 0:s.company_info)!=null&&P.sign?`
    <div style="text-align: right; margin-top: 15px;">
      <img src="/img/${s.company_info.sign}" style="width: 100px; height: 35px;" /><br/>
      <span style="font-size: 10px;">${n.authorizedSignature}</span>
    </div>
    `:""}

    <div class="footer-bar">
      <span>✉️ ${((o=s==null?void 0:s.company_info)==null?void 0:o.email_id)||"email@company.com"}</span>
      <span>🌐 www.yourcompany.com</span>
    </div>

    <div class="text-center" style="font-size: 9px; margin-top: 5px;">${n.footer}</div>
  </div>

  ${a.notes||a.payment_terms||a.terms_conditions?`
  <!-- Terms Page -->
  <div class="invoice-box">
    <table style="margin-bottom: 5px;">
      <tr>
        <td style="width: 70%;">
          <div style="font-size: 20px; font-weight: bold;">${((d=s==null?void 0:s.company_info)==null?void 0:d.company_name)||"Company Name"}</div>
          <div style="font-size: 10px;">${((g=s==null?void 0:s.company_info)==null?void 0:g.land_mark)||"-"}</div>
        </td>
        <td style="width: 30%; text-align: right;">
          ${(j=s==null?void 0:s.company_info)!=null&&j.logo?`<img src="/img/${s.company_info.logo}" style="width: 70px; height: 70px;" />`:""}
        </td>
      </tr>
    </table>
    <hr style="border: 1px solid #000; margin: 3px 0;" />

    ${a.notes?`
    <div class="section-title">${n.notes}</div>
    <div class="terms-content">${a.notes}</div>
    `:""}

    ${a.payment_terms?`
    <div class="section-title">${n.paymentTerms}</div>
    <div class="terms-content">${a.payment_terms}</div>
    `:""}

    ${a.terms_conditions?`
    <div class="section-title">${n.termsConditions}</div>
    <div class="terms-content">${a.terms_conditions}</div>
    `:""}

    <div class="footer-bar">
      <span>✉️ ${((_=s==null?void 0:s.company_info)==null?void 0:_.email_id)||"email@company.com"}</span>
      <span>🌐 www.yourcompany.com</span>
    </div>
  </div>
  `:""}
</body>
</html>
`,D={margin:.3,filename:`${a.proforma_invoice_number}_${((u=a.customer)==null?void 0:u.name)||"invoice"}.pdf`,image:{type:"jpeg",quality:.98},html2canvas:{scale:2,useCORS:!0},jsPDF:{unit:"in",format:"a4",orientation:"portrait"}},$=tt().set(D).from(x);if(y==="blob")return $.outputPdf("blob");if(y==="save")return $.save()},Et=()=>{var S,w,N,G,A,P;const{id:a}=Z(),b=J(),{showToast:y}=K(),[n,s]=C.useState(!0),[e,i]=C.useState(null),[r,x]=C.useState("english"),[D,$]=C.useState(!1);C.useEffect(()=>{T()},[a]);const T=async()=>{try{s(!0);const o=await I(`/api/proforma-invoices/${a}`);o.success?i(o.data):y("danger","Failed to fetch proforma invoice")}catch(o){console.error("Error fetching proforma invoice:",o),y("danger","Error fetching proforma invoice details")}finally{s(!1)}},k=()=>{$(!0)},z=()=>{T(),$(!1)},W=async()=>{e&&await ht(e,r,"save")},R=o=>{const d={pending:{color:"danger",text:"Pending"},partial:{color:"warning",text:"Partially Paid"},paid:{color:"success",text:"Fully Paid"}};return d[o]||d.pending},E=()=>!e||!e.details?!1:e.details.some(o=>(parseFloat(o.gst_percent)||0)>0||(parseFloat(o.cgst_amount)||0)>0||(parseFloat(o.sgst_amount)||0)>0),L=()=>e?(parseFloat(e.cgst_amount)||0)>0||(parseFloat(e.sgst_amount)||0)>0||(parseFloat(e.gst_amount)||0)>0||(parseFloat(e.igst_amount)||0)>0:!1,O=()=>{if(!e||!e.details)return{subtotalWithoutGST:0,rowCGST:0,rowSGST:0,rowTotalGST:0,totalAfterRowGST:0,globalCGST:0,globalSGST:0,globalIGST:0,globalTotalGST:0,grandTotalWithAllGST:0};const o=e.details.reduce((p,h)=>{const B=parseFloat(h.qty)||0,U=parseFloat(h.price)||0;return p+B*U},0),d=e.details.reduce((p,h)=>p+(parseFloat(h.cgst_amount)||0),0),g=e.details.reduce((p,h)=>p+(parseFloat(h.sgst_amount)||0),0),j=d+g,_=e.details.reduce((p,h)=>p+(parseFloat(h.total_price)||0),0),u=parseFloat(e.cgst_amount)||0,l=parseFloat(e.sgst_amount)||0,f=parseFloat(e.igst_amount)||0,F=u+l+f,q=_+F;return{subtotalWithoutGST:o,rowCGST:d,rowSGST:g,rowTotalGST:j,totalAfterRowGST:_,globalCGST:u,globalSGST:l,globalIGST:f,globalTotalGST:F,grandTotalWithAllGST:q}};if(n)return t.jsxs("div",{className:"text-center py-5",children:[t.jsx(V,{color:"primary"}),t.jsx("div",{className:"mt-2",children:"Loading proforma invoice..."})]});if(!e)return t.jsx(st,{color:"warning",children:"Proforma invoice not found"});const v=R(e.payment_status),c=E(),M=L(),m=O();return t.jsxs(t.Fragment,{children:[t.jsxs(at,{children:[t.jsx(nt,{children:t.jsxs("div",{className:"d-flex justify-content-between align-items-center",children:[t.jsxs("h5",{children:["Proforma Invoice ",e.proforma_invoice_number]}),t.jsxs("div",{children:[t.jsx(rt,{color:v.color,className:"me-2",children:v.text}),t.jsxs(H,{color:"secondary",size:"sm",onClick:()=>b("/invoiceTable"),children:[t.jsx(Q,{icon:lt,className:"me-1"}),"Back"]})]})]})}),t.jsxs(ot,{children:[t.jsxs("div",{className:"row section mb-4",children:[t.jsxs("div",{className:"col-md-6",children:[t.jsx("h6",{children:"Invoice Information"}),t.jsxs("p",{children:[t.jsx("strong",{children:"Proforma Invoice #:"})," ",e.proforma_invoice_number]}),e.tally_invoice_number&&t.jsxs("p",{children:[t.jsx("strong",{children:"Tally Invoice #:"})," ",e.tally_invoice_number]}),t.jsxs("p",{children:[t.jsx("strong",{children:"Invoice Date:"})," ",new Date(e.invoice_date).toLocaleDateString()]}),e.delivery_date&&t.jsxs("p",{children:[t.jsx("strong",{children:"Delivery Date:"})," ",new Date(e.delivery_date).toLocaleDateString()]})]}),t.jsxs("div",{className:"col-md-6",children:[t.jsx("h6",{children:"Work Order & Project Information"}),t.jsxs("p",{children:[t.jsx("strong",{children:"Work Order #:"})," ",(S=e.work_order)==null?void 0:S.invoice_number]}),t.jsxs("p",{children:[t.jsx("strong",{children:"Project:"})," ",(w=e.project)==null?void 0:w.project_name]}),t.jsxs("p",{children:[t.jsx("strong",{children:"Customer:"})," ",(N=e.customer)==null?void 0:N.name]}),t.jsxs("p",{children:[t.jsx("strong",{children:"Location:"})," ",(G=e.customer)==null?void 0:G.address]}),t.jsxs("p",{children:[t.jsx("strong",{children:"Mobile:"})," ",(A=e.customer)==null?void 0:A.mobile]})]})]}),t.jsx("div",{className:"row section mb-4",children:t.jsxs("div",{className:"col-md-12",children:[t.jsx("h6",{children:"Work Details"}),t.jsxs("table",{className:"table table-bordered border-black",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Sr. No."}),t.jsx("th",{children:"Work Type"}),t.jsx("th",{children:"Unit"}),t.jsx("th",{children:"Quantity"}),t.jsx("th",{children:"Price"}),c&&t.jsx("th",{children:"Base Amount"}),c&&t.jsx("th",{children:"GST %"}),c&&t.jsxs("th",{children:["CGST",e.details.length>0&&parseFloat(e.details[0].gst_percent)>0&&t.jsxs(t.Fragment,{children:[" (",parseFloat(e.details[0].gst_percent)/2,"%)"]})]}),c&&t.jsxs("th",{children:["SGST",e.details.length>0&&parseFloat(e.details[0].gst_percent)>0&&t.jsxs(t.Fragment,{children:[" (",parseFloat(e.details[0].gst_percent)/2,"%)"]})]}),t.jsx("th",{children:"Total"})]})}),t.jsx("tbody",{children:e.details&&e.details.length>0?e.details.map((o,d)=>{const g=parseFloat(o.qty)||0,j=parseFloat(o.price)||0,_=g*j,u=parseFloat(o.gst_percent)||0,l=parseFloat(o.cgst_amount)||0,f=parseFloat(o.sgst_amount)||0,F=parseFloat(o.total_price)||0;return t.jsxs("tr",{children:[t.jsx("td",{children:d+1}),t.jsx("td",{children:o.work_type}),t.jsx("td",{children:o.uom}),t.jsx("td",{children:g.toFixed(2)}),t.jsxs("td",{children:["₹",j.toFixed(2)]}),c&&t.jsxs("td",{children:["₹",_.toFixed(2)]}),c&&t.jsx("td",{children:u>0?`${u.toFixed(2)}%`:"-"}),c&&t.jsx("td",{children:l>0?`₹${l.toFixed(2)}`:"-"}),c&&t.jsx("td",{children:f>0?`₹${f.toFixed(2)}`:"-"}),t.jsxs("td",{children:["₹",F.toFixed(2)]})]},d)}):t.jsx("tr",{children:t.jsx("td",{colSpan:c?"10":"6",className:"text-center",children:"No work details available"})})})]})]})}),M&&t.jsx("div",{className:"row section mb-4",children:t.jsxs("div",{className:"col-md-12",children:[t.jsx("h6",{className:"fw-semibold text-primary",children:"GST Details"}),t.jsx("table",{className:"table table-bordered border-black",children:t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("strong",{children:"Taxable Amount:"})}),t.jsxs("td",{className:"text-center",children:["₹",m.totalAfterRowGST.toFixed(2)]})]}),m.globalCGST>0&&t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("strong",{children:["CGST (",parseFloat(e.cgst_percentage)||parseFloat(e.gst_percentage)/2||0,"%):"]})}),t.jsxs("td",{className:"text-center",children:["₹",m.globalCGST.toFixed(2)]})]}),m.globalSGST>0&&t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("strong",{children:["SGST (",parseFloat(e.sgst_percentage)||parseFloat(e.gst_percentage)/2||0,"%):"]})}),t.jsxs("td",{className:"text-center",children:["₹",m.globalSGST.toFixed(2)]})]}),m.globalIGST>0&&t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("strong",{children:["IGST (",parseFloat(e.igst_percentage)||parseFloat(e.gst_percentage)||0,"%):"]})}),t.jsxs("td",{className:"text-center",children:["₹",m.globalIGST.toFixed(2)]})]}),t.jsxs("tr",{className:"table-success",children:[t.jsx("td",{children:t.jsx("strong",{children:"Total GST Amount:"})}),t.jsx("td",{className:"text-center",children:t.jsxs("strong",{children:["₹",m.globalTotalGST.toFixed(2)]})})]})]})})]})}),parseFloat(e.discount)>0&&t.jsx("div",{className:"row section mb-4",children:t.jsx("div",{className:"col-md-12",children:t.jsx("table",{className:"table table-bordered border-black",children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("strong",{children:"Discount:"})}),t.jsxs("td",{className:"text-center",children:["₹",parseFloat(e.discount).toFixed(2)]})]})})})})}),t.jsx("div",{className:"row section mb-4",children:t.jsx("div",{className:"col-md-12",children:t.jsx("table",{className:"table table-bordered border-black",children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("strong",{children:"Grand Total:"})}),t.jsx("td",{className:"text-center",children:t.jsxs("strong",{children:["₹",parseFloat(e.final_amount).toFixed(2)]})})]})})})})}),t.jsx("div",{className:"row section mb-4",children:t.jsx("div",{className:"col-md-12",children:t.jsx("table",{className:"table table-bordered border-black",children:t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("strong",{children:"Amount Paid:"})}),t.jsxs("td",{className:"text-center",children:["₹",parseFloat(e.paid_amount).toFixed(2)]})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("strong",{children:"Balance Amount:"})}),t.jsxs("td",{className:"text-center",children:["₹",parseFloat(e.pending_amount).toFixed(2)]})]})]})})})}),t.jsx("div",{className:"row section mb-4",children:t.jsxs("div",{className:"col-md-12",children:[e.notes&&t.jsxs(t.Fragment,{children:[t.jsx("h6",{className:"mt-4 mb-2 fw-semibold text-primary border-bottom border-primary pb-2",children:"Note"}),t.jsx("p",{className:"ms-2 text-dark",children:e.notes})]}),e.payment_terms&&t.jsxs(t.Fragment,{children:[t.jsx("h6",{className:"mt-4 mb-2 fw-semibold text-primary border-bottom border-primary pb-2",children:"Payment Terms"}),t.jsx("ul",{className:"ms-3",children:e.payment_terms.split(`
`).filter(o=>o.trim()!=="").map((o,d)=>t.jsx("li",{className:"text-dark",children:o},d))})]}),e.terms_conditions&&t.jsxs(t.Fragment,{children:[t.jsx("h6",{className:"mt-4 mb-2 fw-semibold text-primary border-bottom border-primary pb-2",children:"Terms & Conditions"}),t.jsx("ul",{className:"ms-3",children:e.terms_conditions.split(`
`).filter(o=>o.trim()!=="").map((o,d)=>t.jsx("li",{className:"text-dark",children:o},d))})]})]})}),t.jsx("div",{className:"row section mb-4",children:t.jsx("div",{className:"col-md-12 text-center",children:t.jsx("p",{children:"This invoice has been computer-generated and is authorized."})})}),t.jsxs("div",{className:"d-flex justify-content-center flex-wrap gap-2 d-print-none",children:[t.jsxs(H,{color:"danger",variant:"outline",onClick:()=>b(`/edit-proforma-invoice/${a}`),children:[t.jsx(Q,{icon:it,className:"me-1"}),"Edit Invoice"]}),parseFloat(e.pending_amount)>0&&t.jsxs(H,{color:"success",onClick:k,children:[t.jsx(Q,{icon:dt,className:"me-1"}),"Record Payment"]}),t.jsxs(H,{color:"info",onClick:W,children:["Download PDF (",r,")"]})]})]})]}),D&&t.jsx(et,{visible:D,onClose:()=>$(!1),orderData:{id:e.id,proforma_invoice_id:e.id,invoice_number:e.proforma_invoice_number,project_name:(P=e.project)==null?void 0:P.project_name,finalAmount:e.final_amount,paidAmount:e.paid_amount,isProformaInvoice:!0},onPaymentRecorded:z})]})};export{Et as default};
