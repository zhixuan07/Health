import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const dates = [
    { id: '1', day: '28,Oct Monday' },
    { id: '2', day: '29,Oct Tuesday' },
    { id: '3', day: '30,Oct Wednesday' },
    { id: '4', day: '31,Oct Thursday' },
];

const times = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM',
    '11:00 AM', '11:30 AM', '1:00 PM', '1:30 PM',
    '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM',
];

const BookTimeSlotScreen = ({ navigation }) => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="arrow-back" size={24} color="#432C81" />
                </TouchableOpacity>
                <Text style={styles.headerText}>Book Time Slot</Text>
            </View>

            <Text style={styles.availableText}>Available Date Slot</Text>
            <FlatList
                horizontal
                data={dates}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={[
                            styles.dateButton,
                            selectedDate === item.id && styles.selectedButton,
                        ]}
                        onPress={() => setSelectedDate(item.id)}
                    >
                        <Text style={[
                            styles.dateText,
                            selectedDate === item.id && styles.selectedText,
                        ]}>{item.day}</Text>
                    </TouchableOpacity>
                )}
            />

            <Text style={styles.availableText}>Available Time Slot</Text>

            <FlatList
                data={times}
                numColumns={3}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={[
                            styles.timeButton,
                            selectedTime === item && styles.selectedButton,
                        ]}
                        onPress={() => setSelectedTime(item)}
                    >
                        <Text style={[
                            styles.timeText,
                            selectedTime === item && styles.selectedText,
                        ]}>{item}</Text>
                    </TouchableOpacity>
                )}
            />

            <TouchableOpacity
                style={styles.nextButton}
                onPress={() => {
                    if (selectedDate && selectedTime) {
                        navigation.navigate('CompleteBooking');
                    }
                }}
            >
                <Text style={styles.nextButtonText}>Next</Text>
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
        marginBottom: 10,
        gap: 10,
    },
    backText: {
        fontSize: 24,
        color: '#432C81',
        marginRight: 10,
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#432C81',
    },
    dateButton: {
        width: 120,
        height: 80,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ddd',
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    dateText: {
        color: '#432C81',
    },
    availableText:{
      fontSize :25 ,
      fontWeight :"bold",
      color :"#432C81",
      marginVertical :20 
   },
   timeButton:{
      paddingVertical :15 ,
      paddingHorizontal :20 ,
      borderRadius :5 ,
      borderWidth :1 ,
      borderColor :"#ddd",
      marginBottom :15 ,
      alignItems :"center",
      justifyContent :"center",
      marginHorizontal :5 
   },
   timeText:{
      color :"#432C81"
   },
   selectedButton:{
      backgroundColor :"#006AFFFF"
   },
   selectedText:{
      color :"#ffffff"
   },
   nextButton:{
     backgroundColor:"#432C81", 
     paddingVertical :15 , 
     borderRadius :25 , 
     alignItems :"center", 
     justifyContent :"center", 
     marginBottom:20
},
nextButtonText:{
     color :"#fff",
     fontSize :16 ,
     fontWeight :"bold"
}
});

export default BookTimeSlotScreen;