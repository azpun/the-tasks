import express from 'express'
import type { Application } from 'express'
import { route } from './routes/index.ts'
import { logger } from './utils/logger.ts'

const app: Application = express()
const port: number = 3000

route(app)

app.listen(port, () => {
  logger.info(`Server Start on http://localhost:${port}`)
})
