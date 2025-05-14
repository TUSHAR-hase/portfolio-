import dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose';
import mailmessage from './src/routes/messages.js';
import cors from 'cors';
import express from 'express';
import cookieParser from 'cookie-parser';

const app = express();
mongoose.set("strictQuery", false);
const allowedOrigins = [
  'https://portfolio-gapvgq3at-tushar-hases-projects.vercel.app',
  'https://portfolio-7s19q57yu-tushar-hases-projects.vercel.app',
  "https://portfolio-tushar-hases-projects.vercel.app"
];

const corsOptions = {
  origin: function (origin, callback) {
     console.log('Incoming Origin:', origin); 
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', ],
  credentials: true,
};


app.use(cors(corsOptions));

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