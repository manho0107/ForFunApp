import React from 'react';
import { 
    View,
    Text,
    StyleSheet } from 'react-native';

const Header = ({ title }) => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        height: 70,
        width: '100%',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: '#008080',
    },
    title: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 15,
    },
});

export default Header;

