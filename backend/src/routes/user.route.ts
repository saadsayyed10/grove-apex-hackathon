// Import router library
import { Router } from "express";

// Import all controllers as one instance
import * as userControllers from "../controllers/user.controller";

const userRouter = Router();

// Route to sync clerk user to database
userRouter.post("/sync", userControllers.syncUserController);

export default userRouter;
