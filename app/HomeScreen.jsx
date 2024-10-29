import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
const HomeStack = createNativeStackNavigator();
const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.greeting}>👋 Hi Julia!</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
                <Image
                    source={ require('../assets/images/profile.png') } // Replace with your image URL
                    style={styles.profileImage}
                />
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.card}  onPress={() => navigation.navigate('MedicalRecord')}>
                <Text style={styles.cardText}>Medical Record</Text>
                <Image
                    source={require('../assets/images/medical_record.png')} 
                    style={styles.cardImage}
                />
            </TouchableOpacity>

            <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Symptons')}>
                <Text style={styles.cardText}>Doctors</Text>
                <Image
                    source={require('../assets/images/doctor.png')} 
                    style={styles.cardImage}
                />
            </TouchableOpacity>

            <TouchableOpacity style={styles.card}onPress={() => navigation.navigate('Reminders')} >
                <Text style={styles.cardText}>Reminder</Text>
                <Image
                    source={require('../assets/images/reminder.png')}
                    style={styles.cardImage}
                />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 16,
        paddingTop: 40,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    greeting: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#432C81',
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    card: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#EDE7F6',
        borderRadius: 10,
        paddingVertical: 20,
        paddingHorizontal: 16,
        marginBottom: 16,
    },
    cardText: {
        fontSize: 18,
        color: '#432C81',
    },
    cardImage: {
        width: 50,
        height: 50,
    },
});

export default HomeScreen;
