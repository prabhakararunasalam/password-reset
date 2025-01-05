
import dotenv from "dotenv";

import cors from "cors";    
import express from "express";

import connectDB from "./Database/dbConfig.js";

import authRoute from "./Routers/authRouter.js";

dotenv.config();

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World!");
  }); 

app.use("/api/auth", authRoute);


const PORT = process.env.PORT ||4000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
