import { database } from "../model/database";
import TaskModel from "../model/Task";
import { TaskType } from "./types";

export const deleteTask = async (taskId: string,setTaskArray: React.Dispatch<React.SetStateAction<TaskType[]>>) => {
    try {
      const taskRecord = await database.collections.get<TaskModel>('task_table').find(taskId);
      await database.write(async () => {
        await taskRecord.destroyPermanently();
      });

      setTaskArray(prevTasks => prevTasks.filter(task => task.id !== taskId));
    } catch (error) {
      console.error("Error deleting task: ", error);
    }
};