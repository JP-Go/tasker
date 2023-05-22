import { Task, TaskDTO } from "../@types/Task";

export interface ITaskService {
  getAll(): Task[]
  getById(id: number): Task
  delete(id: number): void
  update(id: number, taskDto: TaskDTO): Task
  save(taskDto: TaskDTO): Task
}
