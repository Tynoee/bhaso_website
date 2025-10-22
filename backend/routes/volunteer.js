import express from "express";
import fetch from "node-fetch";
import Volunteer from "../models/Volunteer.js";

const router = express.Router();

// POST /api/volunteer
router.post("/", async (req, res) => {
  const { name, email, phone, program, experience, availability } = req.body;

  // Basic validation
  if (!name || !email || !phone || !program || !experience || !availability) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    // Save to MongoDB
    const volunteer = new Volunteer({ name, email, phone, program, experience, availability });
    await volunteer.save();

    // Send to Web3Forms for email notification
    const web3Response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: process.env.WEB3FORMS_ACCESS_KEY,
        name,
        email,
        phone,
        program,
        experience,
        availability,
      }),
    });

    const web3Result = await web3Response.json();

    res.json({ success: true, web3Result });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error saving form." });
  }
});

export default router;
