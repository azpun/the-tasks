import { Router, type Request, type Response } from 'express'
import users from '../data/users.json' with { type: 'json' }

export const UserRouter = Router()

UserRouter.get('/', (req: Request, res: Response) => {
  res.status(200).send({
    message: 'Users',
    status: 200,
    data: users
  })
})
