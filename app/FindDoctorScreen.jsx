import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const doctorsData = [
    {
        id: '1',
        name: 'Dr XXXX',
        experience: '10 Years + Experiences',
        rating: '4.5 Overall Rating',
        hospital: 'Hospital Penang',
        image: require('../assets/images/doctor_avatar.png'),
    },
    // Add more doctor objects as needed
];

const FindDoctorScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="arrow-back" size={24} color="#432C81" />
                </TouchableOpacity>
                <Text style={styles.headerText}>Find Your Doctor</Text>
            </View>

            <View>
                <Text style={{padding:16, fontSize:26, fontWeight:'bold'}}> General Physican Doctors</Text>
            </View>
            <FlatList
            style={{padding: 16}}
                data={doctorsData}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Image source={item.image} style={styles.doctorImage} />
                        <View style={styles.infoContainer}>
                            <Text style={styles.doctorName}>{item.name}</Text>
                            <Text style={styles.doctorDetails}>{item.experience}</Text>
                            <Text style={styles.doctorDetails}>{item.rating}</Text>
                            <Text style={styles.doctorDetails}>{item.hospital}</Text>
                        </View>
                        <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('BookTimeSlot')}>
                            <Text style={styles.buttonText}>Book Appointment</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2F0F9',
       
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        gap: 10,
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#432C81',
        marginLeft: 10,
    },
    card: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
        alignItems: 'center',
    },
    doctorImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
    },
    infoContainer: {
        flex: 1,
        marginLeft: 10,
    },
    doctorName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#432C81',
    },
    doctorDetails: {
        fontSize: 14,
        color: '#888',
    },
    button: {
      backgroundColor:"#432C81", 
      paddingVertical :8 , 
      paddingHorizontal :12 , 
      borderRadius :20 
   },
   buttonText:{
      color :"#fff",
      fontSize :14 
   }
});

export default FindDoctorScreen;