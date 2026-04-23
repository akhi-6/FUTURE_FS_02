const express = require("express");
const router = express.Router();
const Lead = require("../models/Lead");

// CREATE lead
router.post("/", async (req, res) => {
  try {
    const lead = new Lead(req.body);
    await lead.save();
    res.json(lead);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET all leads
router.get("/", async (req, res) => {
  const leads = await Lead.find();
  res.json(leads);
});

// UPDATE status
router.put("/:id", async (req, res) => {
  const updated = await Lead.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updated);
});

module.exports = router;