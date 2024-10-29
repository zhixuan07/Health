import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import DateTimePicker from '@react-native-community/datetimepicker';
import AsyncStorage from '@react-native-async-storage/async-storage';
const AddMedicalRecordScreen = ({route, navigation }) => {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState(new Date());
    //const [selectedImage, setSelectedImage] = useState(null);
    const [showDatePicker, setShowDatePicker] = useState(false);
    const image1 = '../assets/images/lab_result_example_1.png';
    const [image, setImage] = useState(false);
   
    const selectedImage = route.params?.image;
    console.log('Selected Image', selectedImage);
    if(selectedImage){
        
        setImage(selectedImage);
        console.log('Selected Image', selectedImage);
    }
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShowDatePicker(false);
        setDate(currentDate);
    };

    const saveRecord = async () => {
        try {
            const record = { title, date: date.toLocaleDateString()};
            const storedRecords = await AsyncStorage.getItem('medicalRecords');
            const records = storedRecords ? JSON.parse(storedRecords) : [];
            records.push(record);
            await AsyncStorage.setItem('medicalRecords', JSON.stringify(records));
            navigation.navigate('MedicalRecordSplash');
        } catch (error) {
            console.error('Failed to save record', error);
        }
    };
    const navigateToSelectImage = () => {
        navigation.navigate('SelectImage');
        setImage(true);
    }

    return (
        
        <View style={styles.body}>
            
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="arrow-back" size={24} color="#432C81" />
                </TouchableOpacity>
                <Text style={styles.headerText}>Add Medical Record</Text>
            </View>
            <View style={styles.container}>
            <Text style={styles.label}>Title</Text>
            <TextInput
                style={styles.input}
                placeholder="title"
                value={title}
                onChangeText={setTitle}
            />

            <Text style={styles.label}>Date</Text>
            <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.datePicker}>
                <Text>{date.toLocaleDateString()}</Text>
                <Icon name="calendar-outline" size={20} color="#432C81" />
            </TouchableOpacity>

            {showDatePicker && (
                <DateTimePicker
                    value={date}
                    mode="date"
                    display="default"
                    onChange={onChange}
                />
            )}
          
            {!image && (
            <TouchableOpacity style={styles.imageUploadContainer} onPress={()=> navigateToSelectImage()}>
                <Icon name="image-outline" size={50} color="#ccc" />
                <Text style={styles.uploadText}>Press to upload</Text>
            </TouchableOpacity>)}
            {image && (
                <Image source={require(image1)} style={styles.imageContainer} />
            )}

            <TouchableOpacity style={styles.addButton} onPress={()=>saveRecord()}>
                <Icon name="add" size={20} color="#fff" />
                <Text style={styles.addButtonText}>Add</Text>
            </TouchableOpacity>
            </View>
            
        </View>
    );
};

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#fff',
       
    },
    container:{
      flex :1 ,
      paddingHorizontal :16 ,
      paddingTop :20 
   },
   header:{
      flexDirection :"row",
      alignItems :"center",
      padding :16 ,
      backgroundColor :"#fff",
      borderBottomWidth :1 ,
      borderBottomColor :"#ddd"
   },
   headerText:{
      fontSize :20 ,
      fontWeight :"bold",
      color :"#432C81",
      marginLeft :10 
   },
   label:{
      fontSize :16 ,
      color :"#432C81",
      marginBottom :8 
   },
   input:{
      height :40 ,
      borderColor :"#ddd",
      borderWidth :1 ,
      borderRadius :5 ,
      marginBottom :20 ,
      paddingHorizontal :10 
   },
   datePicker:{
      flexDirection :"row",
      alignItems :"center",
      justifyContent :"space-between",
      borderColor :"#ddd",
      borderWidth :1 ,
      borderRadius :5 ,
      paddingHorizontal :10 ,
      height :40 ,
      marginBottom :20 
   },
   imageUploadContainer:{
     height :150 ,
     borderColor :"#ddd",
     borderWidth :1 ,
     borderRadius :5 ,
     justifyContent :"center",
     alignItems :"center",
     marginBottom :20 
},
imageContainer:{
     height :400 ,
     width :"auto" ,
     borderRadius :5 ,
     marginBottom :20, 
     objectFit: "fill"
},
uploadText:{
     color :"#888"
},
addButton:{
     flexDirection :"row",
     justifyContent :"center",
     alignItems :"center",
     backgroundColor :"#432C81",
     height :50 ,
     borderRadius :25 
},
addButtonText:{
     color :"#fff",
     fontSize :18 ,
     marginLeft :10 
}
});

export default AddMedicalRecordScreen;
