// backend/src/types/user.type.ts

// Used in sync user service
export type SyncUser = {
  clerkId: string;
  firstName: string;
  lastName?: string;
  email: string;
  profilePicture?: string;
};
