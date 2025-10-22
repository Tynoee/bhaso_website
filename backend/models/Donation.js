import mongoose from "mongoose";

const donationSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    surname: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    amount: { type: Number, required: true },
    currency: { type: String, required: true },
    donationType: { type: String, enum: ["monthly", "one-time"], required: true },
  },
  { timestamps: true }
);

const Donation = mongoose.models.Donation || mongoose.model("Donation", donationSchema);
export default Donation;
