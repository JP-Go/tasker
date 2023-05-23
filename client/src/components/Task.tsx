import { Trash } from "phosphor-react"
import { Task as TaskType } from "../@types/Task"
import { TaskCheckbox } from "./TaskCheckbox"
import colors from 'tailwindcss/colors'

interface TaskProps {
  task: TaskType,
}

export function Task({ task }: TaskProps) {
  return <form className="w-full h-12 p-2 text-slate-700 bg-white rounded-md shadow border border-slate-300 flex justify-between items-center">
    <input className={`flex-1 ${task.concluida ? "line-through" : ""}`} value={task.titulo} />
    <div className="flex gap-2 items-center h-full ">
      <TaskCheckbox completed={task.concluida} clickHandle={() => { }} />
      <Trash className="px-2 rounded inline-block" size={40} color={colors["red"]["500"]} weight="bold" />
    </div>
  </form>
}
