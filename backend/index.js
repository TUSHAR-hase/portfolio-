import dotenv from 'dotenv'
dotenv.config();

import mongoose from "mongoose"
import mailmessage from "./src/routes/messages.js"
import cors from 'cors';
import express from 'express';


import cookieParser from 'cookie-parser';



const app = express();
const port = process.env.PORT || 3000;

mongoose.set("strictQuery", false);

// MongoDB connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, { 
      useNewUrlParser: true,
      useUnifiedTopology: true 
    });
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
  }
};


app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use("/api/messages",mailmessage);
app.listen(port, () => {
  connectDB();
  console.log(`Server is running on port ${port}`);
});


