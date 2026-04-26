const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const fs = require("fs");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const leadRoutes = require("./routes/leadRoutes");
app.use("/api/leads", leadRoutes);

// Login API
app.post("/api/login", (req, res) => {
  const { username, password } = req.body;

  if (username === "admin" && password === "admin123") {
    return res.json({ success: true });
  }

  res.status(401).json({ success: false });
});

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected ✅"))
  .catch(err => console.log("DB Error:", err));

// ===============================
// Serve React Frontend (SAFE MODE)
// ===============================
const buildPath = path.join(__dirname, "../frontend/build");

if (fs.existsSync(buildPath)) {
  // If build exists → serve React app
  app.use(express.static(buildPath));

  app.get("*", (req, res) => {
    res.sendFile(path.join(buildPath, "index.html"));
  });

  console.log("Frontend build found ✅ serving React app");
} else {
  // If build NOT exists → fallback (prevents Render crash)
  app.get("/", (req, res) => {
    res.send("🚀 Server is running. Frontend build not found.");
  });

  console.log("⚠️ Frontend build NOT found");
}

// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});