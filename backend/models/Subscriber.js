import mongoose from "mongoose";

const subscriberSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    newsletter: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.models.Subscriber || mongoose.model("Subscriber", subscriberSchema);
