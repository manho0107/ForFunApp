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

  return (
    <SafeAreaView>
      <ToDoList tasks={tasks}/>
      <ToDoForm />
    </SafeAreaView>
  );
}


export default App;
