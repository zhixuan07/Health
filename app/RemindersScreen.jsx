import React, { useState, useEffect,useCallback } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity,Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
const ReminderScreen = ({ navigation }) => {
    const [reminders, setReminders] = useState([]);


        const fetchReminders = async () => {
            try {
                const storedReminders = await AsyncStorage.getItem('reminders');
                if (storedReminders) setReminders(JSON.parse(storedReminders));
            } catch (error) {
                console.error('Failed to fetch reminders', error);
            }
        };

        fetchReminders();

        useFocusEffect(
            useCallback(() => {
                fetchReminders();
            }, [])
        );
    const deleteReminder = async (index) => {
        try {
            const updatedReminders = reminders.filter((_, i) => i !== index);
            setReminders(updatedReminders);
            await AsyncStorage.setItem('reminders', JSON.stringify(updatedReminders));
        } catch (error) {
            console.error('Failed to delete reminder', error);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="arrow-back" size={24} color="#432C81" />
                </TouchableOpacity>
                <Text style={styles.headerText}>Reminders</Text>
            </View>
            {reminders.length === 0 ? (
                <View style={styles.content}>
                    <Image source={require('../assets/images/empty_state.png')} style={styles.noRecordsImage} />
                    <Text style={styles.noRecordsText}>You don't have any records.</Text>
                    <Text style={styles.instructionText}>Click the plus button to add</Text>
                </View>
            ):(
            <FlatList
                style={{ flex: 1, paddingHorizontal: 16, paddingVertical: 8 }}
                data={reminders}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                    <View style={styles.reminderCard}>
                        <View>
                            <Text style={styles.reminderTitle}>{item.title}</Text>
                            <Text style={styles.reminderDetails}>{item.medicine} - {item.dose} dose</Text>
                        </View>
                        <Text style={styles.reminderFrequency}>{item.frequency}</Text>
                        <TouchableOpacity onPress={() => deleteReminder(index)}>
                            <Icon name="trash-outline" size={24} color="#432C81" />
                        </TouchableOpacity>
                    </View>
                )}
            />)}

            <TouchableOpacity
                style={styles.fab}
                onPress={() => navigation.navigate('AddReminder')}
            >
                <Icon name="add" size={24} color="#fff" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2F0F9',
        
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    noRecordsText: {
        fontSize: 18,
        color: '#432C81',
        marginBottom: 10,
    },
    instructionText: {
        fontSize: 16,
        color: '#888',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#432C81',
        marginLeft: 10,
    },
    reminderCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 15,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    reminderTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    reminderDetails: {
        fontSize: 14,
        color: '#888',
    },
    reminderFrequency: {
      fontSize :14 ,
      color :"#888"
   },
   fab:{
     position:"absolute", 
     bottom :30 , 
     right :30 , 
     backgroundColor:"#FFB300", 
     width :56 , 
     height :56 , 
     borderRadius :28 , 
     justifyContent :"center", 
     alignItems :"center"
}
});

export default ReminderScreen;