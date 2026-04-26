import { useState, useEffect } from "react";
import LeadForm from "./components/LeadForm";
import LeadsList from "./components/LeadsList";
import Login from "./components/Login";
import axios from "axios";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    const auth = localStorage.getItem("auth");
    if (auth === "true") setIsLoggedIn(true);
  }, []);

  useEffect(() => {
    const fetchLeads = async () => {
      const res = await axios.get("/api/leads"); // ✅ FIXED
      setLeads(res.data);
    };
    if (isLoggedIn) fetchLeads();
  }, [isLoggedIn]);

  const totalLeads = leads.length;
  const convertedLeads = leads.filter(l => l.status === "Converted").length;

  if (!isLoggedIn) {
    return <Login setIsLoggedIn={setIsLoggedIn} />;
  }

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <div style={{ width: sidebarOpen ? "240px" : "80px" }}>
        <button onClick={() => setSidebarOpen(!sidebarOpen)}>☰</button>

        <button onClick={() => {
          localStorage.removeItem("auth");
          window.location.reload();
        }}>
          Logout
        </button>
      </div>

      <div style={{ flex: 1, padding: "30px" }}>
        <h1>CRM Dashboard</h1>

        <p>Total Leads: {totalLeads}</p>
        <p>Converted: {convertedLeads}</p>

        <LeadForm />
        <LeadsList />
      </div>
    </div>
  );
}

export default App;