import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import {router} from 'expo-router'

//IMPORT FUNCTION handleLogout
import {handleLogout} from "@/functions/handleLogout";
import {useDispatch} from "react-redux";

export default function Settings() {
    const dispatch = useDispatch()
    return (
        <View style={styles.container}>
            <Text>Settings</Text>
            <TouchableOpacity onPress={()=>handleLogout(dispatch, router)}>
                <Text>Logout</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
})
