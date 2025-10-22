import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import Stripe from 'stripe';
import mongoose from 'mongoose';
import volunteerRoutes from './routes/volunteer.js'; // Routes file
import donationRoutes from './routes/donation.js'; // Donation route
import subscriberRoutes from './routes/subscriber.js'; // New subscriber route

const app = express();
const PORT = process.env.PORT || 5000;

// Stripe setup
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2022-11-15',
});

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB connected"))
.catch((err) => console.error("❌ MongoDB connection error:", err));

app.use(cors());
app.use(express.json());

// Stripe payment intent route
app.post('/create-payment-intent', async (req, res) => {
  try {
    const { amount, currency } = req.body;

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
    });

    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error('Error creating payment intent:', error);
    res.status(500).json({ error: error.message });
  }
});

// Volunteer form route
app.use("/api/volunteer", volunteerRoutes);

// Donation form route
app.use("/api/donation", donationRoutes);

// Subscriber form route
app.use("/api/subscriber", subscriberRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
