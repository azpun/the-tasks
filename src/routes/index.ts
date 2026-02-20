import type { Application, Router } from 'express'
import { TaskRouter } from './tasks.ts'
import { UserRouter } from './users.ts'
import { LandingRouter } from './landing.ts'

const _routes: Array<[string, Router]> = [
  ['/', LandingRouter],
  ['/tasks', TaskRouter],
  ['/users', UserRouter]
]

export const route = (app: Application) => {
  _routes.forEach((route) => {
    const [url, router] = route
    app.use(url, router)
  })
}
