import React, { useEffect, useState,useCallback } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
const MedicalHistoryScreen = ({ navigation }) => {
    const [records, setRecords] = useState([]);

 
        const fetchRecords = async () => {
            try {
                const storedRecords = await AsyncStorage.getItem('medicalRecords');
                if (storedRecords) setRecords(JSON.parse(storedRecords));
            } catch (error) {
                console.error('Failed to fetch records', error);
            }
        };

    

    useFocusEffect(
        useCallback(() => {
            fetchRecords();}, [])
    );

    const deleteRecord = async (index) => { 
        try {
            const storedRecords = await AsyncStorage.getItem('medicalRecords');
            const records = storedRecords ? JSON.parse(storedRecords) : [];
            records.splice(index, 1);
            await AsyncStorage.setItem('medicalRecords', JSON.stringify(records));
            setRecords(records);
        } catch (error) {
            console.error('Failed to delete record', error);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="arrow-back" size={24} color="#432C81" />
                </TouchableOpacity>
                <Text style={styles.headerText}>Medical Record</Text>
            </View>

            {records.length === 0 ? (
                <View style={styles.content}>
                    <Icon name="document-outline" size={100} color="#ccc" />
                    <Text style={styles.noRecordsText}>You don't have any records.</Text>
                    <Text style={styles.instructionText}>Click the plus button to add</Text>
                </View>
            ) : (
                <FlatList 
                    style={{ flex: 1, paddingHorizontal: 16, paddingVertical: 8 }}
                    data={records}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => (
                        <View style={styles.recordItem}>
                            <View>
                                <Text style={styles.recordTitle}>{item.title}</Text>
                                <Text>{item.date}</Text>
                            </View>
                           
                        </View>
                    )}
                />
            )}

            <TouchableOpacity
                style={styles.fab}
                onPress={() => navigation.navigate('AddMedicalRecord')}
            >
                <Icon name="add" size={24} color="#fff" />
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
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    noRecordsText: {
        fontSize: 18,
        color: '#432C81',
        marginBottom: 10,
    },
    instructionText: {
        fontSize: 16,
        color: '#888',
    },
    fab: {
        position: 'absolute',
        bottom: 30,
        right: 30,
        backgroundColor: '#FFB300',
        width: 56,
        height: 56,
        borderRadius: 28,
        justifyContent: 'center',
        alignItems: 'center',
    },
    recordItem:{
       flexDirection :'row',
       paddingHorizontal :16,
       paddingVertical :8,
       borderRadius :10,
       borderColor :'#ddd',
       borderWidth :1,
       justifyContent :'space-between',
       alignItems :'center'
   },
   recordTitle:{
       fontSize :18 ,
       fontWeight :"bold"
   }
});

export default MedicalHistoryScreen;