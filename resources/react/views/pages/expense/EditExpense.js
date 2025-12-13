import React, { useEffect, useState } from "react";
import {
  CButton,
  CForm,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import { getAPICall, put } from "../../../util/api";
import { useToast } from "../../common/toast/ToastContext";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import { paymentTypes, receiver_bank } from "../../../util/Feilds";

const EditExpense = ({ visible, onClose, expense, onExpenseUpdated }) => {
  const [validated, setValidated] = useState(false);
  const [expenseTypes, setExpenseTypes] = useState([]);
  const [loading, setLoading] = useState(false);
  const { showToast } = useToast();
  const { t } = useTranslation("global");

  const [state, setState] = useState({
    name: "",
    desc: "",
    expense_id: undefined,
    qty: 1,
    price: 0,
    total_price: 0,
    expense_date: new Date().toISOString().split("T")[0],
    show: true,

    // New Fields from backend
    gst: "",
    sgst: "",
    cgst: "",
    igst: "",
    contact: "",
    payment_by: "",
    payment_type: "",
    pending_amount: "",
    isGst: 0,
    photoAvailable: 0,
    photo_url: "",
    photo_remark: "",
    bank_name: "",
    acc_number: "",
    ifsc: "",
    aadhar: "",
    pan: "",
    transaction_id: "",
  });

  const getCurrentLanguage = () => {
    const storedLang = localStorage.getItem("i18nextLng");
    return storedLang || i18n.language || "en";
  };

  const getDisplayName = (item, lng = null) => {
    const currentLang = lng || getCurrentLanguage();
    return currentLang === "mr" ? item.localName || item.name : item.name;
  };

  const fetchExpenseTypes = async () => {
    try {
      const response = await getAPICall("/api/expenseType");
      setExpenseTypes(response.filter((p) => p.show === 1));
    } catch (error) {
      showToast("danger", "Error occurred " + error);
    }
  };

  useEffect(() => {
    if (visible) fetchExpenseTypes();
  }, [visible]);

  useEffect(() => {
    if (visible) fetchExpenseTypes();
  }, [i18n.language, visible]);

  useEffect(() => {
    if (expense && visible) {
      setState({
        ...state,
        ...expense, // ✅ automatically map all backend fields
        expense_date:
          expense.expense_date || new Date().toISOString().split("T")[0],
        show: expense.show !== undefined ? expense.show : true,
      });
      setValidated(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [expense, visible]);

  const roundToTwoDecimals = (value) =>
    Number((Math.round(value * 100) / 100).toFixed(2));

  const calculateFinalAmount = (item) => {
    const qty = roundToTwoDecimals(parseFloat(item.qty) || 0);
    const price = roundToTwoDecimals(parseFloat(item.price) || 0);
    item.total_price = Math.round(qty * price);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (["price", "qty"].includes(name)) {
      setState((prev) => {
        const updated = { ...prev, [name]: value };
        calculateFinalAmount(updated);
        return updated;
      });
    } else {
      setState((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    event.stopPropagation();
    setValidated(true);

    // Validate contact number if provided
    if (state.contact && !/^\d{10}$/.test(state.contact)) {
      showToast("danger", "Contact number must be exactly 10 digits.");
      return;
    }

    // Validate payment type
    if (!state.payment_type) {
      showToast("danger", "Please select payment type");
      return;
    }

    if (state.expense_id && state.price > 0 && state.qty > 0) {
      setLoading(true);
      try {
        const cleanedData = { ...state, id: expense.id };
        const resp = await put(`/api/expense/${expense.id}`, cleanedData);

        if (resp) {
          showToast("success", t("MSG.expense_updated_successfully"));
          onExpenseUpdated && onExpenseUpdated(cleanedData);
          onClose();
        } else {
          showToast("danger", t("MSG.error_occured_please_try_again_later_msg"));
        }
      } catch (error) {
        showToast("danger", "Error occurred " + error);
      } finally {
        setLoading(false);
      }
    } else {
      showToast("danger", t("MSG.fill_required_fields"));
    }
  };

  const handleClose = () => {
    setValidated(false);
    onClose();
  };

  const today = new Date().toISOString().split("T")[0];
  const lng = getCurrentLanguage();

  return (
    <CModal visible={visible} onClose={handleClose} size="xl">
      <CModalHeader>
        <CModalTitle>{t("LABELS.edit_expense")}</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CForm noValidate validated={validated} onSubmit={handleSubmit}>
          {/* Basic Info */}
          <div className="row">
            <div className="col-sm-6 mb-3">
              <CFormLabel><b>{t("LABELS.expense_type")}</b></CFormLabel>
              <CFormSelect
                name="expense_id"
                value={state.expense_id || ""}
                onChange={handleChange}
                required
              >
                <option value="">{t("MSG.select_expense_type_msg")}</option>
                {expenseTypes.map((type) => (
                  <option key={type.id} value={type.id}>
                    {getDisplayName(type, lng)}
                  </option>
                ))}
              </CFormSelect>
            </div>

            <div className="col-sm-6 mb-3">
              <CFormLabel><b>{t("LABELS.about_expense")}</b></CFormLabel>
              <CFormInput
                name="name"
                value={state.name}
                onChange={handleChange}
                placeholder="Enter expense name"
              />
            </div>
          </div>

          {/* Amount Section */}
          <div className="row">
            <div className="col-sm-4 mb-3">
              <CFormLabel><b>{t("LABELS.expense_date")}</b></CFormLabel>
              <CFormInput
                type="date"
                name="expense_date"
                max={today}
                value={state.expense_date}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-sm-4 mb-3">
              <CFormLabel><b>{t("LABELS.price_per_unit")}</b></CFormLabel>
              <CFormInput
                type="number"
                name="price"
                min="0"
                step="0.01"
                value={state.price}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-sm-4 mb-3">
              <CFormLabel><b>{t("LABELS.total_units")}</b></CFormLabel>
              <CFormInput
                type="number"
                name="qty"
                step="0.01"
                min="0"
                value={state.qty}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-sm-4 mb-3">
              <CFormLabel><b>{t("LABELS.total_price")}</b></CFormLabel>
              <CFormInput
                readOnly
                name="total_price"
                value={state.total_price}
              />
            </div>
          </div>

          {/* Contact and Payment Section */}
          <div className="row">
            <div className="col-sm-4 mb-3">
              <CFormLabel><b>{t("LABELS.contact")}</b></CFormLabel>
              <CFormInput
                type="text"
                name="contact"
                value={state.contact || ""}
                onChange={(e) => {
                  const value = e.target.value;
                  if (/^\d{0,10}$/.test(value)) {
                    handleChange(e);
                  }
                }}
                maxLength={10}
                inputMode="numeric"
                placeholder="Enter contact"
              />
            </div>

            <div className="col-sm-4 mb-3">
              <CFormLabel><b>{t("LABELS.payment_by")}</b></CFormLabel>
              <CFormSelect
                name="payment_by"
                value={state.payment_by || ""}
                onChange={handleChange}
              >
                <option value="">{t("LABELS.select_payment_by")}</option>
                {receiver_bank.map((bank) => (
                  <option key={bank.value} value={bank.value}>
                    {bank.label}
                  </option>
                ))}
              </CFormSelect>
            </div>

            <div className="col-sm-4 mb-3">
              <CFormLabel><b>{t("LABELS.payment_type")}</b></CFormLabel>
              <CFormSelect
                name="payment_type"
                value={state.payment_type || ""}
                onChange={handleChange}
                required
              >
                <option value="">Select Payment Type</option>
                {paymentTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </CFormSelect>
            </div>
          </div>

          {/* Bank Transfer Fields - IMPS/NEFT/RTGS */}
          {(state.payment_type === "imps" ||
            state.payment_type === "rtgs" ||
            state.payment_type === "neft") && (
            <div className="row">
              <div className="col-sm-3 mb-3">
                <CFormLabel><b>Bank Name</b></CFormLabel>
                <CFormInput
                  name="bank_name"
                  value={state.bank_name || ""}
                  onChange={handleChange}
                  placeholder="Enter Bank Name"
                />
              </div>
              <div className="col-sm-3 mb-3">
                <CFormLabel><b>Account Number</b></CFormLabel>
                <CFormInput
                  name="acc_number"
                  value={state.acc_number || ""}
                  onChange={handleChange}
                  placeholder="Enter Account Number"
                />
              </div>
              <div className="col-sm-3 mb-3">
                <CFormLabel><b>IFSC</b></CFormLabel>
                <CFormInput
                  name="ifsc"
                  value={state.ifsc || ""}
                  onChange={handleChange}
                  placeholder="Enter IFSC"
                />
              </div>
              <div className="col-sm-3 mb-3">
                <CFormLabel><b>Transaction ID</b></CFormLabel>
                <CFormInput
                  name="transaction_id"
                  value={state.transaction_id || ""}
                  onChange={handleChange}
                  placeholder="Enter Transaction ID"
                />
              </div>
            </div>
          )}

          {/* UPI Transaction ID */}
          {state.payment_type === "upi" && (
            <div className="row">
              <div className="col-sm-4 mb-3">
                <CFormLabel><b>Transaction ID</b></CFormLabel>
                <CFormInput
                  name="transaction_id"
                  value={state.transaction_id || ""}
                  onChange={handleChange}
                  placeholder="Enter Transaction ID"
                />
              </div>
            </div>
          )}

          {/* Cheque Fields */}
          {state.payment_type === "cheque" && (
            <div className="row">
              <div className="col-sm-4 mb-3">
                <CFormLabel><b>Cheque Number</b></CFormLabel>
                <CFormInput
                  name="transaction_id"
                  value={state.transaction_id || ""}
                  onChange={handleChange}
                  placeholder="Enter Cheque Number"
                />
              </div>
              <div className="col-sm-4 mb-3">
                <CFormLabel><b>Bank Name</b></CFormLabel>
                <CFormInput
                  name="bank_name"
                  value={state.bank_name || ""}
                  onChange={handleChange}
                  placeholder="Enter Bank Name"
                />
              </div>
            </div>
          )}

          {/* Personal Info */}
          <div className="row">
            <div className="col-sm-4 mb-3">
              <CFormLabel><b>Aadhar Number</b></CFormLabel>
              <CFormInput
                name="aadhar"
                value={state.aadhar || ""}
                onChange={handleChange}
                placeholder="Enter Aadhar Number"
              />
            </div>

            <div className="col-sm-4 mb-3">
              <CFormLabel><b>PAN</b></CFormLabel>
              <CFormInput
                name="pan"
                value={state.pan || ""}
                onChange={handleChange}
                placeholder="Enter PAN"
              />
            </div>

            <div className="col-sm-4 mb-3">
              <CFormLabel><b>Pending Amount</b></CFormLabel>
              <CFormInput
                type="number"
                name="pending_amount"
                value={state.pending_amount || 0}
                onChange={handleChange}
                placeholder="Enter Pending Amount"
              />
            </div>
          </div>
        </CForm>
      </CModalBody>

      <CModalFooter>
        <CButton color="secondary" onClick={handleClose} disabled={loading}>
          {t("LABELS.cancel")}
        </CButton>
        <CButton color="primary" onClick={handleSubmit} disabled={loading}>
          {loading ? "Updating..." : t("LABELS.update_expense")}
        </CButton>
      </CModalFooter>
    </CModal>
  );
};

export default EditExpense;