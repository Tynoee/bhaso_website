// server.js
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const contactRoutes = require("./routes/contactRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const cors = require("cors");
app.use(cors());


app.use("/api/contact", contactRoutes);

app.get("/", (req, res) => {
  res.send("BHASO Backend is Running.");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
