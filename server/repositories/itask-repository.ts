import { Task, TaskDTO } from "../@types/Task";

export interface ITaskRepository {
  getById(id: number): Task | undefined
  delete(id: number): void
  update(id: number, taskDto: TaskDTO): Task | undefined
  save(taskDto: TaskDTO): Task
}
