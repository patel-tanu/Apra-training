import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';

const Keyboard = ({ addTask }) => {
  const [task, setTask] = useState("");

  const handleAddTask = () => {
    if (task.trim()) {
      addTask(task);
      setTask("");
    }
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput 
        style={styles.input}
        placeholder="Add task here"
        value={task} 
        onChangeText={setTask}
      />
      <Icon name="add" size={20} color="black" style={styles.iconStyle} onPress={handleAddTask} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: { flexDirection: 'row', padding: 10, backgroundColor: "white" },
  input: { flex: 1, borderColor: "black", borderWidth: 1, borderRadius: 5 },
  iconStyle: { backgroundColor: '#daa520', padding: 8, borderRadius: 5 },
});

export default Keyboard;
