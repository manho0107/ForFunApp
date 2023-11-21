import React from 'react';
import { SafeAreaView, Button } from 'react-native';

import ToDoList from '../components/ToDoList';
import ToDoForm from '../components/ToDoForm';
import MainLayout from '../layouts/MainLayout';

function HomeScreen({ navigation }) {
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
        <>
            <SafeAreaView>
                <ToDoList tasks={tasks}/>
                <ToDoForm handleAdd={handleAdd}/>
                    <Button
                        title="Go to About Page"
                        onPress={() => navigation.navigate('AboutScreen')}
                    />
            </SafeAreaView>
        </>
    );
}

export default HomeScreen;

// .navigate is a method for navigation