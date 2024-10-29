import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const symptomsData = [
    { id: '1', name: 'General Physician', icon: require('../assets/images/general.png') },
    { id: '2', name: 'Skin & Hair', icon: require('../assets/images/skin.png') },
    { id: '3', name: 'Stomach', icon: require('../assets/images/stomach.png') },
    { id: '4', name: 'Dental Care', icon: require('../assets/images/tooth.png') },
    { id: '5', name: 'Bones & Joints', icon: require('../assets/images/knee.png') },
    { id: '6', name: 'Mental Health', icon: require('../assets/images/brain.png') },
    { id: '7', name: 'Lungs', icon: require('../assets/images/lung.png') },
    { id: '8', name: 'Hearts', icon: require('../assets/images/heart.png') },
];

const SymptomsScreen = ({ navigation }) => {
    const [search, setSearch] = useState('');
    const [filteredData, setFilteredData] = useState(symptomsData);

    const handleSearch = (text) => {
        setSearch(text);
        if (text) {
            const newData = symptomsData.filter(item => item.name.toLowerCase().includes(text.toLowerCase()));
            setFilteredData(newData);
        } else {
            setFilteredData(symptomsData);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="arrow-back" size={24} color="#432C81" />
                </TouchableOpacity>
                <Text style={styles.headerText}>Symptoms</Text>
            </View>
            <View style={styles.body}>
            <TextInput
                style={styles.searchBar}
                placeholder="Search Symptoms"
                value={search}
                onChangeText={handleSearch}
            />

            <FlatList
                data={filteredData}
                keyExtractor={(item) => item.id}
                numColumns={2}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('FindDoctor')} style={styles.itemContainer}>
                        <View style={styles.itemBody} >
                            <Image source={item.icon} style={styles.icon} />
                            <Text style={styles.itemText}>{item.name}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
            </View>
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
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#432C81',
        marginLeft: 10,
    },
    searchBar: {
        height: 40,
        borderColor: '#ddd',
        backgroundColor:'#fff',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    itemContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingVertical: 20,
        paddingHorizontal: 10,
        marginBottom: 20,
        width:'45%',
        marginHorizontal:'2.5%'
    },
    icon:{
      width :50 ,
      height :50 ,
      marginBottom :10 
   },
   itemText:{
      fontSize :14 ,
      color :"#432C81",
      textAlign :"center"
   },
   itemBody:{
    flexDirection :'column',
    justifyContent :'center',
    alignItems :'center'
   },
   body:{
    paddingTop:20,
    paddingHorizontal:16
   }
});

export default SymptomsScreen;