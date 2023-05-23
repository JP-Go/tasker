export type Task = {
  id: number,
  titulo: string,
  concluida: boolean
}

export type TaskDTO = {
  titulo: string, 
  concluida?: boolean
}

export type TaskView = Task

