import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const CompleteBookingScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="arrow-back" size={24} color="#432C81" />
                </TouchableOpacity>
                <Text style={styles.headerText}>Complete Appointment</Text>
            </View>

            <View style={styles.content}>
                <Image source={require('../assets/images/doctor_avatar.png')} style={styles.doctorImage} />
                <View style={styles.infoContainer}>
                    <Text style={styles.doctorName}>Dr XXXX</Text>
                    <Text style={styles.doctorDetails}>10 Years + Experiences</Text>
                    <Text style={styles.doctorDetails}>4.5 Overall Rating</Text>
                    <Text style={styles.doctorDetails}>Hospital Penang</Text>
                </View>
            </View>

            <View style={styles.appointmentDetails}>
                <View style={styles.detailRow}>
                    <Icon name="time-outline" size={20} color="#432C81" />
                    <Text style={styles.detailText}>Appointment Time</Text>
                </View>
                <Text style={styles.detailValue}>29 Oct, Tuesday, 11:00 AM</Text>

                <View style={styles.detailRow}>
                    <Icon name="location-outline" size={20} color="#432C81" />
                    <Text style={styles.detailText}>Clinic Details</Text>
                </View>
                <Text style={styles.detailValue}>1552, Mac Road, Tom City</Text>
            </View>

            <TouchableOpacity style={styles.confirmButton} onPress={()=> navigation.navigate('CompletedBookingSplash')}>
                <Text style={styles.confirmButtonText}>Confirm</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 16,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#432C81',
        marginLeft: 10,
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
    },
    doctorImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
    },
    infoContainer: {
        marginLeft: 15,
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
    appointmentDetails: {
        borderTopWidth: 1,
        borderTopColor: '#ddd',
        paddingTop: 20,
    },
    detailRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    detailText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#432C81',
        marginLeft: 5,
    },
    detailValue:{
      fontSize :14 ,
      color :"#888",
      marginBottom :15 
   },
   confirmButton:{
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
confirmButtonText:{
     color :"#fff",
     fontSize :16 ,
     fontWeight :"bold"
}
});

export default CompleteBookingScreen;