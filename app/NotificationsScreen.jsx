import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

const NotificationScreen = ({ navigation }) => {
    const [notifications, setNotifications] = useState([]);

    const loadNotifications = async () => {
        const defaultNotifications = [
            { id: '1', title: 'Upcoming Appointment', description: 'Lorem ipsum dolor sit amet, consectetur', read: false },
            { id: '2', title: 'Medical Reminder', description: 'Lorem ipsum dolor sit amet, consectetur', read: false },
            { id: '3', title: 'Notification Title', description: 'Lorem ipsum dolor sit amet, consectetur', read: true },
            { id: '4', title: 'Notification Title', description: 'Lorem ipsum dolor sit amet, consectetur', read: true },
        ];
        try {
            const storedNotifications = await AsyncStorage.getItem('notifications');
            if (storedNotifications) {
                setNotifications(JSON.parse(storedNotifications));
            } else {
                await AsyncStorage.setItem('notifications', JSON.stringify(defaultNotifications));
                setNotifications(defaultNotifications);
            }
        } catch (error) {
            console.error('Failed to load notifications', error);
        }
    };

    useFocusEffect(
        useCallback(() => {
            loadNotifications();
        }, [])
    );

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Notifications</Text>
            <FlatList
                data={notifications}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={[
                            styles.notificationCard,
                            item.read && styles.readNotification,
                        ]}
                        onPress={() => navigation.navigate('ReadNotification', { id: item.id, title: item.title, description: item.description,read:item.read })}
                    >
                        <View style={styles.dotContainer}>
                            <View style={[styles.dot, item.read ? styles.dotRead : styles.dotUnread]} />
                        </View>
                        <View>
                            <Text style={styles.notificationTitle}>{item.title}</Text>
                            <Text style={styles.notificationDescription}>{item.description}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2F0F9',
        paddingHorizontal: 16,
        paddingTop: 10,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#432C81',
        marginBottom: 20,
    },
    notificationCard: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingVertical: 15,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    dotContainer:{
      width :30 ,
      alignItems :"center"
   },
   dot:{
      width :8 ,
      height :8 ,
      borderRadius :4 
   },
   dotUnread:{
      backgroundColor :"#432C81"
   },
   dotRead:{
      backgroundColor :"#ccc"
   },
   notificationTitle:{
      fontSize :16 ,
      fontWeight :"bold",
      color :"#432C81"
   },
   notificationDescription:{
      fontSize :14 ,
      color :"#888"
   },
   readNotification:{
     opacity :0.6 
}
});

export default NotificationScreen;