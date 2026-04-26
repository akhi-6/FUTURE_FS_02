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

    await axios.post("/api/leads", { // ✅ FIXED
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
    <form onSubmit={handleSubmit}>
      <input placeholder="Name" value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })} />

      <input placeholder="Email" value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })} />

      <input placeholder="Source" value={form.source}
        onChange={(e) => setForm({ ...form, source: e.target.value })} />

      <button>Add Lead</button>
    </form>
  );
}

export default LeadForm;