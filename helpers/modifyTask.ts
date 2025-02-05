import { database } from "../model/database";
import TaskModel from "../model/Task";
import { TaskType } from "./types";


export const modifyTask = async (taskId:string, newTask:TaskType, setTaskArray: React.Dispatch<React.SetStateAction<TaskType[]>>) =>{
    try{
        await database.write(async () =>{
            const taskToUpdate = await database.collections.get<TaskModel>('task_table').find(taskId);
            taskToUpdate.update((task: TaskModel) =>{
                task.task = newTask.task,
                task.isCompleted = newTask.isCompleted
            });
        });

        setTaskArray(prevTasks =>
            prevTasks.map(task => 
                task.id === taskId ? {...task, ...newTask} : task
            )
        );


    }catch(error){
        console.error("Error modifying task: ", error);
    }
};