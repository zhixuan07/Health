import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const SelectImageScreen = ({ route,navigation }) => {
    const [selectedImage, setSelectedImage] = useState(null);
    const image1 = '../assets/images/medical_record.png';
    const images = [
        require('../assets/images/lab_result_example_1.png'),
        require('../assets/images/lab_result_example_1.png'),
        require('../assets/images/lab_result_example_1.png'),
    ];

    const handleSelectImage = (index) => {
        setSelectedImage(index);
        console.log('Selected Image', selectedImage);
    };
   

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="arrow-back" size={24} color="#432C81" />
                </TouchableOpacity>
                <Text style={styles.headerText}>Select A Image</Text>
            </View>

            <View style={styles.imageContainer}>
                {images.map((image, index) => (
                    <TouchableOpacity
                        key={index}
                        style={[
                            styles.imageWrapper,
                            selectedImage === image && styles.selectedBorder,
                        ]}
                        onPress={() => handleSelectImage(image)}
                    >
                        <Image source={image} style={styles.image} />
                    </TouchableOpacity>
                ))}
            </View>

            <TouchableOpacity
                style={styles.uploadButton}
                onPress={() => {
                    if (selectedImage !== null) {
                        navigation.navigate('AddMedicalRecord', { image: images[selectedImage] });
                    }
                }}
            >
                <Text style={styles.uploadButtonText}>Upload</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#432C81',
        marginLeft: 10,
    },
    imageContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 20,
    },
    imageWrapper: {
        width: 100,
        height: 100,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        justifyContent: 'center',
        alignItems: 'center',
    },
    selectedBorder: {
        borderColor: '#432C81',
    },
    image: {
        width: 80,
        height: 80,
    },
    uploadButton: {
      position:"absolute", 
      bottom :30 , 
      left:"25%", 
      transform:[{translateX:-75}], 
      flexDirection:"row", 
      justifyContent:"center", 
      alignItems:"center", 
      backgroundColor:"#432C81", 
      width :350 , 
      height :50 , 
      borderRadius :25 
},
uploadButtonText:{
     color:"#fff", 
     fontSize :18 , 
     marginLeft :10 
}
});

export default SelectImageScreen;
