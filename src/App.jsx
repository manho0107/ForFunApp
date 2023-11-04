/**
 * My For Fun App
 *
 * @format
 */

import React, { useState} from 'react';
import {
  SafeAreaView,
} from 'react-native';

import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';

function App() {
  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog',
    'Study'
  ]);

  const handleAdd = (newTask) => {
    //setTasks(tasks.concat(newTask))
    //.push can just add number 
    setTasks([...tasks, newTask])
  };

  return (
    <SafeAreaView>
      <ToDoList tasks={tasks}/>
      <ToDoForm onAdd={handleAdd} tasks={tasks}/>
    </SafeAreaView>
  );
}


export default App;
