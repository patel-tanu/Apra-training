import React, { useState } from "react";
import { View, TextInput } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import styles from "../styles";

interface KeyboardProps {
  // addTask: (task: string) => void;
  addTask(task:string) : void;
}

const Keyboard: React.FC<KeyboardProps> = ({ addTask }) => {
  const [task, setTask] = useState<string>("");

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
      <Icon
        name="add"
        size={22}
        color="black"
        style={styles.iconStyle}
        onPress={handleAddTask}
      />
    </View>
  );
};

export default Keyboard;
