import React, { useState, useEffect } from 'react'
import { SafeAreaView, Text, AsyncStorage, StyleSheet, Image, StatusBar, ScrollView } from 'react-native'

import SpotList from '../components/SpotList'

import logo from '../assets/logo.png'

export default function List() {
    const [techs, setTechs] = useState([])

    useEffect(() => {
        AsyncStorage.getItem('techs').then(storageTechs => {
            const techsArray = storageTechs.split(',').map(tech => tech.trim())

            setTechs(techsArray)
        })
    }, [])

    return (
        <SafeAreaView style={style.container}>
            <Image source={logo} style={style.logo} />

            <ScrollView>
                {techs.map(tech => <SpotList key={tech} tech={tech} />)}
            </ScrollView>
        </SafeAreaView>
    )
        
}


const style= StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight
    },

    logo: {
        height: 32,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: 10
    }
})