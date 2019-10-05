import React, { useState } from 'react'
import { Text, SafeAreaView, StatusBar, AsyncStorage, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native'
import api from '../services/api'

export default function Book({ navigation }) {    
    const id= navigation.getParam('id')
    const [date, setDate]= useState('')

    async function handleSubmit() {
        const user_id= await AsyncStorage.getItem('user')

        await api.post(`/spots/${id}/bookings`, {
            date
        }, {
            headers: { user_id }
        })

        Alert.alert("Solicitação de reserva enviada")

        navigation.navigate('List')
    }

    function handleCancel() {
        navigation.navigate('List')
    }

    return (
        <SafeAreaView style={style.container}>
            <Text style={style.label}>Data de Interesse</Text>
            <TextInput 
                style={style.input}
                placeholder="Data desejada"
                placeholderTextColor="#999"
                autoCapitalize="words"
                value={date}
                onChangeText={setDate}
            />

            <TouchableOpacity onPress={handleSubmit} style={style.button}>
                <Text style={style.buttonText}>Solicitar reserva</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleCancel} style={[style.button, style.cancelButton]}>
                <Text style={style.buttonText}>Cancelar</Text>
            </TouchableOpacity>

        </SafeAreaView>
    )
}



const style= StyleSheet.create({
    container: {
        paddingTop: StatusBar.currentHeight+30,
        margin: 30
    },


    label: {
        fontWeight: 'bold', 
        color: '#444',
        marginBottom: 8
    },

    input: {
        borderWidth: 1,
        borderColor: '#ddd', 
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#444', 
        height: 44,
        marginBottom: 20,
        borderRadius: 2
    },

    button: {
        height: 42,
        backgroundColor: '#f05a5b',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2
    },

    cancelButton: {
        backgroundColor: '#ccc',
        marginTop: 10
    },

    buttonText: {
        color: '#fff', 
        fontWeight: 'bold', 
        fontSize: 16
    }
})