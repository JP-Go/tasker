import { Trash } from "phosphor-react"
import { TaskDTO, Task as TaskType } from "../@types/Task"
import { TaskCheckbox } from "./TaskCheckbox"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteTask, updateTask } from "../api/task-api"
import colors from 'tailwindcss/colors'
import { FormEvent, useRef, useState } from "react"

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

  function handleChangeTaskTitle(e: FormEvent) {
    e.preventDefault()
    updateTaskMutation.mutate({
      titulo: title,
      concluida: task.concluida
    })
    inputRef.current?.blur()
  }

  function toggleTaskCompletion(newState: boolean) {
    updateTaskMutation.mutate({
      titulo: title,
      concluida: newState
    })
  }

  return (
    <div
      className="w-full h-12 p-px text-emerald-800 bg-gradient-to-r from-emerald-800 to-emerald-400 rounded-md shadow flex place-items-center"
    >
      <form
        className="flex justify-between items-center flex-1 bg-white rounded h-full p-2"
        onSubmit={handleChangeTaskTitle}>

        <input
          ref={inputRef}
          className={`flex-1 outline-none ${task.concluida ? "line-through" : ""}`} value={title} onChange={(e) => setTitle(e.target.value)} />

        <div className="flex gap-2 items-center h-full">
          <TaskCheckbox checked={task.concluida} clickHandle={toggleTaskCompletion} />
          <Trash 
            className="px-2 rounded inline-block cursor-pointer transition-transform hover:scale-125 active:scale-90" 
            size={40} 
            color={colors["emerald"]["500"]} weight="bold"
            onClick={() => deleteTaskMutation.mutate(task.id)}
          />
        </div>
      </form>

    </div>
  )

}
