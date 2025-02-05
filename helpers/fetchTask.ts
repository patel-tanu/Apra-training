import { database } from "../model/database";
import TaskModel from "../model/Task";
import { TaskType } from "./types";



export const fetchTasks = async (setTaskArray: React.Dispatch<React.SetStateAction<TaskType[]>>) => {
    // try {
    //   const tasksCollection = await database.collections.get<TaskModel>('task_table').query().fetch();

    //   return (tasksCollection.map((task) => ({
    //     id: task.id,
    //     task: task.task,
    //     isCompleted: task.isCompleted,
    //   })));
    // } catch (error) {
    //   console.error("Error fetching tasks: ", error);
    // }

    try {
          const tasksCollection = await database.collections.get<TaskModel>('task_table').query().fetch();
    
          setTaskArray(tasksCollection.map((task) => ({
            id: task.id,
            task: task.task,
            isCompleted: task.isCompleted,
          })));
        } catch (error) {
          console.error("Error fetching tasks: ", error);
    }
  };
