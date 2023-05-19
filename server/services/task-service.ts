import { Task, TaskDTO } from "../@types/Task";
import { ITaskRepository } from "../repositories/itask-repository";
import { ITaskService } from "./itask-service";

export class TaskService implements ITaskService {

  constructor(private readonly taskRepository: ITaskRepository){}

  getById(id: number): Task {
    const task = this.taskRepository.getById(id)
    if (task === undefined){
      throw new TaskNotFoundError(`Task with id ${id} was not found`);
    }
    return task
  }

  delete(id: number): void {
    const task = this.getById(id)
    if (task === undefined){
      throw new TaskNotFoundError(`Task with id ${id} does not exists`);
    }
    this.taskRepository.delete(task.id)
  }

  update(id: number, taskDto: TaskDTO): Task {
    const task = this.getById(id)
    if (task === undefined){
      throw new TaskNotFoundError(`Task with id ${id} does not exists`);
    }
    return this.taskRepository.update(task.id,taskDto)!
  }
  save(taskDto: TaskDTO): Task {
    return this.taskRepository.save(taskDto)
  }
}
