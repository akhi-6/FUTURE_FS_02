import { useEffect, useState } from "react";
import axios from "axios";

function LeadsList() {
  const [leads, setLeads] = useState([]);

  const fetchLeads = async () => {
    const res = await axios.get("/api/leads"); // ✅ FIXED
    setLeads(res.data);
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  // ✅ FIXED FUNCTION
  const updateStatus = async (id, newStatus) => {
    await axios.put(`/api/leads/${id}`, {
      status: newStatus
    });
    fetchLeads();
  };

  return (
    <div>
      <h2>Leads</h2>

      {leads.map((lead) => (
        <div key={lead._id}>

          <h3>{lead.name}</h3>
          <p>{lead.email}</p>

          <button onClick={() => updateStatus(lead._id, "Contacted")}>
            Contacted
          </button>

          <button onClick={() => updateStatus(lead._id, "Converted")}>
            Converted
          </button>

          {/* ✅ FIXED (NO LOCALHOST) */}
          <textarea
            value={lead.notes || ""}
            onChange={async (e) => {
              await axios.put(`/api/leads/${lead._id}`, {
                notes: e.target.value
              });
              fetchLeads();
            }}
          />
        </div>
      ))}
    </div>
  );
}

export default LeadsList;