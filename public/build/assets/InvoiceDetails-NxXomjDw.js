import{d as ue,r as _,b as ye,u as fe,j as e}from"./index-fatTeUCR.js";import{h as je}from"./html2pdf-D5qRTS5t.js";import{g as c,h as ce,a as ve}from"./api-CIBCEetx.js";import{C as Ne,a as _e}from"./CCardBody-CWs2rFEf.js";import{C as $e}from"./CCardHeader-DIjx7CZA.js";import{C as we}from"./index.esm-Mmat67Is.js";import{C as O}from"./CButton-Dnh0eu3x.js";import{C as Te}from"./CFormSelect-f1NQQOIZ.js";import"./jspdf.es.min-Ui-YsfFS.js";import"./jspdf.es.min-CYe8ge7c.js";import"./typeof-QjJsDpFa.js";import"./html2canvas.esm-DZlvpFNH.js";import"./CFormControlWrapper-BGWL0obt.js";import"./CFormLabel-Cp8KupB2.js";const me={marathi:{name:"मराठी",font:"Arial, sans-serif",labels:{projectName:"प्रकल्पाचे नाव:",customerName:"ग्राहकाचे नाव:",customerAddress:"ग्राहकाचा पत्ता:",mobile:"मोबाईल क्रमांक:",invoiceNumber:"चलन क्रमांक:",invoiceDate:"चलन तारीख:",deliveryDate:"डिलीव्हरी तारीख:",works:"कामाचे तपशील",serialNo:"अनुक्रमांक",workType:"कामाचे प्रकार",price:"किंमत (₹)",quantity:"प्रमाण",total:"एकूण (₹)",grandTotal:"एकूण",totalAfterDiscount:"सूट नंतरची एकूण",paymentDetails:"पेमेंट तपशील",amountPaid:"रक्कम भरलेली:",amountRemaining:"शिल्लक रक्कम:",paymentMode:"पेमेंट मोड:",qrCode:"QR कोड",scanToPay:"पेमेंटसाठी स्कॅन करा",amountInWords:"रक्कम शब्दांत:",bankDetails:"बँक तपशील",bank:"बँक:",accountNo:"खाते क्रमांक:",ifscCode:"IFSC कोड:",eSignature:"ई-स्वाक्षरी",authorizedSignature:"अधिकृत स्वाक्षरी",footerNote:"हे चलन संगणकाद्वारे तयार केले आहे आणि अधिकृत आहे.",only:"फक्त",baseAmount:"मूळ रक्कम",gstPercent:"जीएसटी %",cgst:"सीजीएसटी",sgst:"एसजीएसटी",taxableAmount:"करपात्र रक्कम",gstDetails:"जीएसटी तपशील"}},english:{name:"English",font:"Arial, sans-serif",labels:{projectName:"Project Name:",customerName:"Customer Name:",customerAddress:"Customer Address:",mobile:"Mobile Number:",invoiceNumber:"Invoice Number:",invoiceDate:"Invoice Date:",deliveryDate:"Delivery Date:",works:"Work Details",serialNo:"Sr. No.",workType:"Work Type",price:"Price (₹)",quantity:"Quantity",total:"Total (₹)",grandTotal:"Grand Total",totalAfterDiscount:"Total after discount",paymentDetails:"Payment Details",amountPaid:"Amount Received:",amountRemaining:"Amount Due:",paymentMode:"Payment Mode:",qrCode:"QR CODE",scanToPay:"Scan to Pay",amountInWords:"Amount in Words:",bankDetails:"Bank Details",bank:"Bank:",accountNo:"Account Number:",ifscCode:"IFSC Code:",eSignature:"E-Signature",authorizedSignature:"Authorized Signature",footerNote:"This invoice is computer generated and authorized.",only:"only",baseAmount:"Base Amount",gstPercent:"GST %",cgst:"CGST",sgst:"SGST",taxableAmount:"Taxable Amount",gstDetails:"GST Details"}}},Se=d=>!d||d.length===0?!1:d.some(x=>x.gst_percent&&x.gst_percent>0||x.cgst_amount&&x.cgst_amount>0||x.sgst_amount&&x.sgst_amount>0),Ae=d=>d.cgst&&Number(d.cgst)>0||d.sgst&&Number(d.sgst)>0||d.gst&&Number(d.gst)>0||d.igst&&Number(d.igst)>0,pe=(d,x,T,r,S,W,A="english",P="save")=>{const a=me[A].labels,q=me[A].font,C=Array.isArray(r.items)?r.items:[],m=Se(C),t=Ae(r),L=`
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
      font-family: ${q}; 
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

${(()=>{var I,y,R,Q,f,z,n,l,j,v,b,g,s,o,i,u,$,M,E,p,Z,J,K,Y,D,ee,te,se,ne,re,oe,ie,ae,le,de;const N=Array.isArray(r.items)?r.items:[],F=Math.ceil(N.length/19)||1,B=!!(r.note||r.payment_terms||r.terms_and_conditions);let k="";for(let w=0;w<F;w++){const H=w*19,he=H+19,ge=N.slice(H,he),xe=w===F-1;k+=`
      ${w>0?'<div class="page-break"></div>':""}
      <div class="invoice-box">
        <div class="content-wrapper">
        
        ${w===0?`
        <!-- ===== Header on first page ===== -->
        <table class="company-header" style="width: 100%; margin-bottom: 5px;">
          <tr>
            <td style="width: 70%; vertical-align: top;">
              <div style="font-size: 22px; font-weight: bold; line-height: 1.2;">
                ${((y=(I=c())==null?void 0:I.company_info)==null?void 0:y.company_name)||"Company Name"}
              </div>
              <div style="font-size: 11px; margin-top: 2px;">
                ${((Q=(R=c())==null?void 0:R.company_info)==null?void 0:Q.land_mark)||"-"}
              </div>
              <div style="font-size: 11px; margin-top: 3px;">
                <b>Phone:</b> ${((z=(f=c())==null?void 0:f.company_info)==null?void 0:z.phone_no)||"-"}
              </div>
            </td>
            <td style="width: 30%; text-align: right; vertical-align: top;">
              <img 
                src='${ce}/img/${(l=(n=c())==null?void 0:n.company_info)==null?void 0:l.logo}' 
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
              <b>${((v=(j=c())==null?void 0:j.company_info)==null?void 0:v.company_name)||"Company Name"}</b><br/>
              ${((b=c())==null?void 0:b.name)||"Owner Name"}<br/>
              ${((s=(g=c())==null?void 0:g.company_info)==null?void 0:s.land_mark)||"-"}<br/>
              <b>Phone:</b> ${((o=c())==null?void 0:o.mobile)||"N/A"}<br/>
              <b>GSTIN:</b> ${((u=(i=c())==null?void 0:i.company_info)==null?void 0:u.gst_number)||"N/A"}<br/>
              Dist: ${((M=($=c())==null?void 0:$.company_info)==null?void 0:M.Dist)||"-"}<br/>
              Tal: ${((p=(E=c())==null?void 0:E.company_info)==null?void 0:p.Tal)||"-"}<br/>
              Email: ${((J=(Z=c())==null?void 0:Z.company_info)==null?void 0:J.email_id)||"-"}
            </td>
            <td style="border: 1px solid #000; font-size: 10px; padding: 5px; line-height: 1.4;">
              <b>Customer Name:</b> ${((K=r.customer)==null?void 0:K.name)||"Customer Name"}<br/>
              <b>Site:</b> ${r.project_name||"Project Name"}<br/>
              ${((Y=r.customer)==null?void 0:Y.address)||"Customer Address"}<br/>
              <b>Phone:</b> ${((D=r.customer)==null?void 0:D.mobile)||"N/A"}<br/>
              <b>GSTIN:</b> ${r.gst_number||"-"}<br/>
              <b>PAN:</b> ${r.pan_number||"-"}
            </td>
            <td style="border: 1px solid #000; font-size: 10px; padding: 5px; line-height: 1.4;">
              <b>Invoice No:</b> ${x}<br/>
              <b>Invoice Date:</b> ${r.date}<br/>
              <b>Reference ID:</b> ${r.ref_id||"-"}<br/>
              <b>PO Number:</b> ${r.po_number||"-"}
            </td>
          </tr>
        </table>
        `:""}

        <table class="details-table" style="margin-top: 8px;">
          ${w===0?`
          <thead>
            <tr>
              <th style="width: ${m?"5%":"6%"}; font-size: 10px;">${a.serialNo}</th>
              <th style="width: ${m?"20%":"38%"}; font-size: 10px;">${a.workType}</th>
              <th style="width: ${m?"8%":"10%"}; font-size: 10px;">Unit</th>
              <th style="width: ${m?"7%":"10%"}; font-size: 10px;">${a.quantity}</th>
              <th style="width: ${m?"10%":"18%"}; font-size: 10px;">${a.price}</th>
              ${m?`
                <th style="width: 12%; font-size: 10px;">${a.baseAmount}</th>
                <th style="width: 8%; font-size: 10px;">${a.gstPercent}</th>
                <th style="width: 12%; font-size: 10px;">${a.cgst}${(ee=N[0])!=null&&ee.gst_percent?` (${N[0].gst_percent/2}%)`:""}</th>
                <th style="width: 12%; font-size: 10px;">${a.sgst}${(te=N[0])!=null&&te.gst_percent?` (${N[0].gst_percent/2}%)`:""}</th>
              `:""}
              <th style="width: ${m?"12%":"18%"}; font-size: 10px;">${a.total}</th>
            </tr>
          </thead>`:""}
          <tbody>
            ${ge.map((h,X)=>`
              <tr>
                <td class="center" style="width: ${m?"5%":"6%"}; font-size: 10px;">${X+1+H}</td>
                <td style="width: ${m?"20%":"38%"}; font-size: 10px;">${h.work_type||""}</td>
                <td class="center" style="width: ${m?"8%":"10%"}; font-size: 10px;">${h.uom||""}</td>
                <td class="center" style="width: ${m?"7%":"10%"}; font-size: 10px;">${h.qty||0}</td>
                <td class="right" style="width: ${m?"10%":"18%"}; font-size: 10px;">₹${Number(h.price||0).toFixed(2)}</td>
                ${m?`
                  <td class="right" style="width: 12%; font-size: 10px;">₹${Number(h.qty*h.price||0).toFixed(2)}</td>
                  <td class="center" style="width: 8%; font-size: 10px;">${h.gst_percent?h.gst_percent+"%":"-"}</td>
                  <td class="right" style="width: 12%; font-size: 10px;">${h.cgst_amount>0?"₹"+Number(h.cgst_amount).toFixed(2):"-"}</td>
                  <td class="right" style="width: 12%; font-size: 10px;">${h.sgst_amount>0?"₹"+Number(h.sgst_amount).toFixed(2):"-"}</td>
                `:""}
                <td class="right" style="width: ${m?"12%":"18%"}; font-size: 10px;">₹${Number(h.total_price||0).toFixed(2)}</td>
              </tr>`).join("")}
          </tbody>
        </table>

    ${xe?`
  <div class="no-split">
    ${t?`
      <table class="summary" style="margin-top: 8px;">
        <tr>
          <th colspan="2" style="font-size: 12px; background: #d9e9ff; text-align: center;">${a.gstDetails}</th>
        </tr>
        <tr>
          <th style="font-size: 11px;">${a.taxableAmount}</th>
          <td class="right" style="font-size: 11px;">₹${(()=>{const h=N.reduce((X,be)=>X+(be.total_price||0),0);return Number(h).toFixed(2)})()}</td>
        </tr>
        ${Number(r.cgst||0)>0?`
        <tr>
          <th style="font-size: 11px;">${a.cgst} (${r.cgstPercentage||Number(r.gst||0)/2}%)</th>
          <td class="right" style="font-size: 11px;">₹${Number(r.cgst||0).toFixed(2)}</td>
        </tr>`:""}
        ${Number(r.sgst||0)>0?`
        <tr>
          <th style="font-size: 11px;">${a.sgst} (${r.sgstPercentage||Number(r.gst||0)/2}%)</th>
          <td class="right" style="font-size: 11px;">₹${Number(r.sgst||0).toFixed(2)}</td>
        </tr>`:""}
        ${Number(r.igst||0)>0?`
        <tr>
          <th style="font-size: 11px;">IGST (${r.igstPercentage||Number(r.gst||0)}%)</th>
          <td class="right" style="font-size: 11px;">₹${Number(r.igst||0).toFixed(2)}</td>
        </tr>`:""}
        <tr style="background: #e8f5e9;">
          <th style="font-size: 11px;">Total GST Amount</th>
          <td class="right" style="font-size: 11px;"><strong>₹${(Number(r.cgst||0)+Number(r.sgst||0)+Number(r.igst||0)).toFixed(2)}</strong></td>
        </tr>
      </table>
    `:""}

    ${r.discount>0?`
    <table class="summary" style="margin-top: 8px;">
      <tr>
        <th style="font-size: 11px;">Discount</th>
        <td class="right" style="font-size: 11px;">₹${Number(r.discount||0).toFixed(2)}</td>
      </tr>
    </table>
    `:""}

    <table class="summary" style="margin-top: 8px;">
      <tr style="background: #fff3cd;">
        <th style="font-size: 12px;">${a.grandTotal}</th>
        <td class="right" style="font-size: 12px;"><strong>₹${Number(d||0).toFixed(2)}</strong></td>
      </tr>
      <tr>
        <th style="font-size: 11px;">${a.amountPaid}</th>
        <td class="right" style="font-size: 11px;">₹${Number(r.amountPaid||0).toFixed(2)}</td>
      </tr>
      <tr style="background: #f8d7da;">
        <th style="vertical-align: top; font-size: 11px;">
          ${a.amountRemaining}<br />
          <span style="font-weight: normal; font-size: 10px;">
            ${a.amountInWords} ${W} ${a.only}
          </span>
        </th>
        <td class="right" style="vertical-align: top; font-size: 11px;">
          <strong>₹${Number(S||0).toFixed(2)}</strong>
        </td>
      </tr>
    </table>
  </div>
`:""}

        </div>

        <div class="foot">
          ${a.footerNote}
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
    `}return B&&(k+=`
    <div class="page-break"></div>
    <div class="invoice-box">
      <div class="content-wrapper">
        <table class="company-header" style="width: 100%; margin-bottom: 5px;">
          <tr>
            <td style="width: 70%; vertical-align: top;">
              <div style="font-size: 22px; font-weight: bold; line-height: 1.2;">
                ${((ne=(se=c())==null?void 0:se.company_info)==null?void 0:ne.company_name)||"Company Name"}
              </div>
              <div style="font-size: 11px; margin-top: 2px;">
                ${((oe=(re=c())==null?void 0:re.company_info)==null?void 0:oe.land_mark)||"-"}
              </div>
              <div style="font-size: 11px; margin-top: 3px;">
                <b>Phone:</b> ${((ae=(ie=c())==null?void 0:ie.company_info)==null?void 0:ae.phone_no)||"-"}
              </div>
            </td>
            <td style="width: 30%; text-align: right; vertical-align: top;">
              <img 
                src='${ce}/img/${(de=(le=c())==null?void 0:le.company_info)==null?void 0:de.logo}' 
                alt="Company Logo" 
                style="width: 75px; height: 75px; object-fit: contain; border: 1px solid #ccc; border-radius: 5px;"
              />
            </td>
          </tr>
        </table>

        <hr style="border: 1px solid black; margin: 3px 0;" />

        ${r.note?`
        <div class="terms-section">
          <h3>Notes</h3>
          <div class="terms-content">${r.note}</div>
        </div>
        `:""}

        ${r.payment_terms?`
        <div class="terms-section">
          <h3>Payment Terms</h3>
          <div class="terms-content">${r.payment_terms}</div>
        </div>
        `:""}

        ${r.terms_and_conditions?`
        <div class="terms-section">
          <h3>Terms & Conditions</h3>
          <div class="terms-content">${r.terms_and_conditions}</div>
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
    `),k})()}

