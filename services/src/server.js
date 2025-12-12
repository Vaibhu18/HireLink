import express from "express"
import path from "path"

import { ENV } from "./lib/env.js";

const app = express();

const __dirname = path.resolve();

app.get("/health", (req, res) => {
    res.status(200).json({ status: "ok", message: "Service is healthy", timestamp: new Date().toISOString() });
})

app.get("/books", (req, res) => {
    res.status(200).json({ status: "ok", message: "This is Book endpoint", timestamp: new Date().toISOString() });
})

// Production Ready
if (ENV.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../web/dist")));

    app.get("/{*any}", (req, res) => {
        res.sendFile(path.join(__dirname, "../web", "dist", "index.html"))
    })
}

app.listen(ENV.PORT, () => {
    console.log(`🚀 Server running on port ${ENV.PORT} in ${ENV.NODE_ENV || "development"} mode`)
}).on("error", (error) => {
    console.error("❌ Failed to start server:", err);
    process.exit(1);
})