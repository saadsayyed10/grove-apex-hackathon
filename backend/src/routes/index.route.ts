// Import router library
import { Router } from "express";

// Import all sub-routes
import userRouter from "./user.route";

const mainRouter = Router();

// /api/users
mainRouter.use("/users", userRouter);

export default mainRouter;