</body>
</html>
`,U={margin:.5,filename:`${x}_${T}.pdf`,image:{type:"jpeg",quality:.98},html2canvas:{scale:2,useCORS:!0},jsPDF:{unit:"in",format:"a4",orientation:"portrait"}},G=je().set(U).from(L);if(P==="blob")return G.outputPdf("blob");if(P==="save")return G.save()},Ue=()=>{var z;const d=(z=c())==null?void 0:z.company_info,{id:x}=ue(),[T,r]=_.useState(0);_.useRef(null),_.useState(null);const[S,W]=_.useState("english"),[A,P]=_.useState(""),[a,q]=_.useState(0),{showToast:C}=ye(),m=fe(),[t,L]=_.useState({project_name:"",customer:{name:"",address:"",mobile:"",gst_number:""},date:"",items:[],discount:0,amountPaid:0,paymentMode:"",invoiceStatus:"",finalAmount:0,totalAmount:0,invoice_number:"",status:"",deliveryDate:"",invoiceType:"",cgst:0,sgst:0,gst:0,igst:0,invoice_rules:[],ref_id:"",po_number:""}),U=()=>{m(`/edit-order/${x}`)},G=n=>{if(n===0)return"Zero";const l=["","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"],j=["Ten","Eleven","Twelve","Thirteen","Fourteen","Fifteen","Sixteen","Seventeen","Eighteen","Nineteen"],v=["","","Twenty","Thirty","Forty","Fifty","Sixty","Seventy","Eighty","Ninety"],b=o=>{let i="";return o>=100&&(i+=l[Math.floor(o/100)]+" Hundred ",o%=100),o>=20?(i+=v[Math.floor(o/10)],o%10>0&&(i+=" "+l[o%10])):o>=10?i+=j[o-10]:o>0&&(i+=l[o]),i.trim()};let g="",s=Math.floor(n);if(s>=1e7){const o=Math.floor(s/1e7);g+=b(o)+" Crore ",s%=1e7}if(s>=1e5){const o=Math.floor(s/1e5);g+=b(o)+" Lakh ",s%=1e5}if(s>=1e3){const o=Math.floor(s/1e3);g+=b(o)+" Thousand ",s%=1e3}return s>0&&(g+=b(s)),g.trim()+" Rupees Only"},V=()=>{window.print()},N=async()=>{var n,l,j,v,b,g;try{const s=await ve(`/api/order/${x}`);console.log("Fetched order:",s);const o=s.paymentType===0?"Cash":"Online (UPI/Bank Transfer)";let i="";switch(s.orderStatus){case 0:i="Cancelled Order";break;case 1:i="Delivered Order";break;case 2:i="Order Pending";break;case 3:i="Quotation";break;default:i="Unknown Status"}const u=s.discount||0,$=Number(s.finalAmount||0).toFixed(2),M=Number(s.totalAmount||0).toFixed(2),E=$-(s.paidAmount||0);r(Math.max(0,E)),L({project_name:((n=s.project)==null?void 0:n.project_name)||"N/A",customer:{name:((l=s.project)==null?void 0:l.customer_name)||"N/A",address:((j=s.project)==null?void 0:j.work_place)||"N/A",mobile:((v=s.project)==null?void 0:v.mobile_number)||"N/A"},gst_number:((b=s.project)==null?void 0:b.gst_number)||"N/A",pan_number:((g=s.project)==null?void 0:g.pan_number)||"N/A",date:s.invoiceDate||"",items:(s.items||[]).map(p=>({work_type:p.product_name||p.work_type||"N/A",qty:p.dQty||p.qty||0,uom:p.uom||"N/A",price:p.dPrice||p.price||0,total_price:p.total_price||0,remark:p.remark||"",gst_percent:Number(p.gst_percent)||0,cgst_amount:Number(p.cgst_amount)||0,sgst_amount:Number(p.sgst_amount)||0})),discount:u,amountPaid:s.paidAmount||0,paymentMode:o,invoiceStatus:i,totalAmount:M,finalAmount:$,cgst:Number(s.cgst||0).toFixed(2),sgst:Number(s.sgst||0).toFixed(2),gst:Number(s.gst||0).toFixed(2),igst:Number(s.igst||0).toFixed(2),cgstPercentage:Number(s.cgstPercentage||s.cgst_percentage||9),sgstPercentage:Number(s.sgstPercentage||s.sgst_percentage||9),igstPercentage:Number(s.igstPercentage||s.igst_percentage||0),gstPercentage:Number(s.gstPercentage||s.gst_percentage||18),ref_id:s.ref_id,po_number:s.po_number||"",terms_and_conditions:s.terms_and_conditions||"",payment_terms:s.payment_terms||"",note:s.note||"",invoice_number:s.invoice_number||"N/A",status:s.orderStatus,deliveryDate:s.deliveryDate||"",invoiceType:s.invoiceType||3,invoice_rules:Array.isArray(s.invoice_rules)?s.invoice_rules:[]}),q($),P(G($))}catch(s){console.error("Error fetching order data:",s),C("danger","Error fetching invoice details")}};console.log("Customer GST Number:",t==null?void 0:t.gst_number),_.useEffect(()=>{N()},[x]);const F=async()=>{try{const n=await pe(t.finalAmount,t.invoice_number,t.customer.name,t,T,A,S,"blob"),l=URL.createObjectURL(n),j=encodeURIComponent(`*Invoice from ${(d==null?void 0:d.company_name)||"Company"}*

