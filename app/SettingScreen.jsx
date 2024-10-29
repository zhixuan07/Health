import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const SettingsScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Settings</Text>

            <View style={styles.profileContainer}>
                <Image source={require('../assets/images/profile.png')} style={styles.profileImage} />
                <TouchableOpacity style={styles.editIcon}>
                    <Icon name="pencil" size={18} color="#fff" />
                </TouchableOpacity>
                <Text style={styles.profileName}>Julia Mario</Text>
                <Text style={styles.profileEmail}>juliamario@mail.com</Text>
            </View>

            <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Account')}>
                <Icon name="person-outline" size={24} color="#432C81" />
                <Text style={styles.menuText}>Account</Text>
                <Icon name="chevron-forward" size={24} color="#432C81" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Notification')}>
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
     borderBottomWidth :1 , 
     borderBottomColor :"#ddd"
},
menuText:{
     fontSize :16 ,
     color :"#432C81",
     marginLeft :10
}
});

export default SettingsScreen;