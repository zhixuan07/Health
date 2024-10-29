import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DetailsScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Details Screen</Text>
            <Text>This is where details will be shown.</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default DetailsScreen;
