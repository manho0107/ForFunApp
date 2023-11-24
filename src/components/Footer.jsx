import React from 'react';
import {
    View, 
    Text, 
    StyleSheet } from 'react-native';

const Footer = () => {
    return (
        <View style={styles.footer}>
            <Text style={styles.text}>Created by Felix Cheung</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    footer: {
        height: 50,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#008080',
    },
    text: {
        color: '#FFFFFF',
    },
});

export default Footer;