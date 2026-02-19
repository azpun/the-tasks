import type { Application, Router } from 'express'
import { TaskRouter } from './tasks.ts'

const _routes: Array<[string, Router]> = [['/', TaskRouter]]

export const route = (app: Application) => {
  _routes.forEach((route) => {
    const [url, router] = route
    app.use(url, router)
  })
}
