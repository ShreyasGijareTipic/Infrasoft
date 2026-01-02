import{d as Y,u as Z,b as J,r as D,j as t,C as K}from"./index-2HJ-j-Kr.js";import{c as Q}from"./index.esm-DegARfP0.js";import{g as V,a as X}from"./api-CIBCEetx.js";import{h as I}from"./html2pdf-DI0_ulsW.js";import{R as tt}from"./RecordPaymentModal-BNCnOztK.js";import{C as et}from"./cil-mobile-B5UOp7tH.js";import{C as st,a as at}from"./CCardBody-B36NFFEm.js";import{C as ot}from"./CCardHeader-Cm87llrc.js";import{C as rt}from"./DefaultLayout-CyVOLzSQ.js";import{C as H}from"./CButton-ChW-yoOE.js";import{c as lt}from"./cil-pencil-m516yCOw.js";import{c as nt}from"./cil-credit-card-KG5pHjdT.js";import"./jspdf.es.min-Fk_hPh8Q.js";import"./jspdf.es.min-UyVKh0wM.js";import"./typeof-QjJsDpFa.js";import"./html2canvas.esm-DZlvpFNH.js";import"./Feilds-BHjWXeSc.js";import"./CForm-DYbbRBNz.js";import"./CFormLabel-DMp8BC0Y.js";import"./CFormInput-DYM7ipjm.js";import"./CFormControlWrapper-BOjiYF1h.js";import"./CFormSelect-CwUomMrr.js";import"./cil-x-0440B5Ce.js";import"./RawMaterial-BtjEDAbB.js";const it={english:{name:"English",labels:{proformaInvoice:"Proforma Invoice",invoiceNo:"Invoice No:",tallyInvoiceNo:"Tally Invoice No:",invoiceDate:"Invoice Date:",deliveryDate:"Delivery Date:",workOrder:"Work Order:",project:"Project:",customer:"Customer:",location:"Location:",mobile:"Mobile:",workDetails:"Work Details",srNo:"Sr. No.",workType:"Work Type",unit:"Unit",quantity:"Quantity",price:"Price",baseAmount:"Base Amount",gstPercent:"GST %",cgst:"CGST",sgst:"SGST",igst:"IGST",total:"Total",subtotal:"Subtotal:",discount:"Discount:",taxableAmount:"Taxable Amount:",gstDetails:"GST Details",totalGst:"Total GST:",finalAmount:"Final Amount:",grandTotal:"Grand Total:",paidAmount:"Amount Paid:",balanceAmount:"Balance Amount:",amountInWords:"Amount in Words:",only:"Only",paymentTerms:"Payment Terms",termsConditions:"Terms & Conditions",notes:"Notes",authorizedSignature:"Authorized Signature",footer:"This invoice has been computer-generated and is authorized."}},marathi:{name:"मराठी",labels:{proformaInvoice:"प्रोफॉर्मा इनव्हॉईस",invoiceNo:"इनव्हॉईस क्रमांक:",tallyInvoiceNo:"टॅली इनव्हॉईस क्रमांक:",invoiceDate:"इनव्हॉईस तारीख:",deliveryDate:"डिलिव्हरी तारीख:",workOrder:"वर्क ऑर्डर:",project:"प्रकल्प:",customer:"ग्राहक:",location:"स्थान:",mobile:"मोबाईल:",workDetails:"कामाचे तपशील",srNo:"अ.क्र.",workType:"काम प्रकार",unit:"युनिट",quantity:"प्रमाण",price:"किंमत",baseAmount:"मूळ रक्कम",gstPercent:"जीएसटी %",cgst:"सीजीएसटी",sgst:"एसजीएसटी",igst:"आयजीएसटी",total:"एकूण",subtotal:"उपएकूण:",discount:"सूट:",taxableAmount:"करपात्र रक्कम:",gstDetails:"जीएसटी तपशील",totalGst:"एकूण जीएसटी:",finalAmount:"अंतिम रक्कम:",grandTotal:"एकूण रक्कम:",paidAmount:"भरलेली रक्कम:",balanceAmount:"शिल्लक रक्कम:",amountInWords:"रकमा शब्दांत:",only:"फक्त",paymentTerms:"पेमेंट अटी",termsConditions:"अटी व शर्ती",notes:"टिपा",authorizedSignature:"अधिकृत स्वाक्षरी",footer:"हे संगणकाद्वारे तयार केलेले इनव्हॉईस अधिकृत आहे."}}},dt=a=>{if(a===0)return"Zero";const F=["","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"],T=["Ten","Eleven","Twelve","Thirteen","Fourteen","Fifteen","Sixteen","Seventeen","Eighteen","Nineteen"],r=["","","Twenty","Thirty","Forty","Fifty","Sixty","Seventy","Eighty","Ninety"],s=d=>{let y="";return d>=100&&(y+=F[Math.floor(d/100)]+" Hundred ",d%=100),d>=20?(y+=r[Math.floor(d/10)],d%10>0&&(y+=" "+F[d%10])):d>=10?y+=T[d-10]:d>0&&(y+=F[d]),y.trim()};let e="",i=Math.floor(a);if(i>=1e7){const d=Math.floor(i/1e7);e+=s(d)+" Crore ",i%=1e7}if(i>=1e5){const d=Math.floor(i/1e5);e+=s(d)+" Lakh ",i%=1e5}if(i>=1e3){const d=Math.floor(i/1e3);e+=s(d)+" Thousand ",i%=1e3}return i>0&&(e+=s(i)),e.trim()+" Rupees Only"},ct=async(a,F="english",T="save")=>{var W,M,E,O,q,L,S,m,B,h,w,v,G,A,P,C,o,l,j;const r=it[F].labels,s=V(),e=(a.details||[]).sort((n,c)=>n.id-c.id),i=e.some(n=>(parseFloat(n.gst_percent)||0)>0||(parseFloat(n.cgst_amount)||0)>0||(parseFloat(n.sgst_amount)||0)>0),d=(parseFloat(a.cgst_amount)||0)>0||(parseFloat(a.sgst_amount)||0)>0||(parseFloat(a.igst_amount)||0)>0,y=e.reduce((n,c)=>n+(parseFloat(c.total_price)||0),0),k=dt(parseFloat(a.pending_amount)||0),N=`
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    @page { size: A4; margin: 0; }
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: Arial, sans-serif; font-size: 11px; }
    .invoice-box { 
      padding: 20px; 
      border: 3px solid #000; 
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
          <div style="font-size: 20px; font-weight: bold;">${((W=s==null?void 0:s.company_info)==null?void 0:W.company_name)||"Company Name"}</div>
          <div style="font-size: 10px; margin-top: 2px;">${((M=s==null?void 0:s.company_info)==null?void 0:M.land_mark)||"-"}</div>
          <div style="font-size: 10px;"><b>Phone:</b> ${((E=s==null?void 0:s.company_info)==null?void 0:E.phone_no)||"-"}</div>
        </td>
        <td style="width: 30%; text-align: right;">
          ${(O=s==null?void 0:s.company_info)!=null&&O.logo?`<img src="/img/${s.company_info.logo}" style="width: 70px; height: 70px; object-fit: contain; border: 1px solid #ccc; border-radius: 5px;" />`:""}
        </td>
      </tr>
    </table>

    <hr style="border: 1px solid #000; margin: 3px 0;" />

    <!-- Title -->
    <div class="header-title">${r.proformaInvoice}</div>

    <!-- From/To/Details -->
    <table class="border-table" style="margin: 5px 0;">
      <tr>
        <th>FROM:</th>
        <th>TO:</th>
        <th>DETAILS:</th>
      </tr>
      <tr>
        <td style="line-height: 1.3;">
          <b>${((q=s==null?void 0:s.company_info)==null?void 0:q.company_name)||"Company Name"}</b><br/>
          ${(s==null?void 0:s.name)||""}<br/>
          ${((L=s==null?void 0:s.company_info)==null?void 0:L.land_mark)||"-"}<br/>
          <b>Phone:</b> ${((S=s==null?void 0:s.company_info)==null?void 0:S.phone_no)||"N/A"}<br/>
          <b>Email:</b> ${((m=s==null?void 0:s.company_info)==null?void 0:m.email_id)||"N/A"}<br/>
          <b>GSTIN:</b> ${(s==null?void 0:s.gst)||"N/A"}
        </td>
        <td style="line-height: 1.3;">
          <b>${((B=a.customer)==null?void 0:B.name)||"N/A"}</b><br/>
          <b>Site:</b> ${((h=a.project)==null?void 0:h.project_name)||"N/A"}<br/>
          ${((w=a.customer)==null?void 0:w.address)||"N/A"}<br/>
          <b>Phone:</b> ${((v=a.customer)==null?void 0:v.mobile)||"N/A"}<br/>
          <b>GSTIN:</b> ${((G=a.customer)==null?void 0:G.gstin)||"-"}
        </td>
        <td style="line-height: 1.3;">
          <b>Invoice No:</b> ${a.proforma_invoice_number}<br/>
          ${a.tally_invoice_number?`<b>Tally Invoice:</b> ${a.tally_invoice_number}<br/>`:""}
          <b>Date:</b> ${new Date(a.invoice_date).toLocaleDateString()}<br/>
          ${a.delivery_date?`<b>Delivery:</b> ${new Date(a.delivery_date).toLocaleDateString()}<br/>`:""}
          <b>Work Order:</b> ${((A=a.work_order)==null?void 0:A.invoice_number)||"N/A"}
        </td>
      </tr>
    </table>

    <!-- Work Details Table -->
    <table class="border-table" style="margin-top: 5px;">
      <thead>
        <tr>
          <th style="width: 5%;">${r.srNo}</th>
          <th style="width: ${i?"25%":"35%"};">${r.workType}</th>
          <th style="width: 8%;">${r.unit}</th>
          <th style="width: 8%;">${r.quantity}</th>
          <th style="width: ${i?"10%":"16%"};">${r.price}</th>
          ${i?`
          <th style="width: 10%;">${r.baseAmount}</th>
          <th style="width: 7%;">${r.gstPercent}</th>
          <th style="width: 10%;">${r.cgst}</th>
          <th style="width: 10%;">${r.sgst}</th>
          `:""}
          <th style="width: ${i?"12%":"16%"};">${r.total}</th>
        </tr>
      </thead>
      <tbody>
        ${e.map((n,c)=>{const p=parseFloat(n.qty)||0,b=parseFloat(n.price)||0,f=p*b,g=parseFloat(n.gst_percent)||0,_=parseFloat(n.cgst_amount)||0,x=parseFloat(n.sgst_amount)||0,u=parseFloat(n.total_price)||0,$=g?g/2:0,U=g?g/2:0;return`
            <tr>
              <td class="text-center">${c+1}</td>
              <td>${n.work_type||"-"}</td>
              <td class="text-center">${n.uom||"-"}</td>
              <td class="text-center">${p.toFixed(2)}</td>
              <td class="text-right">₹${b.toFixed(2)}</td>
              ${i?`
              <td class="text-right">₹${f.toFixed(2)}</td>
              <td class="text-center">${g>0?g.toFixed(2)+"%":"-"}</td>
              <td class="text-right">${_>0?"₹"+_.toFixed(2)+" ("+$+"%)":"-"}</td>
              <td class="text-right">${x>0?"₹"+x.toFixed(2)+" ("+U+"%)":"-"}</td>
              `:""}
              <td class="text-right">₹${u.toFixed(2)}</td>
            </tr>
          `}).join("")}
        ${e.length>0?`
        <tr style="background: #fff3cd; font-weight: bold;">
          <td colspan="${i?"5":"4"}" class="text-right">Total:</td>
          ${i?`<td class="text-right">₹${e.reduce((n,c)=>n+(parseFloat(c.qty)||0)*(parseFloat(c.price)||0),0).toFixed(2)}</td>`:""}
          ${i?'<td class="text-center">-</td>':""}
          ${i?`<td class="text-right">₹${e.reduce((n,c)=>n+(parseFloat(c.cgst_amount)||0),0).toFixed(2)}</td>`:""}
          ${i?`<td class="text-right">₹${e.reduce((n,c)=>n+(parseFloat(c.sgst_amount)||0),0).toFixed(2)}</td>`:""}
          <td class="text-right">₹${y.toFixed(2)}</td>
        </tr>
        `:""}
      </tbody>
    </table>

    ${d?`
    <!-- GST Details Section -->
    <div class="section-title">${r.gstDetails}</div>
    <table class="border-table">
      <tr>
        <th class="text-left">${r.taxableAmount}</th>
        <td class="text-center">₹${y.toFixed(2)}</td>
      </tr>
      ${parseFloat(a.cgst_amount)>0?`
      <tr>
        <th class="text-left">${r.cgst} (${a.cgst_percentage_calculated||0}%)</th>
        <td class="text-center">₹${parseFloat(a.cgst_amount).toFixed(2)}</td>
      </tr>`:""}
      ${parseFloat(a.sgst_amount)>0?`
      <tr>
        <th class="text-left">${r.sgst} (${a.sgst_percentage_calculated||0}%)</th>
        <td class="text-center">₹${parseFloat(a.sgst_amount).toFixed(2)}</td>
      </tr>`:""}
      ${parseFloat(a.igst_amount)>0?`
      <tr>
        <th class="text-left">${r.igst} (${a.igst_percentage_calculated||0}%)</th>
        <td class="text-center">₹${parseFloat(a.igst_amount).toFixed(2)}</td>
      </tr>`:""}
      <tr style="background: #d4edda;">
        <th class="text-left">${r.totalGst}</th>
        <td class="text-center"><b>₹${(parseFloat(a.cgst_amount||0)+parseFloat(a.sgst_amount||0)+parseFloat(a.igst_amount||0)).toFixed(2)}</b></td>
      </tr>
    </table>
    `:""}

    ${parseFloat(a.discount)>0?`
    <!-- Discount Section -->
    <table class="border-table" style="margin-top: 5px;">
      <tr>
        <th class="text-left">${r.discount}</th>
        <td class="text-center">₹${parseFloat(a.discount).toFixed(2)}</td>
      </tr>
    </table>
    `:""}

    <!-- Grand Total -->
    <table class="border-table" style="margin-top: 5px;">
      <tr>
        <th class="text-left">${r.grandTotal}</th>
        <td class="text-center"><b>₹${parseFloat(a.final_amount).toFixed(2)}</b></td>
      </tr>
    </table>

    <!-- Payment Summary -->
    <table class="border-table" style="margin-top: 5px;">
      <tr>
        <th class="text-left">${r.paidAmount}</th>
        <td class="text-center">₹${parseFloat(a.paid_amount).toFixed(2)}</td>
      </tr>
      <tr style="background: #fff3cd;">
        <th class="text-left">${r.balanceAmount}</th>
        <td class="text-center">₹${parseFloat(a.pending_amount).toFixed(2)}</td>
      </tr>
    </table>

    <div style="margin-top: 5px; font-size: 10px;">
      <b>${r.amountInWords}</b> ${k}
    </div>

    ${(P=s==null?void 0:s.company_info)!=null&&P.sign?`
    <div style="text-align: right; margin-top: 15px;">
      <img src="/img/${s.company_info.sign}" style="width: 100px; height: 35px;" /><br/>
      <span style="font-size: 10px;">${r.authorizedSignature}</span>
    </div>
    `:""}

    <div class="footer-bar">
      <span>✉️ deshmukhinfra@gmail.com</span>
      <span>🌐 www.deshmukhinfrasolutions.com</span>
    </div>

    <div class="text-center" style="font-size: 9px; margin-top: 5px;">${r.footer}</div>
  </div>

  ${a.notes||a.payment_terms||a.terms_conditions?`
  <!-- Terms Page -->
  <div class="invoice-box">
    <table style="margin-bottom: 5px;">
      <tr>
        <td style="width: 70%;">
          <div style="font-size: 20px; font-weight: bold;">${((C=s==null?void 0:s.company_info)==null?void 0:C.company_name)||"Company Name"}</div>
          <div style="font-size: 10px;">${((o=s==null?void 0:s.company_info)==null?void 0:o.land_mark)||"-"}</div>
        </td>
        <td style="width: 30%; text-align: right;">
          ${(l=s==null?void 0:s.company_info)!=null&&l.logo?`<img src="/img/${s.company_info.logo}" style="width: 70px; height: 70px;" />`:""}
        </td>
      </tr>
    </table>
    <hr style="border: 1px solid #000; margin: 3px 0;" />

    ${a.notes?`
    <div class="section-title">${r.notes}</div>
    <div class="terms-content">${a.notes}</div>
    `:""}

    ${a.payment_terms?`
    <div class="section-title">${r.paymentTerms}</div>
    <div class="terms-content">${a.payment_terms}</div>
    `:""}

    ${a.terms_conditions?`
    <div class="section-title">${r.termsConditions}</div>
    <div class="terms-content">${a.terms_conditions}</div>
    `:""}

    <div class="footer-bar">
      <span>✉️ deshmukhinfra@gmail.com</span>
      <span>🌐 www.deshmukhinfrasolutions.com</span>
    </div>
  </div>
  `:""}
</body>
</html>
`,z={margin:.3,filename:`${a.proforma_invoice_number}_${((j=a.customer)==null?void 0:j.name)||"invoice"}.pdf`,image:{type:"jpeg",quality:.98},html2canvas:{scale:2,useCORS:!0},jsPDF:{unit:"in",format:"a4",orientation:"portrait"}},R=I().set(z).from(N);if(T==="blob")return R.outputPdf("blob");if(T==="save")return R.save()},zt=()=>{var w,v,G,A,P,C;const{id:a}=Y(),F=Z(),{showToast:T}=J(),[r,s]=D.useState(!0),[e,i]=D.useState(null),[d,y]=D.useState("english"),[k,N]=D.useState(!1);D.useEffect(()=>{z()},[a]);const z=async()=>{try{s(!0);const o=await X(`/api/proforma-invoices/${a}`);if(o.success){const l=o.data;l.details&&Array.isArray(l.details)&&(l.details=l.details.sort((u,$)=>u.id-$.id));const j=parseFloat(l.cgst_amount)||0,n=parseFloat(l.sgst_amount)||0,c=parseFloat(l.igst_amount)||0,p=parseFloat(l.gst_amount)||0,b=(l.details||[]).reduce((u,$)=>u+(parseFloat($.total_price)||0),0);let f=0,g=0,_=0,x=0;b>0&&(f=Math.round(j/b*100*100)/100,g=Math.round(n/b*100*100)/100,_=Math.round(c/b*100*100)/100,x=Math.round(p/b*100*100)/100),l.cgst_percentage_calculated=f,l.sgst_percentage_calculated=g,l.igst_percentage_calculated=_,l.gst_percentage_calculated=x,i(l)}else T("danger","Failed to fetch proforma invoice")}catch(o){console.error("Error fetching proforma invoice:",o),T("danger","Error fetching proforma invoice details")}finally{s(!1)}},R=()=>{N(!0)},W=()=>{z(),N(!1)},M=async()=>{e&&await ct(e,d,"save")},E=o=>{const l={pending:{color:"danger",text:"Pending"},partial:{color:"warning",text:"Partially Paid"},paid:{color:"success",text:"Fully Paid"}};return l[o]||l.pending},O=()=>!e||!e.details?!1:e.details.some(o=>(parseFloat(o.gst_percent)||0)>0||(parseFloat(o.cgst_amount)||0)>0||(parseFloat(o.sgst_amount)||0)>0),q=()=>e?(parseFloat(e.cgst_amount)||0)>0||(parseFloat(e.sgst_amount)||0)>0||(parseFloat(e.gst_amount)||0)>0||(parseFloat(e.igst_amount)||0)>0:!1,L=()=>{if(!e||!e.details)return{subtotalWithoutGST:0,rowCGST:0,rowSGST:0,rowTotalGST:0,totalAfterRowGST:0,globalCGST:0,globalSGST:0,globalIGST:0,globalTotalGST:0,grandTotalWithAllGST:0};const o=e.details.reduce((x,u)=>{const $=parseFloat(u.qty)||0,U=parseFloat(u.price)||0;return x+$*U},0),l=e.details.reduce((x,u)=>x+(parseFloat(u.cgst_amount)||0),0),j=e.details.reduce((x,u)=>x+(parseFloat(u.sgst_amount)||0),0),n=l+j,c=e.details.reduce((x,u)=>x+(parseFloat(u.total_price)||0),0),p=parseFloat(e.cgst_amount)||0,b=parseFloat(e.sgst_amount)||0,f=parseFloat(e.igst_amount)||0,g=p+b+f,_=c+g;return{subtotalWithoutGST:o,rowCGST:l,rowSGST:j,rowTotalGST:n,totalAfterRowGST:c,globalCGST:p,globalSGST:b,globalIGST:f,globalTotalGST:g,grandTotalWithAllGST:_}};if(r)return t.jsxs("div",{className:"text-center py-5",children:[t.jsx(K,{color:"primary"}),t.jsx("div",{className:"mt-2",children:"Loading proforma invoice..."})]});if(!e)return t.jsx(et,{color:"warning",children:"Proforma invoice not found"});const S=E(e.payment_status),m=O(),B=q(),h=L();return t.jsxs(t.Fragment,{children:[t.jsxs(st,{children:[t.jsx(ot,{children:t.jsxs("div",{className:"d-flex justify-content-between align-items-center",children:[t.jsx("h5",{className:"mb-0",children:"Proforma Invoice Details"}),t.jsx(rt,{color:S.color,size:"lg",children:S.text})]})}),t.jsxs(at,{children:[t.jsxs("div",{className:"row mb-4",children:[t.jsxs("div",{className:"col-md-6",children:[t.jsx("h6",{className:"fw-bold text-primary",children:"Bill To:"}),t.jsxs("p",{className:"mb-1",children:[t.jsx("strong",{children:"Name:"})," ",((w=e.project)==null?void 0:w.customer_name)||"N/A"]}),t.jsxs("p",{className:"mb-1",children:[t.jsx("strong",{children:"Address:"})," ",((v=e.project)==null?void 0:v.work_place)||"N/A"]}),t.jsxs("p",{className:"mb-1",children:[t.jsx("strong",{children:"Mobile:"})," ",((G=e.project)==null?void 0:G.mobile_number)||"N/A"]}),((A=e.project)==null?void 0:A.gst_number)&&t.jsxs("p",{className:"mb-1",children:[t.jsx("strong",{children:"GSTIN:"})," ",e.project.gst_number]})]}),t.jsxs("div",{className:"col-md-6 text-end",children:[t.jsx("h6",{className:"fw-bold text-primary",children:"Invoice Details:"}),t.jsxs("p",{className:"mb-1",children:[t.jsx("strong",{children:"Invoice No:"})," ",e.proforma_invoice_number]}),t.jsxs("p",{className:"mb-1",children:[t.jsx("strong",{children:"Date:"})," ",new Date(e.invoice_date).toLocaleDateString("en-IN")]}),t.jsxs("p",{className:"mb-1",children:[t.jsx("strong",{children:"Project:"})," ",((P=e.project)==null?void 0:P.project_name)||"N/A"]}),e.po_number&&t.jsxs("p",{className:"mb-1",children:[t.jsx("strong",{children:"PO Number:"})," ",e.po_number]})]})]}),t.jsx("div",{className:"row section mb-4",children:t.jsxs("div",{className:"col-md-12",children:[t.jsx("h6",{className:"fw-semibold text-primary border-bottom border-primary pb-2 mb-3",children:"Work Details"}),t.jsxs("table",{className:"table table-bordered border-black",children:[t.jsx("thead",{className:"table-primary",children:t.jsxs("tr",{children:[t.jsx("th",{children:"Sr. No"}),t.jsx("th",{children:"Work Type"}),t.jsx("th",{children:"UOM"}),t.jsx("th",{children:"Qty"}),t.jsx("th",{children:"Rate"}),m&&t.jsx("th",{children:"Base Amount"}),m&&t.jsx("th",{children:"GST %"}),m&&t.jsx("th",{children:"CGST"}),m&&t.jsx("th",{children:"SGST"}),t.jsx("th",{children:"Total"})]})}),t.jsxs("tbody",{children:[e.details&&e.details.length>0?e.details.map((o,l)=>{const j=parseFloat(o.qty)||0,n=parseFloat(o.price)||0,c=j*n,p=parseFloat(o.gst_percent)||0,b=parseFloat(o.cgst_amount)||0,f=parseFloat(o.sgst_amount)||0,g=p?p/2:0,_=p?p/2:0,x=parseFloat(o.total_price)||0;return t.jsxs("tr",{children:[t.jsx("td",{children:l+1}),t.jsx("td",{children:o.work_type||"N/A"}),t.jsx("td",{children:o.uom||"N/A"}),t.jsx("td",{children:j.toFixed(2)}),t.jsxs("td",{children:["₹",n.toFixed(2)]}),m&&t.jsxs("td",{children:["₹",c.toFixed(2)]}),m&&t.jsx("td",{children:p?`${p}%`:"-"}),m&&t.jsx("td",{children:b>0?`₹${b.toFixed(2)} (${g}%)`:"-"}),m&&t.jsx("td",{children:f>0?`₹${f.toFixed(2)} (${_}%)`:"-"}),t.jsxs("td",{children:["₹",x.toFixed(2)]})]},l)}):t.jsx("tr",{children:t.jsx("td",{colSpan:m?"10":"6",className:"text-center",children:"No work details available"})}),e.details&&e.details.length>0&&t.jsxs("tr",{className:"table-warning fw-bold",children:[t.jsx("td",{colSpan:m?"5":"4",className:"text-end",children:"Total:"}),m&&t.jsxs("td",{children:["₹",h.subtotalWithoutGST.toFixed(2)]}),m&&t.jsx("td",{children:"-"}),m&&t.jsxs("td",{children:["₹",h.rowCGST.toFixed(2)]}),m&&t.jsxs("td",{children:["₹",h.rowSGST.toFixed(2)]}),t.jsxs("td",{children:["₹",h.totalAfterRowGST.toFixed(2)]})]})]})]})]})}),B&&t.jsx("div",{className:"row section mb-4",children:t.jsxs("div",{className:"col-md-12",children:[t.jsx("h6",{className:"fw-semibold text-primary",children:"GST Details"}),t.jsx("table",{className:"table table-bordered border-black",children:t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("strong",{children:"Taxable Amount:"})}),t.jsxs("td",{className:"text-center",children:["₹",h.totalAfterRowGST.toFixed(2)]})]}),h.globalCGST>0&&t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("strong",{children:["CGST (",e.cgst_percentage_calculated||0,"%):"]})}),t.jsxs("td",{className:"text-center",children:["₹",h.globalCGST.toFixed(2)]})]}),h.globalSGST>0&&t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("strong",{children:["SGST (",e.sgst_percentage_calculated||0,"%):"]})}),t.jsxs("td",{className:"text-center",children:["₹",h.globalSGST.toFixed(2)]})]}),h.globalIGST>0&&t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("strong",{children:["IGST (",e.igst_percentage_calculated||0,"%):"]})}),t.jsxs("td",{className:"text-center",children:["₹",h.globalIGST.toFixed(2)]})]}),t.jsxs("tr",{className:"table-success",children:[t.jsx("td",{children:t.jsx("strong",{children:"Total GST Amount:"})}),t.jsx("td",{className:"text-center",children:t.jsxs("strong",{children:["₹",h.globalTotalGST.toFixed(2)]})})]})]})})]})}),parseFloat(e.discount)>0&&t.jsx("div",{className:"row section mb-4",children:t.jsx("div",{className:"col-md-12",children:t.jsx("table",{className:"table table-bordered border-black",children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("strong",{children:"Discount:"})}),t.jsxs("td",{className:"text-center",children:["₹",parseFloat(e.discount).toFixed(2)]})]})})})})}),t.jsx("div",{className:"row section mb-4",children:t.jsx("div",{className:"col-md-12",children:t.jsx("table",{className:"table table-bordered border-black",children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("strong",{children:"Grand Total:"})}),t.jsx("td",{className:"text-center",children:t.jsxs("strong",{children:["₹",parseFloat(e.final_amount).toFixed(2)]})})]})})})})}),t.jsx("div",{className:"row section mb-4",children:t.jsx("div",{className:"col-md-12",children:t.jsx("table",{className:"table table-bordered border-black",children:t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("strong",{children:"Amount Paid:"})}),t.jsxs("td",{className:"text-center",children:["₹",parseFloat(e.paid_amount).toFixed(2)]})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("strong",{children:"Balance Amount:"})}),t.jsxs("td",{className:"text-center",children:["₹",parseFloat(e.pending_amount).toFixed(2)]})]})]})})})}),t.jsx("div",{className:"row section mb-4",children:t.jsxs("div",{className:"col-md-12",children:[e.notes&&t.jsxs(t.Fragment,{children:[t.jsx("h6",{className:"mt-4 mb-2 fw-semibold text-primary border-bottom border-primary pb-2",children:"Note"}),t.jsx("p",{className:"ms-2 text-dark",children:e.notes})]}),e.payment_terms&&t.jsxs(t.Fragment,{children:[t.jsx("h6",{className:"mt-4 mb-2 fw-semibold text-primary border-bottom border-primary pb-2",children:"Payment Terms"}),t.jsx("ul",{className:"ms-3",children:e.payment_terms.split(`
`).filter(o=>o.trim()!=="").map((o,l)=>t.jsx("li",{className:"text-dark",children:o},l))})]}),e.terms_conditions&&t.jsxs(t.Fragment,{children:[t.jsx("h6",{className:"mt-4 mb-2 fw-semibold text-primary border-bottom border-primary pb-2",children:"Terms & Conditions"}),t.jsx("ul",{className:"ms-3",children:e.terms_conditions.split(`
`).filter(o=>o.trim()!=="").map((o,l)=>t.jsx("li",{className:"text-dark",children:o},l))})]})]})}),t.jsx("div",{className:"row section mb-4",children:t.jsx("div",{className:"col-md-12 text-center",children:t.jsx("p",{children:"This invoice has been computer-generated and is authorized."})})}),t.jsxs("div",{className:"d-flex justify-content-center flex-wrap gap-2 d-print-none",children:[t.jsxs(H,{color:"danger",variant:"outline",onClick:()=>F(`/edit-proforma-invoice/${a}`),children:[t.jsx(Q,{icon:lt,className:"me-1"}),"Edit Proforma Invoice"]}),parseFloat(e.pending_amount)>0&&t.jsxs(H,{color:"success",onClick:R,children:[t.jsx(Q,{icon:nt,className:"me-1"}),"Record Payment"]}),t.jsxs(H,{color:"info",onClick:M,children:["Download PDF (",d,")"]})]})]})]}),k&&t.jsx(tt,{visible:k,onClose:()=>N(!1),orderData:{id:e.id,proforma_invoice_id:e.id,invoice_number:e.proforma_invoice_number,project_name:(C=e.project)==null?void 0:C.project_name,finalAmount:e.final_amount,paidAmount:e.paid_amount,isProformaInvoice:!0},onPaymentRecorded:W})]})};export{zt as default};
