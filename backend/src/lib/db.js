import mongoose from "mongoose"

import { env } from "../lib/env.js"
import { DB_NAME } from "../constants.js"

export async function connectDB() {
  try {
    const conn = await mongoose.connect(`${env.databaseUri}/${DB_NAME}`)
    console.log("Database connected successfully", conn.connection.host)
  } catch (error) {
    console.log("Database connection failed: ", error.message)
  }
}
