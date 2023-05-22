function App() {

  return (
    <main className="w-screen h-screen flex flex-col items-center pt-20 bg-slate-100 px-10">
      <h1 className="bg-gradient-to-r from-slate-800 to-slate-400 text-6xl inline-block text-transparent bg-clip-text font-medium">Tasker</h1>
      <form className="pt-10 w-full flex gap-5">
        <input 
          className="p-2 bg-white w-full h-11 rounded border border-slate-700 placeholder:text-lg text-slate-700"
          placeholder="O que você tem a fazer hoje?"
          />
        <button className="h-11 w-11 bg-slate-700 rounded text-3xl text-white flex items-center justify-center text-center">+</button>
      </form>
    </main>
  )
}

export default App
