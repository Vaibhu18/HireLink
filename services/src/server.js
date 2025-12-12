import express from "express"
import path from "path"
import cors from "cors"
import { serve } from "inngest/express"

import { ENV } from "./lib/env.js";
import { connectDB } from "./lib/db.js";
import { inngest, functions } from "./lib/inngest.js";

const app = express();

const __dirname = path.resolve();

// Middlewares
app.use(express.json());
app.use(cors({
    origin: ENV.CLIENT_URL,
    credentials: true
}))

app.use("/api/inngest", serve({ client: inngest, functions }))

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

const startServer = async () => {
    try {
        await connectDB();
        app.listen(ENV.PORT, () => {
            console.log(`🚀 Server running on port ${ENV.PORT} in ${ENV.NODE_ENV || "development"} mode`);
        })
    } catch (error) {
        console.error("❌ Failed to start server:", error);
        process.exit(1);
    }
}

startServer();