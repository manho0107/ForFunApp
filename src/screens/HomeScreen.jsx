import React, { useState } from 'react';
import { SafeAreaView, Button, StyleSheet, View } from 'react-native';
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
        console.log('Adding task:', newTask); // check if handleAdd is called
        setTasks(prevTasks => {
          console.log('Current tasks:', prevTasks); // check current tasks
          return [...prevTasks, newTask]; // add the new task
        });
      };
      

    return (
        <>
            <MainLayout>
                <SafeAreaView>
                    <ToDoList tasks={tasks}/>
                    <ToDoForm onAdd={handleAdd} tasks={tasks}/>
                        <View style={styles.container}>
                            <Button
                                title="Go to About Page"
                                onPress={() => navigation.navigate('AboutScreen')}
                            />
                        </View>
                </SafeAreaView>
            </MainLayout>
        </>
    );

}

    const styles = StyleSheet.create({
        container: {
            marginTop: 270,
        },
    });

export default HomeScreen;

// .navigate is a method for navigation