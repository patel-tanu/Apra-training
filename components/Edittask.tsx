import React, { useState } from "react";
import { View, Text, Alert, TextInput, TouchableOpacity } from "react-native";
import styles from "../styles";

interface EditTaskProps {
  task: { task: string };
// onSave: (newTask: string) => void;
  onSave(newTask:string) : void;
}

const EditTask: React.FC<EditTaskProps> = ({ task, onSave }) => {
  const [newTask, setNewTask] = useState<string>(task.task);

  const handleSave = () => {
    if (newTask.trim()) {
      onSave(newTask.trim());
    } else {
      Alert.alert("Validation Error", "Task cannot be empty!");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={newTask}
        onChangeText={setNewTask}
      />
      <TouchableOpacity onPress={handleSave} style={styles.save}>
        <Text>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EditTask;



