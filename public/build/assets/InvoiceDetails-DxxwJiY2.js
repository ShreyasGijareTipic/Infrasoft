import{d as xt,r as w,b as ut,u as bt,j as t}from"./index-DaQ8IcWH.js";import{h as yt}from"./html2pdf-d-wV5t4T.js";import{g,h as lt,a as ft}from"./api-CIBCEetx.js";import{C as jt,a as vt}from"./CCardBody-BgdPVtOX.js";import{C as Nt}from"./CCardHeader-BnYSwQm7.js";import{C as _t}from"./index.esm-W-SaLQ2H.js";import{C as K}from"./CButton-RPa9QO-M.js";import{C as $t}from"./CFormSelect-fqNFrf6e.js";import"./jspdf.es.min-io4gt093.js";import"./jspdf.es.min-F4ATsd5K.js";import"./typeof-QjJsDpFa.js";import"./html2canvas.esm-DZlvpFNH.js";import"./CFormControlWrapper-CkuovpMX.js";import"./CFormLabel-B6T8hfcB.js";const ct={marathi:{name:"मराठी",font:"Arial, sans-serif",labels:{projectName:"प्रकल्पाचे नाव:",customerName:"ग्राहकाचे नाव:",customerAddress:"ग्राहकाचा पत्ता:",mobile:"मोबाईल क्रमांक:",invoiceNumber:"चलन क्रमांक:",invoiceDate:"चलन तारीख:",deliveryDate:"डिलीव्हरी तारीख:",works:"कामाचे तपशील",serialNo:"अनुक्रमांक",workType:"कामाचे प्रकार",price:"किंमत (₹)",quantity:"प्रमाण",total:"एकूण (₹)",grandTotal:"एकूण",totalAfterDiscount:"सूट नंतरची एकूण",paymentDetails:"पेमेंट तपशील",amountPaid:"रक्कम भरलेली:",amountRemaining:"शिल्लक रक्कम:",paymentMode:"पेमेंट मोड:",qrCode:"QR कोड",scanToPay:"पेमेंटसाठी स्कॅन करा",amountInWords:"रक्कम शब्दांत:",bankDetails:"बँक तपशील",bank:"बँक:",accountNo:"खाते क्रमांक:",ifscCode:"IFSC कोड:",eSignature:"ई-स्वाक्षरी",authorizedSignature:"अधिकृत स्वाक्षरी",footerNote:"हे चलन संगणकाद्वारे तयार केले आहे आणि अधिकृत आहे.",only:"फक्त",baseAmount:"मूळ रक्कम",gstPercent:"जीएसटी %",cgst:"सीजीएसटी",sgst:"एसजीएसटी",taxableAmount:"करपात्र रक्कम",gstDetails:"जीएसटी तपशील"}},english:{name:"English",font:"Arial, sans-serif",labels:{projectName:"Project Name:",customerName:"Customer Name:",customerAddress:"Customer Address:",mobile:"Mobile Number:",invoiceNumber:"Invoice Number:",invoiceDate:"Invoice Date:",deliveryDate:"Delivery Date:",works:"Work Details",serialNo:"Sr. No.",workType:"Work Type",price:"Price (₹)",quantity:"Quantity",total:"Total (₹)",grandTotal:"Grand Total",totalAfterDiscount:"Total after discount",paymentDetails:"Payment Details",amountPaid:"Amount Received:",amountRemaining:"Amount Due:",paymentMode:"Payment Mode:",qrCode:"QR CODE",scanToPay:"Scan to Pay",amountInWords:"Amount in Words:",bankDetails:"Bank Details",bank:"Bank:",accountNo:"Account Number:",ifscCode:"IFSC Code:",eSignature:"E-Signature",authorizedSignature:"Authorized Signature",footerNote:"This invoice is computer generated and authorized.",only:"only",baseAmount:"Base Amount",gstPercent:"GST %",cgst:"CGST",sgst:"SGST",taxableAmount:"Taxable Amount",gstDetails:"GST Details"}}},wt=m=>!m||m.length===0?!1:m.some(b=>b.gst_percent&&b.gst_percent>0||b.cgst_amount&&b.cgst_amount>0||b.sgst_amount&&b.sgst_amount>0),Tt=m=>m.cgst&&Number(m.cgst)>0||m.sgst&&Number(m.sgst)>0||m.gst&&Number(m.gst)>0||m.igst&&Number(m.igst)>0,mt=(m,b,A,o,k,Y,P="english",W="save")=>{const l=ct[P].labels,D=ct[P].font,N=Array.isArray(o.items)?[...o.items].sort((O,z)=>(O.id||0)-(z.id||0)):[],d=wt(N),e=Tt(o),tt=`
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
      font-family: ${D}; 
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

${(()=>{var q,L,h,U,nt,x,G,n,c,y,f,j,u,s,i,a,v,T,B,Q,F,I,R,M,$,H,X,V,Z,p,J,it,at;const z=Math.ceil(N.length/19)||1,st=!!(o.note||o.payment_terms||o.terms_and_conditions);let C="";for(let S=0;S<z;S++){const ot=S*19,pt=ot+19,ht=N.slice(ot,pt),dt=S===z-1;C+=`
      ${S>0?'<div class="page-break"></div>':""}
      <div class="invoice-box">
        <div class="content-wrapper">
        
        ${S===0?`
        <!-- ===== Header on first page ===== -->
        <table class="company-header" style="width: 100%; margin-bottom: 5px;">
          <tr>
            <td style="width: 70%; vertical-align: top;">
              <div style="font-size: 22px; font-weight: bold; line-height: 1.2;">
                ${((L=(q=g())==null?void 0:q.company_info)==null?void 0:L.company_name)||"Company Name"}
              </div>
              <div style="font-size: 11px; margin-top: 2px;">
                ${((U=(h=g())==null?void 0:h.company_info)==null?void 0:U.land_mark)||"-"}
              </div>
              <div style="font-size: 11px; margin-top: 3px;">
                <b>Phone:</b> ${((x=(nt=g())==null?void 0:nt.company_info)==null?void 0:x.phone_no)||"-"}
              </div>
            </td>
            <td style="width: 30%; text-align: right; vertical-align: top;">
              <img 
                src='${lt}/img/${(n=(G=g())==null?void 0:G.company_info)==null?void 0:n.logo}' 
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
              <b>${((y=(c=g())==null?void 0:c.company_info)==null?void 0:y.company_name)||"Company Name"}</b><br/>
              ${((f=g())==null?void 0:f.name)||"Owner Name"}<br/>
              ${((u=(j=g())==null?void 0:j.company_info)==null?void 0:u.land_mark)||"-"}<br/>
              <b>Phone:</b> ${((s=g())==null?void 0:s.mobile)||"N/A"}<br/>
              <b>GSTIN:</b> ${((a=(i=g())==null?void 0:i.company_info)==null?void 0:a.gst_number)||"N/A"}<br/>
              Dist: ${((T=(v=g())==null?void 0:v.company_info)==null?void 0:T.Dist)||"-"}<br/>
              Tal: ${((Q=(B=g())==null?void 0:B.company_info)==null?void 0:Q.Tal)||"-"}<br/>
              Email: ${((I=(F=g())==null?void 0:F.company_info)==null?void 0:I.email_id)||"-"}
            </td>
            <td style="border: 1px solid #000; font-size: 10px; padding: 5px; line-height: 1.4;">
              <b>Customer Name:</b> ${((R=o.customer)==null?void 0:R.name)||"Customer Name"}<br/>
              <b>Site:</b> ${o.project_name||"Project Name"}<br/>
              ${((M=o.customer)==null?void 0:M.address)||"Customer Address"}<br/>
              <b>Phone:</b> ${(($=o.customer)==null?void 0:$.mobile)||"N/A"}<br/>
              <b>GSTIN:</b> ${o.gst_number||"-"}<br/>
              <b>PAN:</b> ${o.pan_number||"-"}
            </td>
            <td style="border: 1px solid #000; font-size: 10px; padding: 5px; line-height: 1.4;">
              <b>Invoice No:</b> ${b}<br/>
              <b>Invoice Date:</b> ${o.date}<br/>
              <b>Reference ID:</b> ${o.ref_id||"-"}<br/>
              <b>PO Number:</b> ${o.po_number||"-"}
            </td>
          </tr>
        </table>
        `:""}

        <table class="details-table" style="margin-top: 8px;">
          ${S===0?`
          <thead>
            <tr>
              <th style="width: ${d?"5%":"6%"}; font-size: 10px;">${l.serialNo}</th>
              <th style="width: ${d?"20%":"38%"}; font-size: 10px;">${l.workType}</th>
              <th style="width: ${d?"8%":"10%"}; font-size: 10px;">Unit</th>
              <th style="width: ${d?"7%":"10%"}; font-size: 10px;">${l.quantity}</th>
              <th style="width: ${d?"10%":"18%"}; font-size: 10px;">${l.price}</th>
              ${d?`
                <th style="width: 12%; font-size: 10px;">${l.baseAmount}</th>
                <th style="width: 8%; font-size: 10px;">${l.gstPercent}</th>
                <th style="width: 12%; font-size: 10px;">${l.cgst}</th>
                <th style="width: 12%; font-size: 10px;">${l.sgst}</th>
              `:""}
              <th style="width: ${d?"12%":"18%"}; font-size: 10px;">${l.total}</th>
            </tr>
          </thead>`:""}
          <tbody>
            ${ht.map((r,_)=>{const rt=r.gst_percent?r.gst_percent/2:0,gt=r.gst_percent?r.gst_percent/2:0;return`
              <tr>
                <td class="center" style="width: ${d?"5%":"6%"}; font-size: 10px;">${_+1+ot}</td>
                <td style="width: ${d?"20%":"38%"}; font-size: 10px;">${r.work_type||""}</td>
                <td class="center" style="width: ${d?"8%":"10%"}; font-size: 10px;">${r.uom||""}</td>
                <td class="center" style="width: ${d?"7%":"10%"}; font-size: 10px;">${r.qty||0}</td>
                <td class="right" style="width: ${d?"10%":"18%"}; font-size: 10px;">₹${Number(r.price||0).toFixed(2)}</td>
                ${d?`
                  <td class="right" style="width: 12%; font-size: 10px;">₹${Number(r.qty*r.price||0).toFixed(2)}</td>
                  <td class="center" style="width: 8%; font-size: 10px;">${r.gst_percent?r.gst_percent+"%":"-"}</td>
                  <td class="right" style="width: 12%; font-size: 10px;">${r.cgst_amount>0?"₹"+Number(r.cgst_amount).toFixed(2)+" ("+rt+"%)":"-"}</td>
                  <td class="right" style="width: 12%; font-size: 10px;">${r.sgst_amount>0?"₹"+Number(r.sgst_amount).toFixed(2)+" ("+gt+"%)":"-"}</td>
                `:""}
                <td class="right" style="width: ${d?"12%":"18%"}; font-size: 10px;">₹${Number(r.total_price||0).toFixed(2)}</td>
              </tr>`}).join("")}
            ${dt&&N.length>0?`
              <tr style="background: #fff3cd; font-weight: bold;">
                <td colspan="${d?"5":"4"}" class="right" style="font-size: 11px; padding: 6px;">Total:</td>
                ${d?`<td class="right" style="font-size: 11px;">₹${N.reduce((r,_)=>r+(_.qty*_.price||0),0).toFixed(2)}</td>`:""}
                ${d?'<td class="center" style="font-size: 11px;">-</td>':""}
                ${d?`<td class="right" style="font-size: 11px;">₹${N.reduce((r,_)=>r+(_.cgst_amount||0),0).toFixed(2)}</td>`:""}
                ${d?`<td class="right" style="font-size: 11px;">₹${N.reduce((r,_)=>r+(_.sgst_amount||0),0).toFixed(2)}</td>`:""}
                <td class="right" style="font-size: 11px;">₹${N.reduce((r,_)=>r+(_.total_price||0),0).toFixed(2)}</td>
              </tr>
            `:""}
          </tbody>
        </table>

    ${dt?`
  <div class="no-split">
    ${e?`
      <table class="summary" style="margin-top: 8px;">
        <tr>
          <th colspan="2" style="font-size: 12px; background: #d9e9ff; text-align: center;">${l.gstDetails}</th>
        </tr>
        <tr>
          <th style="font-size: 11px;">${l.taxableAmount}</th>
          <td class="right" style="font-size: 11px;">₹${(()=>{const r=N.reduce((_,rt)=>_+(rt.total_price||0),0);return Number(r).toFixed(2)})()}</td>
        </tr>
        ${Number(o.cgst||0)>0?`
        <tr>
          <th style="font-size: 11px;">${l.cgst} (${o.cgstPercentage||Number(o.gst||0)/2}%)</th>
          <td class="right" style="font-size: 11px;">₹${Number(o.cgst||0).toFixed(2)}</td>
        </tr>`:""}
        ${Number(o.sgst||0)>0?`
        <tr>
          <th style="font-size: 11px;">${l.sgst} (${o.sgstPercentage||Number(o.gst||0)/2}%)</th>
          <td class="right" style="font-size: 11px;">₹${Number(o.sgst||0).toFixed(2)}</td>
        </tr>`:""}
        ${Number(o.igst||0)>0?`
        <tr>
          <th style="font-size: 11px;">IGST (${o.igstPercentage||Number(o.gst||0)}%)</th>
          <td class="right" style="font-size: 11px;">₹${Number(o.igst||0).toFixed(2)}</td>
        </tr>`:""}
        <tr style="background: #e8f5e9;">
          <th style="font-size: 11px;">Total GST Amount</th>
          <td class="right" style="font-size: 11px;"><strong>₹${(Number(o.cgst||0)+Number(o.sgst||0)+Number(o.igst||0)).toFixed(2)}</strong></td>
        </tr>
      </table>
    `:""}

    ${o.discount>0?`
    <table class="summary" style="margin-top: 8px;">
      <tr>
        <th style="font-size: 11px;">Discount</th>
        <td class="right" style="font-size: 11px;">₹${Number(o.discount||0).toFixed(2)}</td>
      </tr>
    </table>
    `:""}

    <table class="summary" style="margin-top: 8px;">
      <tr style="background: #fff3cd;">
        <th style="font-size: 12px;">${l.grandTotal}</th>
        <td class="right" style="font-size: 12px;"><strong>₹${Number(m||0).toFixed(2)}</strong></td>
      </tr>
      <tr>
        <th style="font-size: 11px;">${l.amountPaid}</th>
        <td class="right" style="font-size: 11px;">₹${Number(o.amountPaid||0).toFixed(2)}</td>
      </tr>
      <tr style="background: #f8d7da;">
        <th style="vertical-align: top; font-size: 11px;">
          ${l.amountRemaining}<br />
          <span style="font-weight: normal; font-size: 10px;">
            ${l.amountInWords} ${Y} ${l.only}
          </span>
        </th>
        <td class="right" style="vertical-align: top; font-size: 11px;">
          <strong>₹${Number(k||0).toFixed(2)}</strong>
        </td>
      </tr>
    </table>
  </div>
`:""}

        </div>

        <div class="foot">
          ${l.footerNote}
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
    `}return st&&(C+=`
    <div class="page-break"></div>
    <div class="invoice-box">
      <div class="content-wrapper">
        <table class="company-header" style="width: 100%; margin-bottom: 5px;">
          <tr>
            <td style="width: 70%; vertical-align: top;">
              <div style="font-size: 22px; font-weight: bold; line-height: 1.2;">
                ${((X=(H=g())==null?void 0:H.company_info)==null?void 0:X.company_name)||"Company Name"}
              </div>
              <div style="font-size: 11px; margin-top: 2px;">
                ${((Z=(V=g())==null?void 0:V.company_info)==null?void 0:Z.land_mark)||"-"}
              </div>
              <div style="font-size: 11px; margin-top: 3px;">
                <b>Phone:</b> ${((J=(p=g())==null?void 0:p.company_info)==null?void 0:J.phone_no)||"-"}
              </div>
            </td>
            <td style="width: 30%; text-align: right; vertical-align: top;">
              <img 
                src='${lt}/img/${(at=(it=g())==null?void 0:it.company_info)==null?void 0:at.logo}' 
                alt="Company Logo" 
                style="width: 75px; height: 75px; object-fit: contain; border: 1px solid #ccc; border-radius: 5px;"
              />
            </td>
          </tr>
        </table>

        <hr style="border: 1px solid black; margin: 3px 0;" />

        ${o.note?`
        <div class="terms-section">
          <h3>Notes</h3>
          <div class="terms-content">${o.note}</div>
        </div>
        `:""}

        ${o.payment_terms?`
        <div class="terms-section">
          <h3>Payment Terms</h3>
          <div class="terms-content">${o.payment_terms}</div>
        </div>
        `:""}

        ${o.terms_and_conditions?`
        <div class="terms-section">
          <h3>Terms & Conditions</h3>
          <div class="terms-content">${o.terms_and_conditions}</div>
        </div>
        `:""}
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
    `),C})()}

</body>
</html>
`,et={margin:.5,filename:`${b}_${A}.pdf`,image:{type:"jpeg",quality:.98},html2canvas:{scale:2,useCORS:!0},jsPDF:{unit:"in",format:"a4",orientation:"portrait"}},E=yt().set(et).from(tt);if(W==="blob")return E.outputPdf("blob");if(W==="save")return E.save()},qt=()=>{var G;const m=(G=g())==null?void 0:G.company_info,{id:b}=xt(),[A,o]=w.useState(0);w.useRef(null),w.useState(null);const[k,Y]=w.useState("english"),[P,W]=w.useState(""),[l,D]=w.useState(0),{showToast:N}=ut(),d=bt(),[e,tt]=w.useState({project_name:"",customer:{name:"",address:"",mobile:"",gst_number:""},date:"",items:[],discount:0,amountPaid:0,paymentMode:"",invoiceStatus:"",finalAmount:0,totalAmount:0,invoice_number:"",status:"",deliveryDate:"",invoiceType:"",cgst:0,sgst:0,gst:0,igst:0,invoice_rules:[],ref_id:"",po_number:""}),et=()=>{d(`/edit-order/${b}`)},E=n=>{if(n===0)return"Zero";const c=["","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"],y=["Ten","Eleven","Twelve","Thirteen","Fourteen","Fifteen","Sixteen","Seventeen","Eighteen","Nineteen"],f=["","","Twenty","Thirty","Forty","Fifty","Sixty","Seventy","Eighty","Ninety"],j=i=>{let a="";return i>=100&&(a+=c[Math.floor(i/100)]+" Hundred ",i%=100),i>=20?(a+=f[Math.floor(i/10)],i%10>0&&(a+=" "+c[i%10])):i>=10?a+=y[i-10]:i>0&&(a+=c[i]),a.trim()};let u="",s=Math.floor(n);if(s>=1e7){const i=Math.floor(s/1e7);u+=j(i)+" Crore ",s%=1e7}if(s>=1e5){const i=Math.floor(s/1e5);u+=j(i)+" Lakh ",s%=1e5}if(s>=1e3){const i=Math.floor(s/1e3);u+=j(i)+" Thousand ",s%=1e3}return s>0&&(u+=j(s)),u.trim()+" Rupees Only"},O=()=>{window.print()},z=async()=>{var n,c,y,f,j,u;try{const s=await ft(`/api/order/${b}`);console.log("Fetched order:",s);const i=s.paymentType===0?"Cash":"Online (UPI/Bank Transfer)";let a="";switch(s.orderStatus){case 0:a="Cancelled Order";break;case 1:a="Delivered Order";break;case 2:a="Order Pending";break;case 3:a="Quotation";break;default:a="Unknown Status"}const v=s.discount||0,T=Number(s.finalAmount||0).toFixed(2),B=Number(s.totalAmount||0).toFixed(2),Q=T-(s.paidAmount||0);o(Math.max(0,Q));const F=Number(s.cgst||0),I=Number(s.sgst||0),R=Number(s.igst||0),M=Number(s.gst||0),$=Number(s.totalAmount||0),H=$>0?Math.round(F/$*100*100)/100:0,X=$>0?Math.round(I/$*100*100)/100:0,V=$>0?Math.round(R/$*100*100)/100:0,Z=$>0?Math.round(M/$*100*100)/100:0;tt({project_name:((n=s.project)==null?void 0:n.project_name)||"N/A",customer:{name:((c=s.project)==null?void 0:c.customer_name)||"N/A",address:((y=s.project)==null?void 0:y.work_place)||"N/A",mobile:((f=s.project)==null?void 0:f.mobile_number)||"N/A"},gst_number:((j=s.project)==null?void 0:j.gst_number)||"N/A",pan_number:((u=s.project)==null?void 0:u.pan_number)||"N/A",date:s.invoiceDate||"",items:(s.items||[]).map(p=>({id:p.id,work_type:p.product_name||p.work_type||"N/A",qty:p.dQty||p.qty||0,uom:p.uom||"N/A",price:p.dPrice||p.price||0,total_price:p.total_price||0,remark:p.remark||"",gst_percent:Number(p.gst_percent)||0,cgst_amount:Number(p.cgst_amount)||0,sgst_amount:Number(p.sgst_amount)||0})).sort((p,J)=>p.id-J.id),discount:v,amountPaid:s.paidAmount||0,paymentMode:i,invoiceStatus:a,totalAmount:B,finalAmount:T,cgst:F.toFixed(2),sgst:I.toFixed(2),gst:M.toFixed(2),igst:R.toFixed(2),cgstPercentage:H,sgstPercentage:X,igstPercentage:V,gstPercentage:Z,ref_id:s.ref_id,po_number:s.po_number||"",terms_and_conditions:s.terms_and_conditions||"",payment_terms:s.payment_terms||"",note:s.note||"",invoice_number:s.invoice_number||"N/A",status:s.orderStatus,deliveryDate:s.deliveryDate||"",invoiceType:s.invoiceType||3,invoice_rules:Array.isArray(s.invoice_rules)?s.invoice_rules:[]}),D(T),W(E(T))}catch(s){console.error("Error fetching order data:",s),N("danger","Error fetching invoice details")}};console.log("Customer GST Number:",e==null?void 0:e.gst_number),w.useEffect(()=>{z()},[b]);const st=async()=>{try{const n=await mt(e.finalAmount,e.invoice_number,e.customer.name,e,A,P,k,"blob"),c=URL.createObjectURL(n),y=encodeURIComponent(`*Invoice from ${(m==null?void 0:m.company_name)||"Company"}*

Project: ${e.project_name}
Invoice Number: ${e.invoice_number}
Total Amount: ₹${e.finalAmount}
Amount Paid: ₹${e.amountPaid}
Remaining: ₹${A}

📄 Download Invoice: ${c}

Thank you!`),f=`https://wa.me/${e.customer.mobile}?text=${y}`;window.open(f,"_blank")}catch(n){N("danger","Error sharing on WhatsApp: "+n.message)}},C=async n=>{await mt(e.finalAmount,e.invoice_number,e.customer.name,e,A,P,n,"save")},q=()=>!e.items||e.items.length===0?!1:e.items.some(n=>n.gst_percent&&n.gst_percent>0||n.cgst_amount&&n.cgst_amount>0||n.sgst_amount&&n.sgst_amount>0),L=()=>e.cgst&&Number(e.cgst)>0||e.sgst&&Number(e.sgst)>0||e.gst&&Number(e.gst)>0||e.igst&&Number(e.igst)>0,h=q(),U=L(),x=(()=>{const n=e.items.reduce((a,v)=>a+v.qty*v.price,0),c=e.items.reduce((a,v)=>a+(v.cgst_amount||0),0),y=e.items.reduce((a,v)=>a+(v.sgst_amount||0),0),f=e.items.reduce((a,v)=>a+(v.total_price||0),0),j=Number(e.cgst||0),u=Number(e.sgst||0),s=Number(e.igst||0),i=j+u+s;return{subtotalWithoutGST:n,rowCGST:c,rowSGST:y,totalAfterRowGST:f,globalCGST:j,globalSGST:u,globalIGST:s,globalTotalGST:i}})();return t.jsxs(jt,{children:[t.jsx(Nt,{children:t.jsxs("h5",{children:["Invoice ",e.invoice_number]})}),t.jsx(vt,{children:t.jsxs(_t,{fluid:!0,children:[t.jsxs("div",{className:"row section",children:[t.jsxs("div",{className:"col-md-6",children:[t.jsxs("p",{children:[t.jsx("strong",{children:"Project Name:"})," ",e.project_name]}),t.jsxs("p",{children:[t.jsx("strong",{children:"Customer Name:"})," ",e.customer.name]}),t.jsxs("p",{children:[t.jsx("strong",{children:"Customer Address:"})," ",e.customer.address]}),t.jsxs("p",{children:[t.jsx("strong",{children:"Mobile Number:"})," ",e.customer.mobile]}),t.jsxs("p",{children:[t.jsx("strong",{children:"GST Number:"})," ",e.gst_number]})]}),t.jsxs("div",{className:"col-md-6",children:[t.jsxs("p",{children:[t.jsx("strong",{children:"Invoice Number:"})," ",e.invoice_number]}),t.jsxs("p",{children:[t.jsx("strong",{children:"Reference ID:"})," ",e.ref_id]}),t.jsxs("p",{children:[t.jsx("strong",{children:"Po Number:"})," ",e.po_number]}),t.jsxs("p",{children:[t.jsx("strong",{children:"Invoice Date:"})," ",e.date]}),t.jsxs("p",{children:[t.jsx("strong",{children:"PAN Number:"})," ",e.pan_number]})]})]}),t.jsx("div",{className:"row section",children:t.jsx("div",{className:"col-md-12",children:t.jsxs("table",{className:"table table-bordered border-black",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Sr. No."}),t.jsx("th",{children:"Work Type"}),t.jsx("th",{children:"Unit"}),t.jsx("th",{children:"Quantity"}),t.jsx("th",{children:"Price"}),h&&t.jsx("th",{children:"Base Amount"}),h&&t.jsx("th",{children:"GST %"}),h&&t.jsx("th",{children:"CGST"}),h&&t.jsx("th",{children:"SGST"}),t.jsx("th",{children:"Total"})]})}),t.jsxs("tbody",{children:[e.items.length>0?e.items.map((n,c)=>{const y=n.gst_percent?n.gst_percent/2:0,f=n.gst_percent?n.gst_percent/2:0;return t.jsxs("tr",{children:[t.jsx("td",{children:c+1}),t.jsx("td",{children:n.work_type}),t.jsx("td",{children:n==null?void 0:n.uom}),t.jsx("td",{children:n.qty}),t.jsxs("td",{children:["₹",n.price.toFixed(2)]}),h&&t.jsxs("td",{children:["₹",(n.qty*n.price).toFixed(2)]}),h&&t.jsx("td",{children:n.gst_percent?`${n.gst_percent}%`:"-"}),h&&t.jsx("td",{children:n.cgst_amount>0?`₹${(n.cgst_amount||0).toFixed(2)} (${y}%)`:"-"}),h&&t.jsx("td",{children:n.sgst_amount>0?`₹${(n.sgst_amount||0).toFixed(2)} (${f}%)`:"-"}),t.jsxs("td",{children:["₹",n.total_price.toFixed(2)]})]},c)}):t.jsx("tr",{children:t.jsx("td",{colSpan:h?"10":"6",className:"text-center",children:"No work details available"})}),e.items&&e.items.length>0&&t.jsxs("tr",{className:"table-warning fw-bold",children:[t.jsx("td",{colSpan:h?"5":"4",className:"text-end",children:"Total:"}),h&&t.jsxs("td",{children:["₹",x.subtotalWithoutGST.toFixed(2)]}),h&&t.jsx("td",{children:"-"}),h&&t.jsxs("td",{children:["₹",x.rowCGST.toFixed(2)]}),h&&t.jsxs("td",{children:["₹",x.rowSGST.toFixed(2)]}),t.jsxs("td",{children:["₹",x.totalAfterRowGST.toFixed(2)]})]})]})]})})}),U&&t.jsx("div",{className:"row section",children:t.jsxs("div",{className:"col-md-12",children:[t.jsx("h6",{className:"fw-semibold text-primary",children:"GST Details"}),t.jsx("table",{className:"table table-bordered border-black",children:t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("strong",{children:"Taxable Amount:"})}),t.jsxs("td",{className:"text-center",children:["₹",x.totalAfterRowGST.toFixed(2)]})]}),x.globalCGST>0&&t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("strong",{children:["CGST (",e.cgstPercentage||Number(e.gst||0)/2,"%):"]})}),t.jsxs("td",{className:"text-center",children:["₹",x.globalCGST.toFixed(2)]})]}),x.globalSGST>0&&t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("strong",{children:["SGST (",e.sgstPercentage||Number(e.gst||0)/2,"%):"]})}),t.jsxs("td",{className:"text-center",children:["₹",x.globalSGST.toFixed(2)]})]}),x.globalIGST>0&&t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("strong",{children:["IGST (",e.igstPercentage||Number(e.gst||0),"%):"]})}),t.jsxs("td",{className:"text-center",children:["₹",x.globalIGST.toFixed(2)]})]}),t.jsxs("tr",{className:"table-success",children:[t.jsx("td",{children:t.jsx("strong",{children:"Total GST Amount:"})}),t.jsx("td",{className:"text-center",children:t.jsxs("strong",{children:["₹",x.globalTotalGST.toFixed(2)]})})]})]})})]})}),e.discount>0&&t.jsx("div",{className:"row section",children:t.jsx("div",{className:"col-md-12",children:t.jsx("table",{className:"table table-bordered border-black",children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{children:"Discount:"}),t.jsxs("td",{className:"text-center",children:["₹",e.discount]})]})})})})}),t.jsx("div",{className:"row section",children:t.jsx("div",{className:"col-md-12",children:t.jsx("table",{className:"table table-bordered border-black",children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("strong",{children:"Grand Total:"})}),t.jsx("td",{className:"text-center",children:t.jsxs("strong",{children:["₹",e.finalAmount]})})]})})})})}),t.jsx("div",{className:"row section",children:t.jsx("div",{className:"col-md-12",children:t.jsx("table",{className:"table table-bordered border-black",children:t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsx("td",{children:"Amount Paid:"}),t.jsxs("td",{children:["₹",e.amountPaid]})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"Balance Amount:"}),t.jsxs("td",{children:["₹",A.toFixed(2)]})]})]})})})}),t.jsx("div",{className:"row section mt-3",children:t.jsxs("div",{className:"col-md-12",children:[t.jsx("h6",{className:"mt-4 mb-2 fw-semibold text-primary border-bottom border-primary pb-2",children:"Note"}),t.jsx("p",{className:"ms-2 text-dark",children:e!=null&&e.note?e.note:"No note available."}),t.jsx("h6",{className:"mt-4 mb-2 fw-semibold text-primary border-bottom border-primary pb-2",children:"Payment Terms"}),t.jsx("ul",{className:"ms-3",children:e!=null&&e.payment_terms?e.payment_terms.split(`
`).map((n,c)=>t.jsx("li",{className:"text-dark",children:n},c)):t.jsx("li",{className:"text-muted",children:"No payment terms available."})}),t.jsx("h6",{className:"mt-4 mb-2 fw-semibold text-primary border-bottom border-primary pb-2",children:"Terms & Conditions"}),t.jsx("ul",{className:"ms-3",children:e!=null&&e.terms_and_conditions?e.terms_and_conditions.split(`
`).map((n,c)=>t.jsx("li",{className:"text-dark",children:n},c)):t.jsx("li",{className:"text-muted",children:"No terms and conditions provided."})})]})}),t.jsx("div",{className:"row section mt-3",children:t.jsx("div",{className:"col-md-12 text-center",children:t.jsx("p",{children:"This bill has been computer-generated and is authorized."})})}),t.jsxs("div",{className:"d-flex justify-content-center flex-wrap gap-2",children:[t.jsx(K,{color:"danger",variant:"outline",className:"d-print-none flex-fill",onClick:et,children:"Edit Order"}),t.jsx(K,{color:"primary",variant:"outline",onClick:O,className:"d-print-none flex-fill",style:{display:"none"},children:"Print"}),t.jsxs($t,{className:"mb-2 d-print-none flex-fill",value:k,onChange:n=>Y(n.target.value),style:{maxWidth:"200px",display:"none"},children:[t.jsx("option",{value:"english",children:"English"}),t.jsx("option",{value:"marathi",children:"Marathi"}),t.jsx("option",{value:"tamil",children:"Tamil"}),t.jsx("option",{value:"bengali",children:"Bengali"})]}),t.jsx(K,{color:"success",variant:"outline",onClick:()=>C(k),className:"d-print-none flex-fill",children:"Download PDF"}),t.jsx(K,{color:"success",variant:"outline",onClick:()=>st(),className:"d-print-none flex-fill",children:"Share on WhatsApp"})]})]})})]})};export{qt as default};
