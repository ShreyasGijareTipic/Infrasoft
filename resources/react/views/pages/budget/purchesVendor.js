import React, { useEffect, useRef, useState, useCallback } from 'react';
import {
  CButton,
  CCard,
  CCardHeader,
  CCardBody,
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
  CSpinner,
  CAlert,
  CModal,
  CModalHeader,
  CModalTitle,
  CBadge,
} from '@coreui/react';
import Select from 'react-select';
import { getAPICall, deleteAPICall } from '../../../util/api';
import { getUserType } from '../../../util/session';
import ConfirmationModal from '../../common/ConfirmationModal';
import { useToast } from '../../common/toast/ToastContext';
import PurchaseForm from './PurchaseForm';
import EditPurchaseModal from './EditPurchaseModal';

const PurchaseList = () => {
  const [purchases, setPurchases] = useState([]);
  const [vendors, setVendors] = useState([]);
  const [projects, setProjects] = useState([]);

  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [nextCursor, setNextCursor] = useState(null);

  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editItem, setEditItem] = useState(null);

  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [deleteItemId, setDeleteItemId] = useState(null);

  const { showToast } = useToast();
  const usertype = getUserType();

  // ---------- FILTER STATES ----------
  const [filterProject, setFilterProject] = useState(null);
  const [filterVendor, setFilterVendor] = useState(null);

  // ---------- REF FOR INFINITE SCROLL ----------
  const observerTarget = useRef(null);

  // -------------------------------------------------
  const fetchVendors = async () => {
    try {
      const res = await getAPICall('/api/getPurchesVendor');
      setVendors(res || []);
    } catch {
      showToast('danger', 'Error loading vendors');
    }
  };

  const fetchProjects = async () => {
    try {
      const res = await getAPICall('/api/projects');
      setProjects(res || []);
    } catch {
      showToast('danger', 'Failed to load projects');
    }
  };

  // -------------------------------------------------
  // PAGINATED FETCH
  const fetchPurchases = async (cursor = null, isLoadMore = false) => {
    try {
      if (isLoadMore) {
        setLoadingMore(true);
      } else {
        setLoading(true);
      }

      const url = cursor
        ? `/api/purchesVendor?cursor=${cursor}&perPage=10`
        : '/api/purchesVendor?perPage=10';

      const res = await getAPICall(url);

      const newData = res?.data || [];

      if (isLoadMore) {
        setPurchases((prev) => [...prev, ...newData]);
      } else {
        setPurchases(newData);
      }

      setNextCursor(res.next_cursor);
      setHasMore(res.has_more_pages);
    } catch (err) {
      showToast('danger', 'Failed to load purchases');
      if (!isLoadMore) setPurchases([]);
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  };

  // Initial load
  useEffect(() => {
    fetchVendors();
    fetchProjects();
    fetchPurchases();
  }, []);

  // Load more when scrolling
  const loadMore = useCallback(() => {
    if (!loadingMore && !loading && hasMore && nextCursor) {
      fetchPurchases(nextCursor, true);
    }
  }, [loadingMore, loading, hasMore, nextCursor]);

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !loadingMore && !loading) {
          loadMore();
        }
      },
      { threshold: 0.1, rootMargin: '100px' }
    );

    const current = observerTarget.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, [hasMore, loadingMore, loading, loadMore]);

  // -------------------------------------------------
  const refreshTable = () => {
    setPurchases([]);
    setNextCursor(null);
    setHasMore(true);
    fetchPurchases();
  };

  const openEdit = (purchase) => {
    setEditItem(purchase);
    setShowEditModal(true);
  };

  const handleDelete = async () => {
    if (!deleteItemId) return;
    try {
      const res = await deleteAPICall(`/api/purchesVendorById/${deleteItemId}`);
      showToast('success', res.message || 'Deleted successfully');
      setDeleteModalVisible(false);
      refreshTable();
    } catch (err) {
      showToast('danger', 'Failed to delete purchase');
    }
  };

  const openDeleteModal = (id) => {
    setDeleteItemId(id);
    setDeleteModalVisible(true);
  };

  // ---------- APPLY FILTER (client-side) ----------
  const filteredData = purchases.filter((p) => {
    const byProject = filterProject ? p.project_id === filterProject.value : true;
    const byVendor = filterVendor ? p.vendor_id === filterVendor.value : true;
    return byProject && byVendor;
  });



