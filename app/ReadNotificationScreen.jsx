import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ReadNotificationScreen = ({ route, navigation }) => {
    const { id, title, description,read } = route.params;

    const markAsRead = async () => {
        try {
            const storedNotifications = await AsyncStorage.getItem('notifications');
            const notifications = JSON.parse(storedNotifications);
            const updatedNotifications = notifications.map((notification) => {
                if (notification.id === id) {
                    return { ...notification, read: true };
                }
                return notification;
            });
            console.log(updatedNotifications);
            await AsyncStorage.setItem('notifications', JSON.stringify(updatedNotifications));
            navigation.goBack();
        } catch (error) {
            console.error('Failed to update notification', error);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="arrow-back" size={24} color="#432C81" />
                </TouchableOpacity>
                <Text style={styles.headerText}>Notification</Text>
            </View>

            <View style={styles.content}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.description}>{description}</Text>
            </View>
            {!read &&
                 <TouchableOpacity style={styles.readButton} onPress={markAsRead}>
                 <Text style={styles.readButtonText}>Mark as Read</Text>
             </TouchableOpacity>
            }
           
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
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#432C81',
        marginLeft: 10,
    },
    content: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        marginBottom: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#432C81',
        marginBottom: 10,
    },
    description: {
      fontSize :16 ,
      color :"#333"
   },
   readButton:{
    position:"absolute",
    bottom :20 ,
    left :16 ,
    right :16 ,
    backgroundColor:"#432C81", 
    paddingVertical :10 , 
    borderRadius :25 , 
    alignItems :"center", 
    justifyContent :"center"
},
readButtonText:{
     color :"#fff",
     fontSize :16 ,
     fontWeight :"bold"
}
});

export default ReadNotificationScreen;