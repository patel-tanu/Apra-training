import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import Edittask from "./Edittask";

const Task = ({ task, modifyTask, deleteTask }) => {
  const [isEditing, setIsEditing] = useState(false);

  const toggleCompleted = async () => {
    modifyTask({ ...task, isCompleted: !task.isCompleted });
  };

  const handleSave = (newTask) => {
    modifyTask({ ...task, task: newTask });
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
            style={[styles.circle, task.isCompleted && styles.taskCompleted ]}
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

const styles = StyleSheet.create({
  text_task: { fontSize: 16, marginRight: 15, marginLeft: 15, flexShrink: 1 },
  items: { backgroundColor: "white", margin: 10, flexDirection: 'row', padding: 10, alignItems: 'center', borderRadius: 10 },
  circle: { height: 20, width: 20, borderColor: 'green', borderRadius: 15, borderWidth: 2, justifyContent: 'center', alignItems: 'center' },
  taskCompleted: { backgroundColor: 'red' },
  completedtext: { textDecorationLine: 'line-through', color: 'lightgray' },
  button: { marginLeft: 'auto', flexDirection: 'row' },
});

export default Task;
