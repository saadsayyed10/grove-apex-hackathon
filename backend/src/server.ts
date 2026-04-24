import express, { Request, Response } from "express";
import { connectDB } from "./lib/connectDB";
import cors from "cors";
import mainRouter from "./routes/index.route";

const app = express();
const PORT = 3001;

app.use(express.json({ limit: "10mb" }));
app.use(cors());

// Main route for API
app.use("/api", mainRouter);

// Health check API
app.get("/", (_req: Request, res: Response) => {
  res.status(200).json({ status: "200", health: "OK" });
});

const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`Server running on PORT:${PORT}`);
  });
};

startServer();
