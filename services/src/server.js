import express from "express"
import { ENV } from "./lib/env.js";

const app = express();

app.get("/health", (req, res) => {
    res.status(200).json({ status: "ok", message: "Service is healthy", timestamp: new Date().toISOString() });
})

app.listen(ENV.PORT, () => {
    console.log(`🚀 Server running on port ${ENV.PORT} in ${ENV.NODE_ENV || "development"} mode`)
}).on("error", (error) => {
    console.error("❌ Failed to start server:", err);
    process.exit(1);
})