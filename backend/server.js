const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// ✅ FIRST middleware
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));
app.use(express.json());

// ✅ THEN routes
const leadRoutes = require("./routes/leadRoutes");
app.use("/api/leads", leadRoutes);

app.post("/api/login", (req, res) => {
  console.log("LOGIN HIT ✅");
  console.log("DATA:", req.body);

  const { username, password } = req.body;

  if (username === "admin" && password === "admin123") {
    return res.json({ success: true });
  }

  return res.status(401).json({ success: false });
});

// SIMPLE LOGIN (hardcoded)
app.post("/api/login", (req, res) => {
  const { username, password } = req.body;

  if (username === "admin" && password === "admin123") {
    res.json({ success: true });
  } else {
    res.status(401).json({ success: false, message: "Invalid credentials" });
  }
});

// ✅ DB
mongoose.connect("mongodb://127.0.0.1:27017/crm")
.then(() => console.log("DB Connected"))
.catch(err => console.log(err));

// test
app.get("/", (req, res) => {
  res.send("CRM Backend Running");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});