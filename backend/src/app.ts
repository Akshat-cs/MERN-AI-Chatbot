import express from "express";
import { config } from "dotenv";
import morgan from "morgan";
import appRouter from "./routes/index.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
config();

// Obtain the current filename and directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// middlewares
app.use(
  cors({
    origin: "https://mern-ai-chatbot.onrender.com",
    credentials: true,
    exposedHeaders: ["Set-Cookie"],
  })
);
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));

// Serve static files from the frontend build directory
app.use(express.static(join(__dirname, "..", "frontend", "dist")));

// Handle all other routes by serving the main HTML file
app.get("*", (req, res) => {
  res.sendFile(join(__dirname, "..", "frontend", "dist", "index.html"));
});

// remove it in production
app.use(morgan("dev"));
app.use("/api/v1", appRouter);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello World" });
});

export default app;
