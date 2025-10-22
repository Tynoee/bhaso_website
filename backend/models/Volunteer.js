import mongoose from "mongoose";

const volunteerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  program: { type: String, required: true },
  experience: { type: String, required: true },
  availability: { type: String, required: true },
}, { timestamps: true });

export default mongoose.models.Volunteer || mongoose.model("Volunteer", volunteerSchema);
