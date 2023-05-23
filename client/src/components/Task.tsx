import { Trash } from "phosphor-react"
import { TaskDTO, Task as TaskType } from "../@types/Task"
import { TaskCheckbox } from "./TaskCheckbox"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteTask, updateTask } from "../api/task-api"
import colors from 'tailwindcss/colors'
import { useRef, useState } from "react"

interface TaskProps {
  task: TaskType,
}

export function Task({ task }: TaskProps) {
  const queryClient = useQueryClient()

  const [title, setTitle] = useState(task.titulo)
  const inputRef = useRef<HTMLInputElement>(null)

  const updateTaskMutation = useMutation({
    mutationFn: (taskDto: TaskDTO) => updateTask(task.id, taskDto),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["get-all-tasks"]
      })
    }
  })

  const deleteTaskMutation = useMutation({
    mutationFn: deleteTask,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["get-all-tasks"]
      })
    }
  })

  return <form
    className="w-full h-12 p-2 text-slate-700 bg-white rounded-md shadow border border-slate-300 flex justify-between items-center"
    onSubmit={(e) => {
      e.preventDefault()
      updateTaskMutation.mutate({
        titulo: title,
        concluida: task.concluida
      })
      inputRef.current?.blur()
    }}>
    <input
      ref={inputRef}
      className={`flex-1 ${task.concluida ? "line-through" : ""}`} value={title} onChange={(e) => setTitle(e.target.value)} />
    <div className="flex gap-2 items-center h-full ">
      <TaskCheckbox checked={task.concluida} clickHandle={(newState: boolean) => {
        updateTaskMutation.mutate({
          titulo: title,
          concluida: newState
        })
      }} />
      <Trash className="px-2 rounded inline-block cursor-pointer" size={40} color={colors["red"]["500"]} weight="bold"
        onClick={() => deleteTaskMutation.mutate(task.id)}
      />
    </div>
  </form>
}
