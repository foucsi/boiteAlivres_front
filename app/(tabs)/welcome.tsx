import {View, Text, StyleSheet} from 'react-native'
import React, {useEffect} from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {router} from "expo-router"

export default function Welcome() {

    useEffect(() => {
        setTimeout(()=>{
            router.navigate("/login")
        }, 2000)
    }, []);
    return (
        <View style={styles.container}>
            <MaterialCommunityIcons name="bookshelf" size={64} color="white" />
            <Text style={styles.title}>Boite à livres</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#294C60'
    },
    title:{
        fontSize: 32,
        color: 'white'
    }
});
