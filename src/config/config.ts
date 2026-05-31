import dotenv from "dotenv";

dotenv.config();

const config = {
  port: process.env.PORT || 8000,
  baseUrl: process.env.BASE_URL || "http://localhost:8000",
  dbUrl: process.env.DATABASE_URL,
};

export default config;
