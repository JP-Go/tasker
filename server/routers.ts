import { Router } from "express";
import { TaskController } from "./controllers/task-controller"
import { TaskRepository } from "./repositories/task-repository"
import { TaskService } from "./services/task-service"

export const taskRepository = new TaskRepository()
export const taskService = new TaskService(taskRepository)
export const taskController = new TaskController(taskService)

const taskRouter = Router()

taskRouter.route("/:id")
  .get((req, res) => taskController.getTask(req, res))
  .delete((req, res) => taskController.deleteTask(req, res))
  .patch((req, res) => taskController.updateTask(req, res))

taskRouter.route('/')
  .get((req,res) => taskController.getAllTasks(req,res))
  .post((req, res) => taskController.saveTask(req, res))

export { taskRouter }
