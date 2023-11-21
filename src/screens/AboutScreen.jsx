import React from 'react';
import { View, Text } from 'react-native';

function AboutScreen({ }) {
    return (
        <>
            <View>
                <Text>For Fun App</Text>
                <Text>Created by: Felix</Text>
                <Text>Version: 1.0</Text>
            </View>
        </>
    );
}

export default AboutScreen;

// if error of 'text outside of text component', there may be symbol like ';' or words outside the <text> tag.