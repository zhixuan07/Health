import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const SplashScreen = ({ title, navigationName, navigation }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate(navigationName)}>
            <Image style={styles.image} source={require('../assets/images/splash.png')} />
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>Tap the screen to continue</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#432C81',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: '#888',
    },
    image:{
        height:200,
        width:200,
    }
});

export default SplashScreen;