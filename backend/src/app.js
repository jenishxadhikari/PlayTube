import express from "express"
import helmet from "helmet"
import cors from "cors"

import { env } from "./lib/env.js"

const app = express()

// Middlewares
// Cross Site Resource Sharing
app.use(
  cors({
    origin: env.corsOrigin,
    credentials: true,
  })
)
// JSON body parser with limit size
app.use(express.json({ limit: "16kb" }))
// Url encoded body parser with limit size
app.use(express.urlencoded({ extended: true, limit: "16kb" }))
// Serve static files from the public directory
app.use(express.static("public"))
// Set HTTP headers that enhances security
app.use(helmet())

export default app
