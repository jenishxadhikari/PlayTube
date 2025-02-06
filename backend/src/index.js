import app from "./app.js"
import { env } from "./lib/env.js"
import { connectDB } from "./lib/db.js"

const PORT = env.port

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running at port: ${PORT}`)
  })
})
