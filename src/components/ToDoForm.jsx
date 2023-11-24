import React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Button
} from 'react-native';
import { useState } from 'react';
import PropTypes from 'prop-types';

function ToDoForm({ onAdd = () => {}, tasks = [] }) {
  const [taskText, setTaskText] = useState('');


  const handleAdd = () => {
    console.log(onAdd); // log to see what onAdd currently is
    if (tasks.includes(taskText)) {
      alert('Entered word(s) is duplicated.');
      return;
    }
    if (typeof onAdd === 'function') {
      onAdd(taskText);
      setTaskText('');
    } else {
      console.error('onAdd is not a function', onAdd);
    }
  }
    
  /*const handleAdd = () => {
    if (tasks.includes(taskText)) {
      alert('Entered word(s) is duplicated.');
      return;
    }
    onAdd(taskText);
    setTaskText(''); // reset the taskText state to clear the entered text in the text box
  }*/
  // used in previously submission, not for this time

  ToDoForm.propTypes = {
    tasks: PropTypes.array.isRequired,
    onAdd: PropTypes.func.isRequired,
  };

  return (
    <>
    <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Add a new task..."
          onChangeText={(text) => setTaskText(text)}
          value={taskText}
        />
        <Button title="Add" onPress={handleAdd}/>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
    form: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginHorizontal: 20,
      marginTop: 20,
    },
    input: {
      flex: 1,
      borderWidth: 1,
      borderColor: '#ccc',
      paddingHorizontal: 10,
      paddingVertical: 5,
      marginRight: 10,
    },
  });

export default ToDoForm;