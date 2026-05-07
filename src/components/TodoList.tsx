import type { FunctionComponent } from 'react'
import { v4 as uuidv4 } from "uuid";
import dayjs from "dayjs";
import type {Task} from "../types"
import '../App.css'


function OneTodo({task}:{task:Task}){
    return <>
        <div key={task.id} className="bg-white p-4 rounded lg shadow-md">
            <h2 className="text-xl font-bold">{task.name}</h2>
            <p className="text-m font-medium">{task.descript ? task.descript : ""}</p>
            <p className="text-sm text-gray-600">Due to:{task.dueAt ? task.dueAt : "nothing"}</p>
            <h4 className="text-l text-font-semibold">importance: {task.importance}</h4>
            <h4 className="text-l text-font-semibold">{(task.complete==0?"未完了":"完了")}</h4>
        </div>
    </>
}

export default function TodoList({tasks}:{tasks:Task[]}) {
    return<div>
        {tasks.map((task:Task)=>(
            <OneTodo task={task} />
        ))}
    </div>
}