import { useState, type JSXElementConstructor } from 'react'
import { v4 as uuidv4 } from "uuid";
import dayjs from "dayjs";
import './App.css'

type taskProps={
    id:string,
    name:string
    descript:string,
    createAt:string,
    dueAt:string,
    importance: 1 | 2 | 3 | 4 | 5 | 6 | 7 ;
    complete: 0 | 1
}

function todoList (tasks:Array<taskProps>){
    return<>
        {tasks.map((task:taskProps)=>(
            <div key={task.id} className="bg-white p-4 rounded lg shadow-md">
                <h2 className="text-xl font-bold">{task.name}</h2>
                <p className="text-m font-medium">{task.descript}</p>
                <p className="text-sm text-gray-600">Due to:{task.dueAt}</p>
                <h4 className="text-l text-font-semibold">importance: {task.importance}</h4>
                <h4 className="text-l text-font-semibold">{(task.complete==0?"未完了":"完了")}</h4>
            </div>
        ))}
    </>
}