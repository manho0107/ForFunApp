import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

const ChuckNorrisFact = ({ }) => {
    const [fact, setFact] = React.useState();
    const fetchFact = async () => {
        const response = await fetch('https://api.chucknorris.io/jokes/random');
        const parsed = await response.json();
        
        const newFact = parsed.value;
        //const { value: fact } = parsed;

        console.log(newFact);
        setFact(newFact);
    };
    React.useEffect(() => {
        fetchFact();

        console.log('here');
    }, []);

    const handleRefresh = () => {
        fetchFact();
    }

    return  (
        <>
            <View style={{ marginHorizontal:10, marginVertical: 10}}>
                <View style={styles.button}>
                    <Button title='Refresh' onPress={handleRefresh} />
                </View>
                <Text style={{ fontSize: 20 }}>{fact}</Text>
            </View>
        </>
    );
}

    const styles = StyleSheet.create({
        button: {
            marginTop: 10,
            marginBottom: 10,
        },
    });

export default ChuckNorrisFact;