import axios from "axios";
import apiUrl from "./api.url";

interface SyncUser {
  clerkId: string;
  firstName: string;
  lastName?: string;
  email: string;
  profilePicture?: string;
}

export const syncUserAPI = async (data: SyncUser) => {
  return await axios.post(`${apiUrl}/users/sync`, data);
};
