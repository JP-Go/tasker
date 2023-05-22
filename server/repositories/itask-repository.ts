import { Task, TaskDTO } from "../@types/Task";

export interface ITaskRepository {
  getAll(): Task[]
  getById(id: number): Task | undefined
  delete(id: number): void
  update(id: number, taskDto: TaskDTO): Task | undefined
  save(taskDto: TaskDTO): Task
}
