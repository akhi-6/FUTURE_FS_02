const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const app = express();

// ✅ Middleware
app.use(cors());
app.use(express.json());

// ✅ Routes
const leadRoutes = require("./routes/leadRoutes");
app.use("/api/leads", leadRoutes);

// ✅ Login Route
app.post("/api/login", (req, res) => {
  const username = req.body.username?.trim();
  const password = req.body.password?.trim();

  if (username === "admin" && password === "admin123") {
    return res.json({ success: true });
  }

  return res.status(401).json({
    success: false,
    message: "Invalid credentials"
  });
});

// ✅ MongoDB (IMPORTANT)
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("DB Connected ✅"))
  .catch(err => console.log(err));

// ✅ Serve frontend (VERY IMPORTANT)
app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
});

// ✅ Port fix for Render
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} 🚀`);
});