import React, { useState,  useCallback } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
const SettingsScreen = ({ navigation }) => {
    const [profile, setProfile] = useState({ name: '', email: '' ,phone:''});

    const loadProfile = async () => {
        try {
            const storedProfile = await AsyncStorage.getItem('profile');
            if (storedProfile) {
                setProfile(JSON.parse(storedProfile));
            }
        } catch (error) {
            console.error('Failed to load profile', error);
        }
    };
    useFocusEffect(
        useCallback(() => {
            loadProfile();
        }, [])
    );

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Settings</Text>

            <View style={styles.profileContainer}>
                <Image source={require('../assets/images/profile.png')} style={styles.profileImage} />
             
                <Text style={styles.profileName}>{profile.name }</Text>
                <Text style={styles.profileEmail}>{profile.email }</Text>
            </View>

            <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Account')}>
                <Icon name="person-outline" size={24} color="#432C81" />
                <Text style={styles.menuText}>Account</Text>
                <Icon name="chevron-forward" size={24} color="#432C81" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Notifications')}>
                <Icon name="notifications-outline" size={24} color="#432C81" />
                <Text style={styles.menuText}>Notification</Text>
                <Icon name="chevron-forward" size={24} color="#432C81" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('PrivacySecurity')}>
                <Icon name="shield-checkmark-outline" size={24} color="#432C81" />
                <Text style={styles.menuText}>Privacy & Security</Text>
                <Icon name="chevron-forward" size={24} color="#432C81" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 16,
        paddingTop: 10,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#432C81',
        marginBottom: 20,
    },
    profileContainer: {
        alignItems: 'center',
        marginBottom: 30,
    },
    profileImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
    },
    editIcon: {
        position: 'absolute',
        bottom: 0,
        right: 120,
        backgroundColor: '#432C81',
        borderRadius: 15,
        padding: 4,
    },
    profileName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#432C81',
        marginTop: 10,
    },
    profileEmail: {
      fontSize :14 ,
      color :"#888"
   },
   menuItem:{
     flexDirection:"row", 
     alignItems:"center", 
     justifyContent:"space-between", 
     paddingVertical :15 , 
  
},
menuText:{
     fontSize :16 ,
     color :"#432C81",
     marginLeft :10
}
});

export default SettingsScreen;