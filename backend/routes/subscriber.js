import express from "express";
import Subscriber from "../models/Subscriber.js";
import nodemailer from "nodemailer";

const router = express.Router();

// POST /api/subscriber
router.post("/", async (req, res) => {
  const { firstName, lastName, email, phone, newsletter } = req.body;

  // Basic validation
  if (!firstName || !lastName || !email) {
    return res.status(400).json({ success: false, message: "First name, last name, and email are required." });
  }

  try {
    // Save to MongoDB
    const newSubscriber = await Subscriber.create({ firstName, lastName, email, phone, newsletter });

    // Send admin notification
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"BHASO Subscribers" <${process.env.SMTP_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: "New Subscriber Alert",
      text: `A new subscriber has joined.\n\nName: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone || "N/A"}\nNewsletter: ${newsletter ? "Yes" : "No"}`,
    });

    res.status(201).json({ success: true, message: "Subscriber added and admin notified." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error saving subscriber." });
  }
});

export default router;
