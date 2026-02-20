import express from 'express'
import type { Application, Request, Response } from 'express'
import { route } from './routes/index.ts'
// import fs from 'fs/promises'

const app: Application = express()
const port: number = 3000

app.get('/', (req: Request, res: Response) => {
  res.status(200).send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>the-tasks</title>
    </head>
    <body>
    <h1>Selamat Datang di the-tasks</h1>
    <h3>Ini adalah root endpoint dari API the-tasks</h3>
    <p>Terdapat beberapa endpoint di dalam the-tasks, antara lain:</p>
    <ul>
      <li><a href="/tasks">/tasks</a></li>
      <li><a href="/users">/users</a></li>
    </ul>
    </body>
    </html>
  `)
})

// async function readData() {
//   const data = await fs.readFile('', 'utf-8')
//   console.log(data)
// }

// readData()

route(app)

app.listen(port, () => {
  console.log(`Server Start on http://localhost:${port}`)
})
