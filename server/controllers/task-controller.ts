import { Request, Response } from "express";
import { ITaskService } from "../services/itask-service";
import { TaskNotFoundError } from "../errors/task-not-found";
import { z } from 'zod'

const taskDtoSchema = z.object({
  titulo: z.string().max(60, "Titulo deve ter no máximo 60 caracteres"),
  concluida: z.boolean().optional()
})

export class TaskController {

  constructor(private readonly taskService: ITaskService) { }

  getTask(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id, 10)
      return res.status(200).json(this.taskService.getById(id))
    } catch (error) {
      if (error instanceof TaskNotFoundError) {
        return res.status(400).json({
          error: error.message
        })
      } else if (error instanceof TypeError) {
        console.log(error)
        return res.status(400).json({
          error: "Id not valid "
        })
      }
    }
  }

  deleteTask(req: Request, res: Response) {
    try {
      const id = +req.params.id
      return res.status(204).json(this.taskService.delete(id))
    } catch (error) {
      if (error instanceof TaskNotFoundError) {
        return res.status(400).json({
          error: error.message
        })
      }
    }
  }

  saveTask(req: Request, res: Response) {
    const body = req.body
    const taskDto = taskDtoSchema.parse(body)
    res.status(200).json(this.taskService.save(taskDto))
  }

  updateTask(req: Request, res: Response) {
    const id = +req.params.id
    const body = req.body
    const taskDto = taskDtoSchema.parse(body)
    res.status(200).json(this.taskService.update(id,taskDto))
  }


}
