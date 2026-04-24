// backend/src/services/user.service.ts

// Import types
import { type SyncUser } from "../types/user.type";

// Import ORM instance
import prisma from "../lib/prisma.orm";

// Service to sync user from clerk
export const syncUserService = async (data: SyncUser) => {
  const existing = await prisma.users.findUnique({
    where: {
      clerkId: data.clerkId,
    },
  });

  // If user exists do not sync
  if (existing) {
    throw new Error("User already exists");
  }

  // Sync clerk's user to database
  return await prisma.users.create({
    data: {
      clerkId: data.clerkId,
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      profilePicture: data.profilePicture,
    },
  });
};
