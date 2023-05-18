import { Task, TaskDTO } from "../@types/Task"

export class TaskRepository {

  private nextId = 4;
  private tasks: Task[] = [
    { id: 1, titulo: "Aprender React", concluida: true },
    { id: 2, titulo: "Estudar NodeJS", concluida: false },
    { id: 3, titulo: "Praticar Typescript", concluida: false },
  ]
  constructor() { }

  getTaskById(id: number): Task | undefined {
    return this.tasks.find(({ id: taskId }) => taskId === id)
  }

  saveTask(taskDto: TaskDTO): Task {
    const newTask = {
      id: this.nextId++,
      ...taskDto,
      concluida: taskDto.concluida || false
    }
    this.tasks.push(newTask)
    return newTask
  }

  deleteTask(id: number) {
    const taskToDelete = this.tasks.find(({ id: taskId }) => id === taskId)
    if (!taskToDelete) {
      return
    }
    this.tasks = this.tasks.filter(task => task !== taskToDelete)
  }

  updateTask(id: number, taskDto: TaskDTO) {
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
