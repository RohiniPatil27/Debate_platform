import express from "express";
import path from "path";
import cors from "cors";
import cookieParser from "cookie-parser";
import { fileURLToPath } from "url";

import userRoutes from "../routers/user.routes.js";
import roomRoutes from "../routers/room.routes.js";
import tagRoutes from "../routers/tag.routes.js";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// CORS Options
const corsOptions = {
  origin: process.env.CORS_OPTIONS || "http://localhost:3000",
  credentials: true,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  allowedHeaders: "Content-Type,Authorization",
};

// Middlewares
app.use(cors(corsOptions));
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(cookieParser());
app.use(express.static("public"));
app.use("/public", express.static(path.join(__dirname, "public")));

// Options
app.options("*", cors(corsOptions));

// Routes
app.use("/api/users", userRoutes);
app.use("/api/tags", tagRoutes);
app.use("/api/rooms", roomRoutes);

// Test Route
app.get("/api", (req, res) => {
  res.json({
    message: "Hello World!",
  });
});

export default app;
