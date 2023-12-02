import React, { useState } from 'react';
import { SafeAreaView, Button, StyleSheet, View } from 'react-native';
import ToDoList from '../components/ToDoList';
import ToDoForm from '../components/ToDoForm';
import MainLayout from '../layouts/MainLayout';
import ChuckNorrisFact from '../ChuckNorrisFact';
import { ScrollView } from 'react-native-gesture-handler';

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
                <SafeAreaView style={styles.safeArea}>
                    <View style={{ flex: 1 }}>
                        <ScrollView style={{ flex: 1 }}>
                            <ToDoList tasks={tasks}/>
                            <ToDoForm onAdd={handleAdd} tasks={tasks}/>
                            <ChuckNorrisFact />
                        </ScrollView>
                            <View style={styles.container}>
                                <Button
                                    title="Go to About Page"
                                    onPress={() => navigation.navigate('AboutScreen')}
                                />
                            </View>
                    </View>
                </SafeAreaView>
            </MainLayout>
        </>
    );

}

    const styles = StyleSheet.create({
        safeArea: {
            flex: 1,
            justifyContent: 'space-between'
        },
        container: {
            position: 'absolute',
            bottom: 0,
            width: '100%',
        },
    });

export default HomeScreen;

// .navigate is a method for navigation