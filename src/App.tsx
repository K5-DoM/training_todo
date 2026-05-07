import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import  TodoList  from './components/TodoList'
import type { Task } from './types'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const tmp1:Task = {
    id:"0000",
    name:"tmp1",
    createAt:"2026-01-01-00:00:00",
    descript:"てすと",
    dueAt:null,
    importance:1,
    complete:0
  }
    const tmp2:Task = {
    id:"0002",
    name:"tmp1",
    createAt:"2026-01-01-00:00:00",
    descript:"test",
    dueAt:null,
    importance:2,
    complete:1
  }
  const testarray:Array<Task>=[tmp1,tmp2]
  return (
      <section id="center">
        <TodoList tasks={testarray}/>
      </section>
  )
}

export default App
