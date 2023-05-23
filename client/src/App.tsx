import { Task } from "./components/Task"
import { Plus } from "phosphor-react"
import {white} from "tailwindcss/colors"

function App() {

  return (
    <main className="w-screen h-screen flex flex-col items-center pt-20 bg-slate-100 px-10 gap-10">
      <h1 className="bg-gradient-to-r from-slate-800 to-slate-400 text-6xl inline-block text-transparent bg-clip-text font-medium">Tasker</h1>
      <form className="pt-10 w-full flex gap-5 items-center">
        <input
          className="p-2 bg-white w-full h-11 rounded border-0 outline outline-1 outline-slate-300 focus:outline-slate-700 placeholder:text-lg text-slate-700"
          placeholder="O que você tem a fazer hoje?"
        />
        <button className="h-10 w-10 bg-slate-700 rounded text-3xl text-white flex items-center justify-center text-center">
          <Plus color={white} />
        </button>
      </form>
      <div className="w-full max-w-[600px] gap-5 flex flex-col">
        <Task task={{
          id: 1,
          titulo: "Aprender React",
          concluida: true
        }} />
        <Task task={{
          id: 1,
          titulo: "Aprender React",
          concluida: false
        }} />
      </div>
    </main>
  )
}

export default App
