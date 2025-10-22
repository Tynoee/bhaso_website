import express from "express";
import Donation from "../models/Donation.js";
import nodemailer from "nodemailer";

const router = express.Router();

router.post("/", async (req, res) => {
  const { name, surname, email, phone, amount, currency, donationType } = req.body;

  if (!name || !surname || !email || !phone || !amount || !currency || !donationType) {
    return res.status(400).json({ success: false, message: "All fields are required" });
  }

  try {
    // Save to MongoDB
    const newDonation = await Donation.create({
      name,
      surname,
      email,
      phone,
      amount,
      currency,
      donationType,
    });

    // Optional: send email notification (we can use .env for admin email later)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"BHASO Donations" <${process.env.SMTP_USER}>`,
      to: process.env.ADMIN_EMAIL || email, // For testing we can use your email
      subject: "New Donation Received",
      text: `Donation received from ${name} ${surname}.\nAmount: ${amount} ${currency}\nType: ${donationType}\nEmail: ${email}\nPhone: ${phone}`,
    });

    res.status(201).json({ success: true, message: "Donation recorded successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

export default router;
