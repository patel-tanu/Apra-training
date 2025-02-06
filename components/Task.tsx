
import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import Edittask from "./Edittask";
import styles from '../styles';
import { TaskType } from "../helpers/types";

interface TaskProps {
  task: TaskType;
  modifyTask: (id:string, newTask: TaskType) => void;
  deleteTask: () => void;
}

const Task: React.FC<TaskProps> = ({ task, modifyTask, deleteTask }) => {
  const [isEditing, setIsEditing] = useState(false);

  const toggleCompleted = () => {
    modifyTask(task.id,{ ...task, isCompleted: !task.isCompleted });
  };

  const handleSave = (newTask: string) => {
    modifyTask(task.id,{ ...task, task: newTask });
    setIsEditing(false);
  };

  return (
    <View style={styles.items}>
      {isEditing ? (
        <Edittask task={task} onSave={handleSave} />
      ) : (
        <>
          <TouchableOpacity 
            onPress={toggleCompleted} 
            style={[styles.circle, task.isCompleted && styles.taskCompleted]}
          >
            {task.isCompleted ? (<Icon name="check" size={15} color="black" />) : null}
          </TouchableOpacity>

          <Text style={[styles.text_task, task.isCompleted && styles.completedtext]}>
            {task.task}
          </Text>

          <View style={styles.button}>
            <TouchableOpacity onPress={deleteTask}>
              <Icon name="delete" size={20} color="black" />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setIsEditing(true)}>
              <Icon name="edit" size={20} color="black" />
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
};

export default Task;
