import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MainLayout from '../layouts/MainLayout';

function AboutScreen({ }) {
    return (
        <>
        <MainLayout style={styles.container}>
            <View style={styles.footer}>
                <Text>For Fun App</Text>
                <Text>Created by: Felix</Text>
                <Text>Version: 1.0</Text>
            </View>
        </MainLayout>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-between',
    },
    footer: {
        padding: 10, 
        alignItems: 'center',
        marginTop: 450,
    },
  });

export default AboutScreen;

// if error of 'text outside of text component', there may be symbol like ';' or words outside the <text> tag.