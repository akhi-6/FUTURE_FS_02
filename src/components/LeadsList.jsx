import { useEffect, useState } from "react";
import axios from "axios";

function LeadsList() {
  const [leads, setLeads] = useState([]);

  // Fetch leads
  const fetchLeads = async () => {
    const res = await axios.get("http://127.0.0.1:5000/api/leads");
    setLeads(res.data);
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  // Update status
  const updateStatus = async (id, newStatus) => {
    await axios.put(`http://127.0.0.1:5000/api/leads/${id}`, {
      status: newStatus
    });
    fetchLeads();
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Leads Dashboard 📊</h2>

      {leads.map((lead) => (
        <div key={lead._id} style={cardStyle}>

          {/* Top Section */}
          <div style={topRow}>
            <div>
              <h3 style={nameStyle}>{lead.name}</h3>
              <p style={emailStyle}>{lead.email}</p>
              <p style={sourceStyle}>
                Source: <span style={sourceHighlight}>{lead.source}</span>
              </p>
            </div>

            {/* Status Badge */}
            <span style={getStatusStyle(lead.status)}>
              {lead.status}
            </span>
          </div>

          {/* Buttons */}
          <div style={buttonRow}>
            <button
              onClick={() => updateStatus(lead._id, "Contacted")}
              style={btnWarning}
            >
              Contacted
            </button>

            <button
              onClick={() => updateStatus(lead._id, "Converted")}
              style={btnSuccess}
            >
              Converted
            </button>
          </div>

          {/* Notes */}
          <textarea
            placeholder="Add notes..."
            value={lead.notes || ""}
            onChange={async (e) => {
              await axios.put(`http://127.0.0.1:5000/api/leads/${lead._id}`, {
                notes: e.target.value
              });
              fetchLeads();
            }}
            style={textareaStyle}
          />

        </div>
      ))}
    </div>
  );
}

/* 🔥 PREMIUM STYLES */

const containerStyle = {
  padding: "30px",
  minHeight: "100vh",
  background: "linear-gradient(135deg, #0f0f1a, #1a0f2e)",
};

const titleStyle = {
  fontSize: "24px",
  fontWeight: "600",
  marginBottom: "20px",
  color: "#e0e7ff",
};

const cardStyle = {
  background: "rgba(30, 27, 75, 0.6)",
  backdropFilter: "blur(14px)",
  padding: "20px",
  marginBottom: "18px",
  borderRadius: "16px",
  border: "1px solid rgba(255,255,255,0.08)",
  boxShadow: "0 10px 40px rgba(0,0,0,0.5)",
  color: "white",
  transition: "0.3s",
};

const topRow = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const nameStyle = {
  margin: 0,
  color: "#e0e7ff",
};

const emailStyle = {
  margin: "5px 0",
  color: "#a5b4fc",
};

const sourceStyle = {
  margin: 0,
  fontSize: "14px",
  color: "#c7d2fe",
};

const sourceHighlight = {
  color: "#c4b5fd",
  fontWeight: "500",
};

const getStatusStyle = (status) => ({
  padding: "6px 14px",
  borderRadius: "20px",
  fontSize: "12px",
  fontWeight: "600",
  background:
    status === "New" ? "#1f2937" :
    status === "Contacted" ? "#7c2d12" :
    "#14532d",
  color:
    status === "New" ? "#9ca3af" :
    status === "Contacted" ? "#fdba74" :
    "#86efac",
});

const buttonRow = {
  marginTop: "15px",
  display: "flex",
  gap: "10px",
};

const btnWarning = {
  background: "linear-gradient(135deg, #7c3aed, #f59e0b)",
  color: "white",
  padding: "8px 14px",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  fontWeight: "500",
  boxShadow: "0 4px 15px rgba(124,58,237,0.4)",
};

const btnSuccess = {
  background: "linear-gradient(135deg, #22c55e, #4ade80)",
  color: "white",
  padding: "8px 14px",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  fontWeight: "500",
  boxShadow: "0 4px 15px rgba(34,197,94,0.4)",
};

const textareaStyle = {
  marginTop: "15px",
  width: "100%",
  padding: "10px",
  borderRadius: "8px",
  border: "1px solid #312e81",
  background: "#0f172a",
  color: "white",
  outline: "none",
  fontSize: "14px",
};

export default LeadsList;