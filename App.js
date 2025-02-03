import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Task from './components/Task';
import Keyboard from './components/Keyboard';
import { database } from './model/database';

const App = () => {
  const [taskArray, setTaskArray] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const tasksCollection = await database.collections.get('task_table').query().fetch();

      setTaskArray(tasksCollection.map(task => ({
        id: task.id,
        task: task.task,
        isCompleted: task.isCompleted,
      })));
    } catch (error) {
      console.error("Error fetching tasks: ", error);
    }
  };

  const addTask = async (task) => {
    if (task.trim()) {
      try {
        const newTask = await database.write(async () => {
          return await database.collections.get('task_table').create(newTask => {
            newTask.task = task;
            newTask.isCompleted = false;
          });
        });

        setTaskArray(prevTasks => [...prevTasks, { 
          id: newTask.id, 
          task: newTask.task, 
          isCompleted: newTask.isCompleted,
        }]);
      } catch (error) {
        console.error("Error adding task to database: ", error);
      }
    }
  };

  const deleteTask = async (taskId) => {
    try {
      const taskRecord = await database.collections.get('task_table').find(taskId);
      await database.write(async () => {
        await taskRecord.destroyPermanently();
      });

      setTaskArray(prevTasks => prevTasks.filter(task => task.id !== taskId));
    } catch (error) {
      console.error("Error deleting task: ", error);
    }
  };

  const modifyTask = async (taskId, newTask) => {
    
    try {
      await database.write(async () => {
        const taskRecord = await database.collections.get('task_table').find(taskId);
        await taskRecord.update(task => {
          task.task = newTask.task;
          task.isCompleted = newTask.isCompleted;
        });
      });

      setTaskArray(prevTasks =>
        prevTasks.map(task =>
          task.id === taskId ? { ...task, ...newTask } : task
        )
      );
    } catch (error) {
      console.warn("Error modifying task: ", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Let's Do This! </Text>
      <ScrollView>
        {taskArray.map((item) => (
          <Task 
            key={item.id}
            task={item}
            modifyTask={(newTask) => modifyTask(item.id, newTask)}
            deleteTask={() => deleteTask(item.id)}
          />
        ))}
      </ScrollView>
      <Keyboard addTask={addTask} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { backgroundColor: 'gray', flex: 1 },
  title: {
    padding: 20,
    backgroundColor: '#deb887',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default App;
