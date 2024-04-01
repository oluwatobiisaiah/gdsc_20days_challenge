import dotenv from "dotenv";
dotenv.config();

interface Config {
  JWT_SECRET?: string;
  DATABASE_URL?: string;
  NODE_ENV: string;
  APP_PORT: string | number;
  LIMIT_REQUEST_PER_MINUTE: string;
  OTP_DURATION: number | string;
}

const config: Config = {
  DATABASE_URL: process.env.DATABASE_URL,
  NODE_ENV: process.env.NODE_ENV || "development",
  APP_PORT: process.env.APP_PORT || 4000,
  LIMIT_REQUEST_PER_MINUTE: process.env.LIMIT_REQUEST_PER_MINUTE || "20",
  OTP_DURATION: process.env.OTP_DURATION || 10,
  JWT_SECRET:process.env.JWT_SECRET 
};

export default config;
