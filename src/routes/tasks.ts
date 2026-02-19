import { Router, type Request, type Response } from "express";
import tasks from "../data/tasks.json" with { type: "json" };

export const TaskRouter = Router();

TaskRouter.get("/", (req: Request, res: Response) => {
  res.status(200).send({
    message: "Tasks",
    status: 200,
    data: tasks,
  });
});
