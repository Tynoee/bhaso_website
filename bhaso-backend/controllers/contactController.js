const { validationResult } = require("express-validator");

exports.handleContactForm = (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, message } = req.body;

  console.log("📩 New Contact Form Submission:");
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);

  // You can store this in DB or send email here in future

  res.status(200).json({ message: "Message received successfully!" });
};
