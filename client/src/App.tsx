import { FormEvent, useState } from "react"
import { Plus } from "phosphor-react"
import { white } from "tailwindcss/colors"
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'

import { createTask, getAllTasks } from "./api/task-api"
import { Task } from "./components/Task"

function App() {

  const [parent] = useAutoAnimate()

  const [newTaskTitle, setNewTaskTitle] = useState("")

  const { data, isSuccess } = useQuery(["get-all-tasks"], getAllTasks)
  const queryClient = useQueryClient()
  const createTaskMutation = useMutation({
    mutationFn: createTask,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["get-all-tasks"]
      })
    }
  })

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    createTaskMutation.mutate({ titulo: newTaskTitle.trim(), concluida: false })
    setNewTaskTitle("")
  }

  const tasks = data ? [...data].sort((taskA, taskB) => taskA.concluida > taskB.concluida ? 1 : -1) : undefined
  const hasTasksReady = isSuccess && tasks

  return (
    <main className="w-screen h-screen flex flex-col items-center pt-20 px-10 gap-10">

      <h1 className="bg-gradient-to-r from-emerald-800 to-emerald-400 text-6xl inline-block text-transparent bg-clip-text font-medium">Tasker</h1>
      <h2 className="text-emerald-500 text-1xl inline-block bg-clip-text font-medium">Um lugar para manter suas tarefas em dia</h2>

      <form className="pt-10 w-full flex gap-5 items-center max-w-[600px]" onSubmit={handleSubmit}>
        <input
          className="p-2 bg-white w-full h-11 rounded border-0 outline outline-1 outline-emerald-500 focus:outline-emerald-700 focus:outline-2 placeholder:text-lg text-slate-700"
          placeholder="O que você tem a fazer hoje?"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
        />
        <button className="h-10 w-10 bg-emerald-700 rounded text-3xl text-white flex items-center justify-center text-center">
          <Plus color={white} size={22} />
        </button>
      </form>

      <div
        ref={parent}
        className="w-full max-w-[600px] gap-5 flex flex-col">
        {hasTasksReady ? (
          tasks.map(task =>
            <Task key={task.id} task={task} />
          )
        ) : <div>loading</div>}
      </div>

    </main>
  )
}

export default App
