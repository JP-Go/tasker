import { Request, Response } from "express";  
import { ITaskService } from "../services/itask-service";
import { TaskNotFoundError } from "../errors/task-not-found";

export function getTask(req: Request, res: Response, taskService: ITaskService) {
  try {
    const id = +req.params.id
    console.log(id,typeof id)
    return res.status(200).json(taskService.getById(id))
  } catch (error) {
    if (error instanceof TaskNotFoundError){
      res.status(400).json({
        error: error.message
      })
    }
  }
  
}
