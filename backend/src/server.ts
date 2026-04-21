import express, { Request, Response } from "express";

const app = express();
const PORT = 3001;

app.get("/health", (_req: Request, res: Response) => {
  res.status(200).json({ status: "200", health: "OK" });
});

app.listen(PORT, () => {
  console.log(`Server running on PORT:${PORT}`);
});
