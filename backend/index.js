import dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose';
import mailmessage from './src/routes/messages.js';
import cors from 'cors';
import express from 'express';
import cookieParser from 'cookie-parser';

const app = express();
mongoose.set("strictQuery", false);
const corsOptions = {
  origin: 'https://portfolio-7s19q57yu-tushar-hases-projects.vercel.app', // your frontend domain
  methods: ['GET', 'POST', 'OPTIONS'],
  credentials: true, // if using cookies or auth headers
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions));
app.use(cookieParser());
app.use(express.json());


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


// Routes
app.use('/api/messages', mailmessage);

// Export the app for Vercel (no app.listen needed)
export default app;