const downloadPDF = () => {
  import('jspdf').then(jsPDF => {
    import('jspdf-autotable').then(() => {
      const doc = new jsPDF.jsPDF('landscape');

      // ------------ HEADER ------------
      doc.setFont("helvetica", "bold");
      doc.setFontSize(18);
      doc.text("PURCHASE REPORT", 14, 15);

      doc.setFontSize(11);
      doc.setFont("helvetica", "normal");
      doc.text(`Generated On: ${new Date().toLocaleDateString()}`, 14, 25);

      doc.setFontSize(12);
      doc.setFont("helvetica", "bold");
      doc.text(`Total Records: ${filteredData.length}`, 14, 33);

      // ------------ TOTAL CALCULATIONS ------------
      const totalQty = filteredData.reduce((sum, item) => sum + Number(item.qty || 0), 0);
      const totalAmount = filteredData.reduce((sum, item) => sum + Number(item.total || 0), 0);
      const totalPricePerUnit = filteredData.reduce(
        (sum, item) => sum + Number(item.price_per_unit || 0), 
        0
      );

      // ------------ TABLE DATA ------------
      const tableColumn = [
        "Sr No", "Project", "Vendor", "Material",
        "Price/Unit", "Qty", "Total", "Date", "About"
      ];

      const tableRows = [];

      filteredData.forEach((p, index) => {
        tableRows.push([
          index + 1,
          p.project?.project_name || "—",
          p.vendor?.name || "—",
          p.material_name,
        parseFloat(p.price_per_unit).toFixed(2),
          p.qty,
          parseFloat(p.total).toFixed(2),
          new Date(p.date).toLocaleDateString(),
          p.about || "—"
        ]);
      });

      // ------------ ADD TOTAL ROW ------------
     tableRows.push([
  { content: "Total:", colSpan: 4, styles: { halign: "right", fontStyle: "bold" } },
  totalPricePerUnit.toFixed(2),
  totalQty,
  totalAmount.toFixed(2),
  "",
  ""
]);


      // ------------ TABLE STYLE ------------
      doc.autoTable({
        head: [tableColumn],
        body: tableRows,
        startY: 45,
        theme: "grid",
        headStyles: {
          fillColor: [30, 115, 120],   // green-ish header like your sample
          textColor: 255,
          fontSize: 10,
          halign: "center",
        },
        bodyStyles: {
          fontSize: 9,
          halign: "center",
        },
        styles: {
          lineWidth: 0.25,
          lineColor: [120, 120, 120],
        },
        alternateRowStyles: {
          fillColor: [245, 245, 245],
        },

        // ------------ FOOTER ------------
        didDrawPage: (data) => {
          const pageHeight = doc.internal.pageSize.height;

          doc.setFontSize(10);
          doc.setTextColor(100);

          doc.text(
            `Purchase Report | Generated: ${new Date().toLocaleDateString()}`,
            data.settings.margin.left,
            pageHeight - 10
          );

          doc.text(
            `Page ${doc.internal.getNumberOfPages()}`,
            doc.internal.pageSize.width - 30,
            pageHeight - 10
          );
        },
      });

      doc.save("purchase_report.pdf");
    });
  });
};




