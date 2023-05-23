import axios from 'axios'
import { Task, TaskDTO } from '../@types/Task'

const api = axios.create({
  baseURL: "http://localhost:4000/tasks",
})

export async function getAllTasks() {
  const { data } = await api.get<Task[]>('/')
  return data
}

export async function getTask(id: number) {
  const { data } = await api.get<Task>(`/${id}`)
  return data
}

export async function updateTask(id: number, taskDto: TaskDTO) {
  const { data } = await api.patch<Task, { data: TaskDTO }>(`/${id}`,
    taskDto
  )
  return data
}

export async function deleteTask(id: number) {
  const { data } = await api.delete(`/${id}`)
  return data
}

export async function createTask(taskDto: TaskDTO) {
  await api.post<Task, { data: TaskDTO }>('/', taskDto)
}
