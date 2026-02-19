import type { Application, Router } from 'express'
import { TaskRouter } from './tasks.ts'
import { UserRouter } from './users.ts'

const _routes: Array<[string, Router]> = [
  ['/tasks', TaskRouter],
  ['/users', UserRouter]
]

export const route = (app: Application) => {
  _routes.forEach((route) => {
    const [url, router] = route
    app.use(url, router)
  })
}
