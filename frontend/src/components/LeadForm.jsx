import { useState } from "react";
import axios from "axios";

function LeadForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    source: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post("http://127.0.0.1:5000/api/leads", {
      ...form,
      status: "New"
    });

    alert("Lead Added 🚀");

    setForm({
      name: "",
      email: "",
      source: ""
    });
  };

  return (
    <div style={container}>
      <h2 style={title}>Add New Lead 🚀</h2>

      <form onSubmit={handleSubmit} style={formStyle}>

        <input
          type="text"
          placeholder="Enter Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          style={input}
          required
        />

        <input
          type="email"
          placeholder="Enter Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          style={input}
          required
        />

        <input
          type="text"
          placeholder="Lead Source (Instagram, Website...)"
          value={form.source}
          onChange={(e) => setForm({ ...form, source: e.target.value })}
          style={input}
          required
        />

        <button style={button}>
          Add Lead
        </button>

      </form>
    </div>
  );
}

/* 🔥 PREMIUM STYLES */

const container = {
  background: "rgba(30, 27, 75, 0.6)",
  backdropFilter: "blur(14px)",
  padding: "25px",
  borderRadius: "16px",
  marginBottom: "25px",
  border: "1px solid rgba(255,255,255,0.08)",
  boxShadow: "0 10px 40px rgba(0,0,0,0.5)",
  color: "white"
};

const title = {
  marginBottom: "15px",
  color: "#e0e7ff"
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "12px"
};

const input = {
  padding: "12px",
  borderRadius: "8px",
  border: "1px solid #312e81",
  background: "#0f172a",
  color: "white",
  outline: "none",
  fontSize: "14px"
};

const button = {
  marginTop: "10px",
  padding: "12px",
  borderRadius: "10px",
  border: "none",
  background: "linear-gradient(135deg, #7c3aed, #6366f1)",
  color: "white",
  fontWeight: "600",
  cursor: "pointer",
  boxShadow: "0 4px 20px rgba(124,58,237,0.5)"
};

export default LeadForm;