import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Picker } from '@react-native-picker/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
const AddReminderScreen = ({ navigation }) => {
    const [title, setTitle] = useState('');
    const [frequency, setFrequency] = useState('');
    const [dose, setDose] = useState('');
    const [selectedMedicine, setSelectedMedicine] = useState('');

    const medicines = ['Select a medicine','Acetaminophen', 'Pseudoephedrine', 'Aspirin', 'Omeprazole'];
    const saveReminder = async () => {
        try {
            const newReminder = { title, frequency, dose, medicine: selectedMedicine };
            const storedReminders = await AsyncStorage.getItem('reminders');
            const reminders = storedReminders ? JSON.parse(storedReminders) : [];
            reminders.push(newReminder);
            await AsyncStorage.setItem('reminders', JSON.stringify(reminders));
            navigation.navigate('ReminderSplash');
        } catch (error) {
            console.error('Failed to save reminder', error);
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="arrow-back" size={24} color="#432C81" />
                </TouchableOpacity>
                <Text style={styles.headerText}>Add a reminder</Text>
            </View>

            <Text style={styles.label}>Title</Text>
            <TextInput
                style={styles.input}
                value={title}
                onChangeText={setTitle}
            />

            <Text style={styles.label}>Frequency</Text>
            <View style={styles.frequencyContainer}>
                {['Daily', 'Weekly', 'Monthly'].map((item) => (
                    <TouchableOpacity
                        key={item}
                        style={[
                            styles.frequencyButton,
                            frequency === item && styles.selectedFrequency,
                        ]}
                        onPress={() => setFrequency(item)}
                    >
                        <Text style={[
                            styles.frequencyText,
                            frequency === item && styles.selectedFrequencyText,
                        ]}>
                            {item}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>

            <Text style={styles.label}>Number of dose</Text>
            <TextInput
                style={styles.input}
                value={dose}
                onChangeText={setDose}
                keyboardType="numeric"
            />

            <Text style={styles.label}>Medicine Name</Text>
            <View style={styles.pickerContainer}>
                <Picker
                    selectedValue={selectedMedicine}
                    
                    onValueChange={(itemValue) => setSelectedMedicine(itemValue)}
                    style={styles.picker}
                >
                    {medicines.map((medicine) => (
                        <Picker.Item key={medicine} label={medicine} value={medicine} />
                    ))}
                </Picker>
            </View>

            <TouchableOpacity style={styles.addButton} onPress={()=> saveReminder()}>
                <Text style={styles.addButtonText}>Add</Text>
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
    label: {
        fontSize: 16,
        color: '#432C81',
        marginBottom: 8,
    },
    input: {
        height: 40,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    frequencyContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    frequencyButton: {
        flex: 1,
        paddingVertical: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ddd',
        alignItems: 'center',
        marginHorizontal: 5,
    },
    frequencyText: {
      color :"#432C81"
   },
   selectedFrequency:{
      backgroundColor :"#006AFFFF"
   },
   selectedFrequencyText:{
      color :"#fff"
   },
   pickerContainer:{
     borderRadius :5 ,
     borderWidth :1 ,
     borderColor :"#ddd",
    
},
picker:{
     height :50 ,
     width :"100%"
},
addButton:{
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
addButtonText:{
     color :"#fff",
     fontSize :16 ,
     fontWeight :"bold"
}
});

export default AddReminderScreen;