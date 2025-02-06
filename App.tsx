import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import Task from './components/Task';
import Keyboard from './components/Keyboard';
import styles from './styles';
import { TaskType } from './helpers/types';
import { fetchTasks } from './helpers/fetchTask';
import { addTask } from './helpers/addTask';
import { deleteTask } from './helpers/deleteTask';
import { modifyTask } from './helpers/modifyTask';

const App = () => {
  const [taskArray, setTaskArray] = useState<TaskType[]>([]);

  useEffect(() => {
    fetchTasks(setTaskArray);
  }, []);

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}> Let's Do This! </Text>
      <ScrollView>
        {taskArray.map((item) => (
          <Task 
            key={item.id}
            task={item}
            modifyTask={(id, newTask) => modifyTask(id, newTask, setTaskArray)}
            deleteTask={() => deleteTask(item.id, setTaskArray)}
          />
        ))}
      </ScrollView>
      <Keyboard addTask={(task) => addTask(task, setTaskArray)} />
    </View>
  );
};

export default App;
