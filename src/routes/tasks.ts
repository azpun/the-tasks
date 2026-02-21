import { Router, type Request, type Response } from 'express'
import tasks from '../data/tasks.json' with { type: 'json' }
import { logger } from '../utils/logger.ts'

export const TaskRouter = Router()

// get tasks data
TaskRouter.get('/', (req: Request, res: Response) => {
  logger.info('Get Tasks Data Success')
  res.status(200).send({
    message: 'Tasks',
    status: 200,
    data: tasks
  })
})

TaskRouter.post('/', (req: Request, res: Response) => {
  logger.info('Add New Task Success')
  res.status(200).send({
    message: 'Users',
    status: 200,
    data: req.body
  })
})
