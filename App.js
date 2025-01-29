import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Task from './components/Task';
import Keyboard from './components/Keyboard';

const App = () => {
  const [taskArray, setTaskArray] = useState([]);

  const addTask = (task) => {
    if (task.trim()) {
      setTaskArray([...taskArray, task]);
      // setTask("");
    }
  };

  const handleDelete = (index) =>{
    const updatedTasks = taskArray.filter((_, i) => i != index)
    setTaskArray(updatedTasks);

  };


  const modifyTask =(index, newTask)=>{
    const updateTask = [...taskArray];
    updateTask[index] = newTask;
    setTaskArray(updateTask);
    
  };

  

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Let's Do This! </Text>

      <ScrollView>
        {/* //render via map the array elements */}
        {taskArray.map((item, index) => {
          return <Task task={item}  index={index} modifyTask={modifyTask} deleteTask ={handleDelete}/>;
        })}
      </ScrollView>

      <Keyboard addTask={addTask} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gray',
    flex: 1,
  },
  title: {
    padding: 20,
    backgroundColor: '#deb887',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 50,
  },
});

export default App;
