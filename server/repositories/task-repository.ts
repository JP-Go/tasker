import { Task, TaskDTO } from "../@types/Task"
import { ITaskRepository } from "./itask-repository";

export class TaskRepository implements ITaskRepository {

  private nextId = 4;
  private tasks: Task[] = [
    { id: 1, titulo: "Aprender React", concluida: true },
    { id: 2, titulo: "Estudar NodeJS", concluida: false },
    { id: 3, titulo: "Praticar Typescript", concluida: false },
  ]
  constructor() { }

  getById(id: number): Task | undefined {
    return this.tasks.find(({ id: taskId }) => taskId === id)
  }

  save(taskDto: TaskDTO): Task {
    const newTask = {
      id: this.nextId++,
      ...taskDto,
      concluida: taskDto.concluida || false
    }
    this.tasks.push(newTask)
    return newTask
  }

  delete(id: number): void {
    const taskToDelete = this.tasks.find(({ id: taskId }) => id === taskId)
    if (!taskToDelete) {
      return
    }
    this.tasks = this.tasks.filter(task => task !== taskToDelete)
  }

  update(id: number, taskDto: TaskDTO): Task | undefined {
    const taskIndex = this.tasks.findIndex(({ id: taskId }) => taskId === id)
    if (taskIndex < 0)
      return
    this.tasks[taskIndex] = {
      ...this.tasks[taskIndex],
      ...taskDto
    }
    return this.tasks[taskIndex]
  }

}
