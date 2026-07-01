import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import authRoutes from "../src/routes/auth.routes.js";
import adminRoutes from "../src/routes/admin.routes.js";
import goldRoutes from "../src/routes/gold.routes.js";

import dotenv from "dotenv";
dotenv.config();

const app = express();
// setup cors
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  }),
);
app.use(express.json());

// parse cookies for routes that rely on cookies (auth)
app.use(cookieParser());

app.get("/", (rq, res) => {
  res.send("API is running...");
});

// Routes
app.use("/aurix/v1/auth", authRoutes);
app.use("/aurix/v1/admin", adminRoutes);
app.use("/aurix/v1/gold-price", goldRoutes);
// app.use("/aurix/v1/user", userRoutes);
// app.use("/aurix/v1/chats", conversationRoutes);

export default app;
