import express from "express"
import { taskRouter } from "./routers"
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())
app.use('/tasks',taskRouter)

export { app }
