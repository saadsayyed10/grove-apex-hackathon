// backend/src/controllers/user.controller.ts

// Import all user services as an instance
import * as userServices from "../services/user.service";

// Import Request and Response type from express
import { Request, Response } from "express";

/*
Sync user account controller
Method: POST
Endpoint: /api/users/sync
*/
export const syncUserController = async (req: Request, res: Response) => {
  try {
    const { clerkId, firstName, lastName, email, profilePicture } = req.body;
    const data = { clerkId, firstName, lastName, email, profilePicture };

    if (!data.clerkId || !data.firstName || !data.email) {
      console.log("Required fields are missing");
      return res.status(404).json({ error: "Required fields are missing" });
    }

    const user = await userServices.syncUserService(data);
    res.status(201).json({ message: "User synced", user });
  } catch (error: any) {
    console.log(error.message);
    return res.status(500).json({ error: error.message });
  }
};
