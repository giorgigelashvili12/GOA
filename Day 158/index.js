import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import {connectDB} from "./db/connectDB.js";
import {apiRoutes} from "./routes/api.routes.js";
import {authRoutes} from "./routes/auth.js";

dotenv.config();
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Welcome to the index route");
});

const authMiddleware = (req, res, next) => {
    try {
        console.log(req.headers);
    } catch (err) {
        res.status(500).json({error: err});
    }
    next()
}

app.use("/auth", authMiddleware, authRoutes);
app.use("/api", authMiddleware, apiRoutes);


app.listen(PORT, () => {
    connectDB();
    console.log("Server is running on port", PORT);
});