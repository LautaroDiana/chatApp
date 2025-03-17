import express from "express";
import dotenv from "dotenv";
import authRouter from "./routes/auth.route.js";
import { connectDb } from "./lib/db.js";

const app = express();

dotenv.config();

app.use(express.json());
app.use("/api/auth", authRouter);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  connectDb();
  console.log(`Server listening on http://localhost:${PORT}`);
});
