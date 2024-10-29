import React, { useState, useEffect ,} from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AccountScreen = ({ navigation }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    useEffect(() => {
        const loadProfile = async () => {
            try {
                const storedProfile = await AsyncStorage.getItem('profile');
                if (storedProfile) {
                    const profile = JSON.parse(storedProfile);
                    setName(profile.name);
                    setEmail(profile.email);
                    setPhoneNumber(profile.phoneNumber);
                }
            } catch (error) {
                console.error('Failed to load profile', error);
            }
        };

        loadProfile();
    }, []);

    const saveProfile = async () => {
        try {
            const profile = { name, email, phoneNumber };
            await AsyncStorage.setItem('profile', JSON.stringify(profile));
            navigation.goBack();
        } catch (error) {
            console.error('Failed to save profile', error);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="arrow-back" size={24} color="#432C81" />
                </TouchableOpacity>
                <Text style={styles.headerText}>Account</Text>
            </View>

            <View style={styles.profileContainer}>
                <Image source={require('../assets/images/profile.png')} style={styles.profileImage} />
            </View>

            <Text style={styles.label}>Name</Text>
            <TextInput
                style={styles.input}
                placeholder="Placeholder"
                value={name}
                onChangeText={setName}
            />

            <Text style={styles.label}>Email</Text>
            <TextInput
                style={styles.input}
                placeholder="Placeholder"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />

            <Text style={styles.label}>Phone Number</Text>
            <TextInput
                style={styles.input}
                placeholder="Placeholder"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                keyboardType="phone-pad"
            />

            <TouchableOpacity style={styles.updateButton} onPress={saveProfile}>
                <Text style={styles.updateButtonText}>Save</Text>
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
   profileImage:{
        width :100 ,
        height :100 ,
        borderRadius :50 
   },
    profileContainer:{
          alignItems :"center",
          marginBottom :20
    },
    label: {
        fontSize: 16,
        color: '#432C81',
        marginBottom: 8,
    },
    input: {
      height :40 ,
      borderColor :"#ddd",
      borderWidth :1 ,
      borderRadius :5 ,
      marginBottom :20 ,
      paddingHorizontal :10 
   },
   updateButton:{
     position:"absolute",
     bottom :20 ,
     left :16 ,
     right :16 ,
     backgroundColor:"#432C81", 
     paddingVertical :15 , 
     borderRadius :25 , 
     alignItems :"center", 
     justifyContent :"center"
},
updateButtonText:{
     color :"#fff",
     fontSize :16 ,
     fontWeight :"bold"
}
});

export default AccountScreen;