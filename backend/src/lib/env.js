import dotenv from "dotenv"

dotenv.config()

export const env = {
  port: process.env.PORT,
  corsOrigin: process.env.CORS_ORIGIN,
  databaseUri: process.env.MONGODB_URI,
}
