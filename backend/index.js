import dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose';
import mailmessage from './src/routes/messages.js';
import cors from 'cors';
import express from 'express';
import cookieParser from 'cookie-parser';

const app = express();

// MongoDB connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection failed:', error);
    process.exit(1); // Exit if DB connection fails
  }
};

// Connect to MongoDB when the app starts
connectDB();

// Middleware
app.use(cors({
  origin: 'https://portfolio-io4rhnm1u-tushar-hases-projects.vercel.app', // Allow your frontend domain
  methods: ['GET', 'POST', 'OPTIONS'], // Allow specific methods (include OPTIONS for preflight)
  allowedHeaders: ['Content-Type'], // Allow specific headers
}));
app.use(cookieParser());
app.use(express.json());

// Routes
app.use('/api/messages', mailmessage);

// Export the app for Vercel (no app.listen needed)
export default app;