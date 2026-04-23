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
      const res = await axios.get("http://127.0.0.1:5000/api/leads");
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
    <div style={appContainer}>

      {/* SIDEBAR */}
      <div style={{
        ...sidebarStyle,
        width: sidebarOpen ? "240px" : "80px"
      }}>

        {/* TOP SECTION */}
        <div>
          {/* ☰ Button */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            style={menuBtn}
          >
            ☰
          </button>

          {sidebarOpen && (
            <>
              <h2 style={{ marginTop: "30px" }}>CRM</h2>
              <p style={menuItem}>Dashboard</p>
              <p style={menuItem}>Leads</p>
            </>
          )}
        </div>

        {/* LOGOUT */}
        <button
          onClick={() => {
            localStorage.removeItem("auth");
            window.location.reload();
          }}
          style={logoutBtn}
        >
          Logout
        </button>

      </div>

      {/* MAIN CONTENT */}
      <div style={mainContent}>
        <h1 style={title}>CRM Dashboard by Akhila 💼</h1>

        {/* STATS */}
        <div style={cardsContainer}>
          <div style={card}>
            <p>Total Leads</p>
            <h2>{totalLeads}</h2>
          </div>

          <div style={card}>
            <p>Converted</p>
            <h2>{convertedLeads}</h2>
          </div>
        </div>

        <LeadForm />
        <LeadsList />
      </div>

    </div>
  );
}

/* 🔥 STYLES */

const appContainer = {
  display: "flex",
  minHeight: "100vh",
  fontFamily: "Inter, sans-serif",
  background: "linear-gradient(135deg, #0f0f1a, #1a0f2e)"
};

const sidebarStyle = {
  height: "100vh",
  background: "linear-gradient(180deg, #020617, #0f172a)",
  color: "white",
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  transition: "0.3s"
};

const menuBtn = {
  fontSize: "26px",
  background: "none",
  border: "none",
  color: "white",
  cursor: "pointer"
};

const menuItem = {
  marginTop: "20px",
  opacity: 0.7,
  cursor: "pointer"
};

const logoutBtn = {
  background: "#ef4444",
  color: "white",
  padding: "10px",
  border: "none",
  borderRadius: "8px",
  width: "100%"
};

const mainContent = {
  flex: 1,
  padding: "30px"
};

const title = {
  color: "#e0e7ff",
  marginBottom: "20px"
};

const cardsContainer = {
  display: "flex",
  gap: "20px",
  marginBottom: "20px"
};

const card = {
  background: "rgba(30, 27, 75, 0.6)",
  backdropFilter: "blur(12px)",
  padding: "20px",
  borderRadius: "14px",
  color: "white",
  flex: 1,
  boxShadow: "0 8px 30px rgba(0,0,0,0.4)"
};

export default App;