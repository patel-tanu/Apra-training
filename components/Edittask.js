import React, { useState } from "react";
import { View,Text, Alert, TextInput, TouchableOpacity, StyleSheet } from "react-native";

const Edittask = ({ task, onSave }) => {
  const [newTask, setNewTask] = useState(task.task);

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

const styles = StyleSheet.create({
  container: { flexDirection: 'row', alignItems: 'center' },
  input: { borderColor: 'black', borderWidth: 1, flex: 1, padding: 5 },
  save: { backgroundColor: '#d2691e', padding: 5, borderRadius: 5, marginLeft: 5 },
});

export default Edittask;
