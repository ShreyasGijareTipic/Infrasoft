import{d as Z,u as J,b as K,r as k,j as t,C as V}from"./index-C2yVeD7S.js";import{c as Q}from"./index.esm-BfesGHR4.js";import{g as X,a as I}from"./api-CIBCEetx.js";import{h as tt}from"./html2pdf-DCslbGjU.js";import{R as et}from"./RecordPaymentModal-D4yJqWF7.js";import{C as st}from"./cil-mobile-YEmBCbC2.js";import{C as at,a as ot}from"./CCardBody-D-jAy6vr.js";import{C as nt}from"./CCardHeader-6bNqU1xa.js";import{C as lt}from"./DefaultLayout-BQzMumzV.js";import{C as H}from"./CButton-pXUvGqWL.js";import{c as rt}from"./cil-arrow-left-D66Kb3Zq.js";import{c as it}from"./cil-pencil-m516yCOw.js";import{c as dt}from"./cil-credit-card-KG5pHjdT.js";import"./jspdf.es.min-NBB-aZqm.js";import"./jspdf.es.min-DXUXeSrX.js";import"./typeof-QjJsDpFa.js";import"./html2canvas.esm-DZlvpFNH.js";import"./Feilds-BHjWXeSc.js";import"./CForm-9WpppnGX.js";import"./CFormLabel-eLpXnSYX.js";import"./CFormInput-CXoXZ5N_.js";import"./CFormControlWrapper-D7XNeBGJ.js";import"./CFormSelect-Cs5qoCpd.js";import"./cil-x-0440B5Ce.js";import"./RawMaterial-BtjEDAbB.js";const ct={english:{name:"English",labels:{proformaInvoice:"Proforma Invoice",invoiceNo:"Invoice No:",tallyInvoiceNo:"Tally Invoice No:",invoiceDate:"Invoice Date:",deliveryDate:"Delivery Date:",workOrder:"Work Order:",project:"Project:",customer:"Customer:",location:"Location:",mobile:"Mobile:",workDetails:"Work Details",srNo:"Sr. No.",workType:"Work Type",unit:"Unit",quantity:"Quantity",price:"Price",baseAmount:"Base Amount",gstPercent:"GST %",cgst:"CGST",sgst:"SGST",igst:"IGST",total:"Total",subtotal:"Subtotal:",discount:"Discount:",taxableAmount:"Taxable Amount:",gstDetails:"GST Details",totalGst:"Total GST:",finalAmount:"Final Amount:",grandTotal:"Grand Total:",paidAmount:"Amount Paid:",balanceAmount:"Balance Amount:",amountInWords:"Amount in Words:",only:"Only",paymentTerms:"Payment Terms",termsConditions:"Terms & Conditions",notes:"Notes",authorizedSignature:"Authorized Signature",footer:"This invoice has been computer-generated and is authorized."}},marathi:{name:"मराठी",labels:{proformaInvoice:"प्रोफॉर्मा इनव्हॉईस",invoiceNo:"इनव्हॉईस क्रमांक:",tallyInvoiceNo:"टॅली इनव्हॉईस क्रमांक:",invoiceDate:"इनव्हॉईस तारीख:",deliveryDate:"डिलिव्हरी तारीख:",workOrder:"वर्क ऑर्डर:",project:"प्रकल्प:",customer:"ग्राहक:",location:"स्थान:",mobile:"मोबाईल:",workDetails:"कामाचे तपशील",srNo:"अ.क्र.",workType:"काम प्रकार",unit:"युनिट",quantity:"प्रमाण",price:"किंमत",baseAmount:"मूळ रक्कम",gstPercent:"जीएसटी %",cgst:"सीजीएसटी",sgst:"एसजीएसटी",igst:"आयजीएसटी",total:"एकूण",subtotal:"उपएकूण:",discount:"सूट:",taxableAmount:"करपात्र रक्कम:",gstDetails:"जीएसटी तपशील",totalGst:"एकूण जीएसटी:",finalAmount:"अंतिम रक्कम:",grandTotal:"एकूण रक्कम:",paidAmount:"भरलेली रक्कम:",balanceAmount:"शिल्लक रक्कम:",amountInWords:"रकमा शब्दांत:",only:"फक्त",paymentTerms:"पेमेंट अटी",termsConditions:"अटी व शर्ती",notes:"टिपा",authorizedSignature:"अधिकृत स्वाक्षरी",footer:"हे संगणकाद्वारे तयार केलेले इनव्हॉईस अधिकृत आहे."}}},mt=a=>{if(a===0)return"Zero";const f=["","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"],F=["Ten","Eleven","Twelve","Thirteen","Fourteen","Fifteen","Sixteen","Seventeen","Eighteen","Nineteen"],n=["","","Twenty","Thirty","Forty","Fifty","Sixty","Seventy","Eighty","Ninety"],s=i=>{let y="";return i>=100&&(y+=f[Math.floor(i/100)]+" Hundred ",i%=100),i>=20?(y+=n[Math.floor(i/10)],i%10>0&&(y+=" "+f[i%10])):i>=10?y+=F[i-10]:i>0&&(y+=f[i]),y.trim()};let e="",d=Math.floor(a);if(d>=1e7){const i=Math.floor(d/1e7);e+=s(i)+" Crore ",d%=1e7}if(d>=1e5){const i=Math.floor(d/1e5);e+=s(i)+" Lakh ",d%=1e5}if(d>=1e3){const i=Math.floor(d/1e3);e+=s(i)+" Thousand ",d%=1e3}return d>0&&(e+=s(d)),e.trim()+" Rupees Only"},ht=async(a,f="english",F="save")=>{var v,W,R,M,E,L,O,q,w,m,B,x,N,G,A,C,P,D,o,l,p,j,_,g;const n=ct[f].labels,s=X(),e=(v=a.details)==null?void 0:v.some(r=>(parseFloat(r.gst_percent)||0)>0||(parseFloat(r.cgst_amount)||0)>0||(parseFloat(r.sgst_amount)||0)>0),d=(parseFloat(a.cgst_amount)||0)>0||(parseFloat(a.sgst_amount)||0)>0||(parseFloat(a.igst_amount)||0)>0,i=mt(parseFloat(a.pending_amount)||0),y=`
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
          <div style="font-size: 20px; font-weight: bold;">${((W=s==null?void 0:s.company_info)==null?void 0:W.company_name)||"Company Name"}</div>
          <div style="font-size: 10px; margin-top: 2px;">${((R=s==null?void 0:s.company_info)==null?void 0:R.land_mark)||"-"}</div>
          <div style="font-size: 10px;"><b>Phone:</b> ${((M=s==null?void 0:s.company_info)==null?void 0:M.phone_no)||"-"}</div>
        </td>
        <td style="width: 30%; text-align: right;">
          ${(E=s==null?void 0:s.company_info)!=null&&E.logo?`<img src="/img/${s.company_info.logo}" style="width: 70px; height: 70px; object-fit: contain; border: 1px solid #ccc; border-radius: 5px;" />`:""}
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
          <b>${((L=s==null?void 0:s.company_info)==null?void 0:L.company_name)||"Company Name"}</b><br/>
          ${(s==null?void 0:s.name)||""}<br/>
          ${((O=s==null?void 0:s.company_info)==null?void 0:O.land_mark)||"-"}<br/>
          <b>Phone:</b> ${((q=s==null?void 0:s.company_info)==null?void 0:q.phone_no)||"N/A"}<br/>
          <b>Email:</b> ${((w=s==null?void 0:s.company_info)==null?void 0:w.email_id)||"N/A"}<br/>
          <b>GSTIN:</b> ${(s==null?void 0:s.gst)||"N/A"}
        </td>
        <td style="line-height: 1.3;">
          <b>${((m=a.customer)==null?void 0:m.name)||"N/A"}</b><br/>
          <b>Site:</b> ${((B=a.project)==null?void 0:B.project_name)||"N/A"}<br/>
          ${((x=a.customer)==null?void 0:x.address)||"N/A"}<br/>
          <b>Phone:</b> ${((N=a.customer)==null?void 0:N.mobile)||"N/A"}<br/>
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
          <th style="width: 5%;">${n.srNo}</th>
          <th style="width: ${e?"25%":"35%"};">${n.workType}</th>
          <th style="width: 8%;">${n.unit}</th>
          <th style="width: 8%;">${n.quantity}</th>
          <th style="width: ${e?"10%":"16%"};">${n.price}</th>
          ${e?`
          <th style="width: 10%;">${n.baseAmount}</th>
          <th style="width: 7%;">${n.gstPercent}</th>
          <th style="width: 10%;">${n.cgst}${(C=a.details[0])!=null&&C.gst_percent?` (${parseFloat(a.details[0].gst_percent)/2}%)`:""}</th>
          <th style="width: 10%;">${n.sgst}${(P=a.details[0])!=null&&P.gst_percent?` (${parseFloat(a.details[0].gst_percent)/2}%)`:""}</th>
          `:""}
          <th style="width: ${e?"12%":"16%"};">${n.total}</th>
        </tr>
      </thead>
      <tbody>
        ${(a.details||[]).map((r,b)=>{const u=parseFloat(r.qty)||0,T=parseFloat(r.price)||0,h=u*T,c=parseFloat(r.gst_percent)||0,S=parseFloat(r.cgst_amount)||0,U=parseFloat(r.sgst_amount)||0,Y=parseFloat(r.total_price)||0;return`
            <tr>
              <td class="text-center">${b+1}</td>
              <td>${r.work_type||"-"}</td>
              <td class="text-center">${r.uom||"-"}</td>
              <td class="text-center">${u.toFixed(2)}</td>
              <td class="text-right">₹${T.toFixed(2)}</td>
              ${e?`
              <td class="text-right">₹${h.toFixed(2)}</td>
              <td class="text-center">${c>0?c.toFixed(2)+"%":"-"}</td>
              <td class="text-right">${S>0?"₹"+S.toFixed(2):"-"}</td>
              <td class="text-right">${U>0?"₹"+U.toFixed(2):"-"}</td>
              `:""}
              <td class="text-right">₹${Y.toFixed(2)}</td>
            </tr>
          `}).join("")}
      </tbody>
    </table>

    ${d?`
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
      <b>${n.amountInWords}</b> ${i}
    </div>

    ${(D=s==null?void 0:s.company_info)!=null&&D.sign?`
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
          <div style="font-size: 20px; font-weight: bold;">${((l=s==null?void 0:s.company_info)==null?void 0:l.company_name)||"Company Name"}</div>
          <div style="font-size: 10px;">${((p=s==null?void 0:s.company_info)==null?void 0:p.land_mark)||"-"}</div>
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
`,z={margin:.3,filename:`${a.proforma_invoice_number}_${((g=a.customer)==null?void 0:g.name)||"invoice"}.pdf`,image:{type:"jpeg",quality:.98},html2canvas:{scale:2,useCORS:!0},jsPDF:{unit:"in",format:"a4",orientation:"portrait"}},$=tt().set(z).from(y);if(F==="blob")return $.outputPdf("blob");if(F==="save")return $.save()},Mt=()=>{var N,G,A,C,P,D;const{id:a}=Z(),f=J(),{showToast:F}=K(),[n,s]=k.useState(!0),[e,d]=k.useState(null),[i,y]=k.useState("english"),[z,$]=k.useState(!1);k.useEffect(()=>{v()},[a]);const v=async()=>{try{s(!0);const o=await I(`/api/proforma-invoices/${a}`);if(o.success){const l=o.data,p=parseFloat(l.cgst_amount)||0,j=parseFloat(l.sgst_amount)||0,_=parseFloat(l.igst_amount)||0,g=parseFloat(l.gst_amount)||0,r=(l.details||[]).reduce((c,S)=>c+(parseFloat(S.total_price)||0),0);let b=0,u=0,T=0,h=0;r>0&&(b=Math.round(p/r*100*100)/100,u=Math.round(j/r*100*100)/100,T=Math.round(_/r*100*100)/100,h=Math.round(g/r*100*100)/100),l.cgst_percentage_calculated=b,l.sgst_percentage_calculated=u,l.igst_percentage_calculated=T,l.gst_percentage_calculated=h,d(l)}else F("danger","Failed to fetch proforma invoice")}catch(o){console.error("Error fetching proforma invoice:",o),F("danger","Error fetching proforma invoice details")}finally{s(!1)}},W=()=>{$(!0)},R=()=>{v(),$(!1)},M=async()=>{e&&await ht(e,i,"save")},E=o=>{const l={pending:{color:"danger",text:"Pending"},partial:{color:"warning",text:"Partially Paid"},paid:{color:"success",text:"Fully Paid"}};return l[o]||l.pending},L=()=>!e||!e.details?!1:e.details.some(o=>(parseFloat(o.gst_percent)||0)>0||(parseFloat(o.cgst_amount)||0)>0||(parseFloat(o.sgst_amount)||0)>0),O=()=>e?(parseFloat(e.cgst_amount)||0)>0||(parseFloat(e.sgst_amount)||0)>0||(parseFloat(e.gst_amount)||0)>0||(parseFloat(e.igst_amount)||0)>0:!1,q=()=>{if(!e||!e.details)return{subtotalWithoutGST:0,rowCGST:0,rowSGST:0,rowTotalGST:0,totalAfterRowGST:0,globalCGST:0,globalSGST:0,globalIGST:0,globalTotalGST:0,grandTotalWithAllGST:0};const o=e.details.reduce((h,c)=>{const S=parseFloat(c.qty)||0,U=parseFloat(c.price)||0;return h+S*U},0),l=e.details.reduce((h,c)=>h+(parseFloat(c.cgst_amount)||0),0),p=e.details.reduce((h,c)=>h+(parseFloat(c.sgst_amount)||0),0),j=l+p,_=e.details.reduce((h,c)=>h+(parseFloat(c.total_price)||0),0),g=parseFloat(e.cgst_amount)||0,r=parseFloat(e.sgst_amount)||0,b=parseFloat(e.igst_amount)||0,u=g+r+b,T=_+u;return{subtotalWithoutGST:o,rowCGST:l,rowSGST:p,rowTotalGST:j,totalAfterRowGST:_,globalCGST:g,globalSGST:r,globalIGST:b,globalTotalGST:u,grandTotalWithAllGST:T}};if(n)return t.jsxs("div",{className:"text-center py-5",children:[t.jsx(V,{color:"primary"}),t.jsx("div",{className:"mt-2",children:"Loading proforma invoice..."})]});if(!e)return t.jsx(st,{color:"warning",children:"Proforma invoice not found"});const w=E(e.payment_status),m=L(),B=O(),x=q();return t.jsxs(t.Fragment,{children:[t.jsxs(at,{children:[t.jsx(nt,{children:t.jsxs("div",{className:"d-flex justify-content-between align-items-center",children:[t.jsxs("h5",{children:["Proforma Invoice ",e.proforma_invoice_number]}),t.jsxs("div",{children:[t.jsx(lt,{color:w.color,className:"me-2",children:w.text}),t.jsxs(H,{color:"secondary",size:"sm",onClick:()=>f("/invoiceTable"),children:[t.jsx(Q,{icon:rt,className:"me-1"}),"Back"]})]})]})}),t.jsxs(ot,{children:[t.jsxs("div",{className:"row section mb-4",children:[t.jsxs("div",{className:"col-md-6",children:[t.jsx("h6",{children:"Invoice Information"}),t.jsxs("p",{children:[t.jsx("strong",{children:"Proforma Invoice #:"})," ",e.proforma_invoice_number]}),e.tally_invoice_number&&t.jsxs("p",{children:[t.jsx("strong",{children:"Tally Invoice #:"})," ",e.tally_invoice_number]}),t.jsxs("p",{children:[t.jsx("strong",{children:"Invoice Date:"})," ",new Date(e.invoice_date).toLocaleDateString()]}),e.delivery_date&&t.jsxs("p",{children:[t.jsx("strong",{children:"Delivery Date:"})," ",new Date(e.delivery_date).toLocaleDateString()]})]}),t.jsxs("div",{className:"col-md-6",children:[t.jsx("h6",{children:"Work Order & Project Information"}),t.jsxs("p",{children:[t.jsx("strong",{children:"Work Order #:"})," ",(N=e.work_order)==null?void 0:N.invoice_number]}),t.jsxs("p",{children:[t.jsx("strong",{children:"Project:"})," ",(G=e.project)==null?void 0:G.project_name]}),t.jsxs("p",{children:[t.jsx("strong",{children:"Customer:"})," ",(A=e.customer)==null?void 0:A.name]}),t.jsxs("p",{children:[t.jsx("strong",{children:"Location:"})," ",(C=e.customer)==null?void 0:C.address]}),t.jsxs("p",{children:[t.jsx("strong",{children:"Mobile:"})," ",(P=e.customer)==null?void 0:P.mobile]})]})]}),t.jsx("div",{className:"row section mb-4",children:t.jsxs("div",{className:"col-md-12",children:[t.jsx("h6",{children:"Work Details"}),t.jsxs("table",{className:"table table-bordered border-black",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Sr. No."}),t.jsx("th",{children:"Work Type"}),t.jsx("th",{children:"Unit"}),t.jsx("th",{children:"Quantity"}),t.jsx("th",{children:"Price"}),m&&t.jsx("th",{children:"Base Amount"}),m&&t.jsx("th",{children:"GST %"}),m&&t.jsxs("th",{children:["CGST",e.details.length>0&&parseFloat(e.details[0].gst_percent)>0&&t.jsxs(t.Fragment,{children:[" (",parseFloat(e.details[0].gst_percent)/2,"%)"]})]}),m&&t.jsxs("th",{children:["SGST",e.details.length>0&&parseFloat(e.details[0].gst_percent)>0&&t.jsxs(t.Fragment,{children:[" (",parseFloat(e.details[0].gst_percent)/2,"%)"]})]}),t.jsx("th",{children:"Total"})]})}),t.jsx("tbody",{children:e.details&&e.details.length>0?e.details.map((o,l)=>{const p=parseFloat(o.qty)||0,j=parseFloat(o.price)||0,_=p*j,g=parseFloat(o.gst_percent)||0,r=parseFloat(o.cgst_amount)||0,b=parseFloat(o.sgst_amount)||0,u=parseFloat(o.total_price)||0;return t.jsxs("tr",{children:[t.jsx("td",{children:l+1}),t.jsx("td",{children:o.work_type}),t.jsx("td",{children:o.uom}),t.jsx("td",{children:p.toFixed(2)}),t.jsxs("td",{children:["₹",j.toFixed(2)]}),m&&t.jsxs("td",{children:["₹",_.toFixed(2)]}),m&&t.jsx("td",{children:g>0?`${g.toFixed(2)}%`:"-"}),m&&t.jsx("td",{children:r>0?`₹${r.toFixed(2)}`:"-"}),m&&t.jsx("td",{children:b>0?`₹${b.toFixed(2)}`:"-"}),t.jsxs("td",{children:["₹",u.toFixed(2)]})]},l)}):t.jsx("tr",{children:t.jsx("td",{colSpan:m?"10":"6",className:"text-center",children:"No work details available"})})})]})]})}),B&&t.jsx("div",{className:"row section mb-4",children:t.jsxs("div",{className:"col-md-12",children:[t.jsx("h6",{className:"fw-semibold text-primary",children:"GST Details"}),t.jsx("table",{className:"table table-bordered border-black",children:t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("strong",{children:"Taxable Amount:"})}),t.jsxs("td",{className:"text-center",children:["₹",x.totalAfterRowGST.toFixed(2)]})]}),x.globalCGST>0&&t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("strong",{children:["CGST (",e.cgst_percentage_calculated||0,"%):"]})}),t.jsxs("td",{className:"text-center",children:["₹",x.globalCGST.toFixed(2)]})]}),x.globalSGST>0&&t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("strong",{children:["SGST (",e.sgst_percentage_calculated||0,"%):"]})}),t.jsxs("td",{className:"text-center",children:["₹",x.globalSGST.toFixed(2)]})]}),x.globalIGST>0&&t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("strong",{children:["IGST (",e.igst_percentage_calculated||0,"%):"]})}),t.jsxs("td",{className:"text-center",children:["₹",x.globalIGST.toFixed(2)]})]}),t.jsxs("tr",{className:"table-success",children:[t.jsx("td",{children:t.jsx("strong",{children:"Total GST Amount:"})}),t.jsx("td",{className:"text-center",children:t.jsxs("strong",{children:["₹",x.globalTotalGST.toFixed(2)]})})]})]})})]})}),parseFloat(e.discount)>0&&t.jsx("div",{className:"row section mb-4",children:t.jsx("div",{className:"col-md-12",children:t.jsx("table",{className:"table table-bordered border-black",children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("strong",{children:"Discount:"})}),t.jsxs("td",{className:"text-center",children:["₹",parseFloat(e.discount).toFixed(2)]})]})})})})}),t.jsx("div",{className:"row section mb-4",children:t.jsx("div",{className:"col-md-12",children:t.jsx("table",{className:"table table-bordered border-black",children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("strong",{children:"Grand Total:"})}),t.jsx("td",{className:"text-center",children:t.jsxs("strong",{children:["₹",parseFloat(e.final_amount).toFixed(2)]})})]})})})})}),t.jsx("div",{className:"row section mb-4",children:t.jsx("div",{className:"col-md-12",children:t.jsx("table",{className:"table table-bordered border-black",children:t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("strong",{children:"Amount Paid:"})}),t.jsxs("td",{className:"text-center",children:["₹",parseFloat(e.paid_amount).toFixed(2)]})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("strong",{children:"Balance Amount:"})}),t.jsxs("td",{className:"text-center",children:["₹",parseFloat(e.pending_amount).toFixed(2)]})]})]})})})}),t.jsx("div",{className:"row section mb-4",children:t.jsxs("div",{className:"col-md-12",children:[e.notes&&t.jsxs(t.Fragment,{children:[t.jsx("h6",{className:"mt-4 mb-2 fw-semibold text-primary border-bottom border-primary pb-2",children:"Note"}),t.jsx("p",{className:"ms-2 text-dark",children:e.notes})]}),e.payment_terms&&t.jsxs(t.Fragment,{children:[t.jsx("h6",{className:"mt-4 mb-2 fw-semibold text-primary border-bottom border-primary pb-2",children:"Payment Terms"}),t.jsx("ul",{className:"ms-3",children:e.payment_terms.split(`
`).filter(o=>o.trim()!=="").map((o,l)=>t.jsx("li",{className:"text-dark",children:o},l))})]}),e.terms_conditions&&t.jsxs(t.Fragment,{children:[t.jsx("h6",{className:"mt-4 mb-2 fw-semibold text-primary border-bottom border-primary pb-2",children:"Terms & Conditions"}),t.jsx("ul",{className:"ms-3",children:e.terms_conditions.split(`
`).filter(o=>o.trim()!=="").map((o,l)=>t.jsx("li",{className:"text-dark",children:o},l))})]})]})}),t.jsx("div",{className:"row section mb-4",children:t.jsx("div",{className:"col-md-12 text-center",children:t.jsx("p",{children:"This invoice has been computer-generated and is authorized."})})}),t.jsxs("div",{className:"d-flex justify-content-center flex-wrap gap-2 d-print-none",children:[t.jsxs(H,{color:"danger",variant:"outline",onClick:()=>f(`/edit-proforma-invoice/${a}`),children:[t.jsx(Q,{icon:it,className:"me-1"}),"Edit Invoice"]}),parseFloat(e.pending_amount)>0&&t.jsxs(H,{color:"success",onClick:W,children:[t.jsx(Q,{icon:dt,className:"me-1"}),"Record Payment"]}),t.jsxs(H,{color:"info",onClick:M,children:["Download PDF (",i,")"]})]})]})]}),z&&t.jsx(et,{visible:z,onClose:()=>$(!1),orderData:{id:e.id,proforma_invoice_id:e.id,invoice_number:e.proforma_invoice_number,project_name:(D=e.project)==null?void 0:D.project_name,finalAmount:e.final_amount,paidAmount:e.paid_amount,isProformaInvoice:!0},onPaymentRecorded:R})]})};export{Mt as default};