const downloadExcel = () => {
  import('xlsx').then(XLSX => {

    // ---- TOTAL CALCULATIONS (same as PDF) ----
    const totalQty = filteredData.reduce((sum, item) => sum + Number(item.qty || 0), 0);
    const totalAmount = filteredData.reduce((sum, item) => sum + Number(item.total || 0), 0);
    const totalPricePerUnit = filteredData.reduce(
      (sum, item) => sum + Number(item.price_per_unit || 0),
      0
    );

    // ---- ROW DATA ----
    const worksheetData = filteredData.map((p, index) => ({
      "Sr No": index + 1,
      "Project": p.project?.project_name || "—",
      "Vendor": p.vendor?.name || "—",
      "Material": p.material_name,
      "Price/Unit": parseFloat(p.price_per_unit).toFixed(2),
      "Qty": p.qty,
      "Total": parseFloat(p.total).toFixed(2),
      "Date": new Date(p.date).toLocaleDateString(),
      "About": p.about || "—",
    }));

    // ---- ADD TOTAL ROW AT END ----
    worksheetData.push({
      "Sr No": "",
      "Project": "",
      "Vendor": "",
      "Material": "Total:",
      "Price/Unit": totalPricePerUnit.toFixed(2),
      "Qty": totalQty,
      "Total": totalAmount.toFixed(2),
      "Date": "",
      "About": "",
    });

    // ---- GENERATE SHEET ----
    const worksheet = XLSX.utils.json_to_sheet(worksheetData);

    // ---- OPTIONAL: MAKE HEADER BOLD ----
    Object.keys(worksheet).forEach((cell) => {
      if (cell.startsWith("A1") || cell.startsWith("B1") || cell.startsWith("C1")) {
        worksheet[cell].s = {
          font: { bold: true }
        };
      }
    });

    // ---- WORKBOOK ----
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Purchases");

    // ---- SAVE FILE ----
    XLSX.writeFile(workbook, "purchase_report.xlsx");
  });
};




  // -------------------------------------------------
  return (
    <>
      <CCard className="mb-4">
        <CCardHeader
  className="d-flex justify-content-between align-items-center flex-wrap gap-3"
  style={{ paddingBottom: "1rem" }}
>
  <strong>Purchase History</strong>

  {/* Right Section */}
  <div className="d-flex align-items-center gap-3 flex-wrap">

    <CButton color="primary" onClick={downloadPDF}>
      Download PDF
    </CButton>

    <CButton color="info" onClick={downloadExcel}>
      Download Excel
    </CButton>

    {/* Project Filter */}
    <div style={{ width: 200 }}>
      <Select
        placeholder="Filter by Project"
        options={projects.map((p) => ({
          value: p.id,
          label: p.project_name,
        }))}
        value={filterProject}
        onChange={setFilterProject}
        isClearable
      />
    </div>

    {/* Vendor Filter */}
    <div style={{ width: 200 }}>
      <Select
        placeholder="Filter by Vendor"
        options={vendors.map((v) => ({
          value: v.id,
          label: v.name,
        }))}
        value={filterVendor}
        onChange={setFilterVendor}
        isClearable
      />
    </div>

    {/* Add Purchase */}
    <CButton color="success" onClick={() => setShowAddModal(true)}>
      Add Purchase
    </CButton>
  </div>
</CCardHeader>


        <CCardBody>
          {loading && purchases.length === 0 ? (
            <div className="text-center py-4">
              <CSpinner />
            </div>
          ) : filteredData.length > 0 ? (
            <>
              <div className="table-responsive">
                <CTable striped hover bordered>
                  <CTableHead color="light">
                    <CTableRow>
                      <CTableHeaderCell>Sr. No.</CTableHeaderCell>
                      <CTableHeaderCell>Project</CTableHeaderCell>
                      <CTableHeaderCell>Vendor</CTableHeaderCell>
                      <CTableHeaderCell>Material</CTableHeaderCell>
                      <CTableHeaderCell>Price/Unit</CTableHeaderCell>
                      <CTableHeaderCell>Qty</CTableHeaderCell>
                      <CTableHeaderCell>Total</CTableHeaderCell>
                      <CTableHeaderCell>Include GST</CTableHeaderCell>

                      <CTableHeaderCell>Date</CTableHeaderCell>
                      <CTableHeaderCell>About</CTableHeaderCell>
                      <CTableHeaderCell>Action</CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>

                  <CTableBody>
                    {filteredData.map((p, i) => (
                      <CTableRow key={p.id}>
                        <CTableDataCell>{i + 1}</CTableDataCell>
                        <CTableDataCell>{p.project?.project_name || '—'}</CTableDataCell>
                        <CTableDataCell>{p.vendor?.name || '—'}</CTableDataCell>
                        <CTableDataCell>{p.material_name}</CTableDataCell>
                        <CTableDataCell>₹{parseFloat(p.price_per_unit).toFixed(2)}</CTableDataCell>
                        <CTableDataCell>{p.qty}</CTableDataCell>
                        <CTableDataCell>
                          <strong>₹{parseFloat(p.total).toFixed(2)}</strong>
                        </CTableDataCell>

                       <CTableDataCell>
  {p.gst_included ? (
    <CBadge color="success">Yes</CBadge>
  ) : (
    <CBadge color="danger">No</CBadge>
  )}
</CTableDataCell>
                        <CTableDataCell>{new Date(p.date).toLocaleDateString()}</CTableDataCell>
                        <CTableDataCell>{p.about || '—'}</CTableDataCell>
                        <CTableDataCell>
                          <div className="d-flex gap-2">
                            <CButton color="warning" size="sm" onClick={() => openEdit(p)}>
                              Edit
                            </CButton>
                            {usertype === 1 && (
                              <CButton color="danger" size="sm" onClick={() => openDeleteModal(p.id)}>
                                Delete
                              </CButton>
                            )}
                          </div>
                        </CTableDataCell>
                      </CTableRow>
                    ))}
                  </CTableBody>
                </CTable>
              </div>

              {/* Infinite Scroll Trigger */}
              <div ref={observerTarget} style={{ height: '20px', margin: '20px 0' }}>
                {loadingMore && (
                  <div className="text-center">
                    <CSpinner size="sm" className="me-2" />
                    <span className="text-muted small">Loading more purchases...</span>
                  </div>
                )}
                {!hasMore && purchases.length > 0 && (
                  <div className="text-center text-muted small">
                    <hr />
                    <p>All {purchases.length} purchases loaded</p>
                  </div>
                )}
              </div>
            </>
          ) : (
            <CAlert color="info" className="text-center">
              No matching purchases found.
            </CAlert>
          )}
        </CCardBody>
      </CCard>

      {/* ---------- ADD MODAL ---------- */}
      <CModal size="xl" visible={showAddModal} onClose={() => setShowAddModal(false)} backdrop="static">
        <CModalHeader closeButton>
          <CModalTitle>Add New Purchase</CModalTitle>
        </CModalHeader>
        <PurchaseForm
          vendors={vendors}
          onSuccess={() => {
            setShowAddModal(false);
            refreshTable();
          }}
          onCancel={() => setShowAddModal(false)}
        />
      </CModal>

      {/* ---------- EDIT MODAL ---------- */}
      {editItem && (
        <EditPurchaseModal
          visible={showEditModal}
          purchase={editItem}
          vendors={vendors}
          onClose={() => {
            setShowEditModal(false);
            setEditItem(null);
          }}
          onSuccess={refreshTable}
        />
      )}

      <ConfirmationModal
        visible={deleteModalVisible}
        setVisible={setDeleteModalVisible}
        resource="Purchase Record"
        onYes={handleDelete}
      />
    </>
  );
};

export default PurchaseList;