Project: ${t.project_name}
Invoice Number: ${t.invoice_number}
Total Amount: ₹${t.finalAmount}
Amount Paid: ₹${t.amountPaid}
Remaining: ₹${T}

📄 Download Invoice: ${l}

Thank you!`),v=`https://wa.me/${t.customer.mobile}?text=${j}`;window.open(v,"_blank")}catch(n){C("danger","Error sharing on WhatsApp: "+n.message)}},B=async n=>{await pe(t.finalAmount,t.invoice_number,t.customer.name,t,T,A,n,"save")},k=()=>!t.items||t.items.length===0?!1:t.items.some(n=>n.gst_percent&&n.gst_percent>0||n.cgst_amount&&n.cgst_amount>0||n.sgst_amount&&n.sgst_amount>0),I=()=>t.cgst&&Number(t.cgst)>0||t.sgst&&Number(t.sgst)>0||t.gst&&Number(t.gst)>0||t.igst&&Number(t.igst)>0,y=k(),R=I(),f=(()=>{const n=t.items.reduce((i,u)=>i+u.qty*u.price,0),l=t.items.reduce((i,u)=>i+(u.cgst_amount||0),0),j=t.items.reduce((i,u)=>i+(u.sgst_amount||0),0),v=t.items.reduce((i,u)=>i+(u.total_price||0),0),b=Number(t.cgst||0),g=Number(t.sgst||0),s=Number(t.igst||0),o=b+g+s;return{subtotalWithoutGST:n,rowCGST:l,rowSGST:j,totalAfterRowGST:v,globalCGST:b,globalSGST:g,globalIGST:s,globalTotalGST:o}})();return e.jsxs(Ne,{children:[e.jsx($e,{children:e.jsxs("h5",{children:["Invoice ",t.invoice_number]})}),e.jsx(_e,{children:e.jsxs(we,{fluid:!0,children:[e.jsxs("div",{className:"row section",children:[e.jsxs("div",{className:"col-md-6",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Project Name:"})," ",t.project_name]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Customer Name:"})," ",t.customer.name]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Customer Address:"})," ",t.customer.address]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Mobile Number:"})," ",t.customer.mobile]}),e.jsxs("p",{children:[e.jsx("strong",{children:"GST Number:"})," ",t.gst_number]})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Invoice Number:"})," ",t.invoice_number]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Reference ID:"})," ",t.ref_id]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Po Number:"})," ",t.po_number]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Invoice Date:"})," ",t.date]}),e.jsxs("p",{children:[e.jsx("strong",{children:"PAN Number:"})," ",t.pan_number]})]})]}),e.jsx("div",{className:"row section",children:e.jsx("div",{className:"col-md-12",children:e.jsxs("table",{className:"table table-bordered border-black",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Sr. No."}),e.jsx("th",{children:"Work Type"}),e.jsx("th",{children:"Unit"}),e.jsx("th",{children:"Quantity"}),e.jsx("th",{children:"Price"}),y&&e.jsx("th",{children:"Base Amount"}),y&&e.jsx("th",{children:"GST %"}),y&&e.jsxs("th",{children:["CGST",t.items.length>0&&t.items[0].gst_percent>0&&e.jsxs(e.Fragment,{children:[" (",t.items[0].gst_percent/2,"%)"]})]}),y&&e.jsxs("th",{children:["SGST",t.items.length>0&&t.items[0].gst_percent>0&&e.jsxs(e.Fragment,{children:[" (",t.items[0].gst_percent/2,"%)"]})]}),e.jsx("th",{children:"Total"})]})}),e.jsx("tbody",{children:t.items.length>0?t.items.map((n,l)=>e.jsxs("tr",{children:[e.jsx("td",{children:l+1}),e.jsx("td",{children:n.work_type}),e.jsx("td",{children:n==null?void 0:n.uom}),e.jsx("td",{children:n.qty}),e.jsxs("td",{children:["₹",n.price.toFixed(2)]}),y&&e.jsxs("td",{children:["₹",(n.qty*n.price).toFixed(2)]}),y&&e.jsx("td",{children:n.gst_percent?`${n.gst_percent}%`:"-"}),y&&e.jsx("td",{children:n.cgst_amount>0?`₹${(n.cgst_amount||0).toFixed(2)}`:"-"}),y&&e.jsx("td",{children:n.sgst_amount>0?`₹${(n.sgst_amount||0).toFixed(2)}`:"-"}),e.jsxs("td",{children:["₹",n.total_price.toFixed(2)]})]},l)):e.jsx("tr",{children:e.jsx("td",{colSpan:y?"10":"6",className:"text-center",children:"No work details available"})})})]})})}),R&&e.jsx("div",{className:"row section",children:e.jsxs("div",{className:"col-md-12",children:[e.jsx("h6",{className:"fw-semibold text-primary",children:"GST Details"}),e.jsx("table",{className:"table table-bordered border-black",children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Taxable Amount:"})}),e.jsxs("td",{className:"text-center",children:["₹",f.totalAfterRowGST.toFixed(2)]})]}),f.globalCGST>0&&e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs("strong",{children:["CGST (",t.cgstPercentage||Number(t.gst||0)/2,"%):"]})}),e.jsxs("td",{className:"text-center",children:["₹",f.globalCGST.toFixed(2)]})]}),f.globalSGST>0&&e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs("strong",{children:["SGST (",t.sgstPercentage||Number(t.gst||0)/2,"%):"]})}),e.jsxs("td",{className:"text-center",children:["₹",f.globalSGST.toFixed(2)]})]}),f.globalIGST>0&&e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs("strong",{children:["IGST (",t.igstPercentage||Number(t.gst||0),"%):"]})}),e.jsxs("td",{className:"text-center",children:["₹",f.globalIGST.toFixed(2)]})]}),e.jsxs("tr",{className:"table-success",children:[e.jsx("td",{children:e.jsx("strong",{children:"Total GST Amount:"})}),e.jsx("td",{className:"text-center",children:e.jsxs("strong",{children:["₹",f.globalTotalGST.toFixed(2)]})})]})]})})]})}),t.discount>0&&e.jsx("div",{className:"row section",children:e.jsx("div",{className:"col-md-12",children:e.jsx("table",{className:"table table-bordered border-black",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:"Discount:"}),e.jsxs("td",{className:"text-center",children:["₹",t.discount]})]})})})})}),e.jsx("div",{className:"row section",children:e.jsx("div",{className:"col-md-12",children:e.jsx("table",{className:"table table-bordered border-black",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Grand Total:"})}),e.jsx("td",{className:"text-center",children:e.jsxs("strong",{children:["₹",t.finalAmount]})})]})})})})}),e.jsx("div",{className:"row section",children:e.jsx("div",{className:"col-md-12",children:e.jsx("table",{className:"table table-bordered border-black",children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Amount Paid:"}),e.jsxs("td",{children:["₹",t.amountPaid]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Balance Amount:"}),e.jsxs("td",{children:["₹",T.toFixed(2)]})]})]})})})}),e.jsx("div",{className:"row section mt-3",children:e.jsxs("div",{className:"col-md-12",children:[e.jsx("h6",{className:"mt-4 mb-2 fw-semibold text-primary border-bottom border-primary pb-2",children:"Note"}),e.jsx("p",{className:"ms-2 text-dark",children:t!=null&&t.note?t.note:"No note available."}),e.jsx("h6",{className:"mt-4 mb-2 fw-semibold text-primary border-bottom border-primary pb-2",children:"Payment Terms"}),e.jsx("ul",{className:"ms-3",children:t!=null&&t.payment_terms?t.payment_terms.split(`
`).map((n,l)=>e.jsx("li",{className:"text-dark",children:n},l)):e.jsx("li",{className:"text-muted",children:"No payment terms available."})}),e.jsx("h6",{className:"mt-4 mb-2 fw-semibold text-primary border-bottom border-primary pb-2",children:"Terms & Conditions"}),e.jsx("ul",{className:"ms-3",children:t!=null&&t.terms_and_conditions?t.terms_and_conditions.split(`
`).map((n,l)=>e.jsx("li",{className:"text-dark",children:n},l)):e.jsx("li",{className:"text-muted",children:"No terms and conditions provided."})})]})}),e.jsx("div",{className:"row section mt-3",children:e.jsx("div",{className:"col-md-12 text-center",children:e.jsx("p",{children:"This bill has been computer-generated and is authorized."})})}),e.jsxs("div",{className:"d-flex justify-content-center flex-wrap gap-2",children:[e.jsx(O,{color:"danger",variant:"outline",className:"d-print-none flex-fill",onClick:U,children:"Edit Order"}),e.jsx(O,{color:"primary",variant:"outline",onClick:V,className:"d-print-none flex-fill",style:{display:"none"},children:"Print"}),e.jsxs(Te,{className:"mb-2 d-print-none flex-fill",value:S,onChange:n=>W(n.target.value),style:{maxWidth:"200px",display:"none"},children:[e.jsx("option",{value:"english",children:"English"}),e.jsx("option",{value:"marathi",children:"Marathi"}),e.jsx("option",{value:"tamil",children:"Tamil"}),e.jsx("option",{value:"bengali",children:"Bengali"})]}),e.jsx(O,{color:"success",variant:"outline",onClick:()=>B(S),className:"d-print-none flex-fill",children:"Download PDF"}),e.jsx(O,{color:"success",variant:"outline",onClick:()=>F(),className:"d-print-none flex-fill",children:"Share on WhatsApp"})]})]})})]})};export{Ue as default};
