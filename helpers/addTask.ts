import { database } from "../model/database";
import TaskModel from "../model/Task";
import { TaskType } from "./types";

export const addTask = async(task:string, setTaskArray: React.Dispatch<React.SetStateAction<TaskType[]>>) =>{
    if(task.trim()){
        try{
            const newTask = await database.write(async () =>{
                return await database.collections.get<TaskModel>('task_table').create((newTask:TaskModel)=>{
                    newTask.task = task;
                    newTask.isCompleted = false;
                });
            });

            setTaskArray(prevTasks =>[...prevTasks,{
                id:newTask.id,
                task:newTask.task,
                isCompleted:newTask.isCompleted
            }])
        }catch(error){
            console.error("Error adding task to database: ", error);
        }
    }
};