import prisma from "./prisma.orm";

export const connectDB = async () => {
  try {
    await prisma.$connect();
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(`Error connecting to MongoDB`, error);
  }
};
