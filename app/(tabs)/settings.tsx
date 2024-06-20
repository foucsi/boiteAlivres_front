import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import {router} from 'expo-router'

//IMPORT FUNCTION handleLogout
import {handleLogout} from "@/functions/handleLogout";
import {useDispatch, useSelector} from "react-redux";


//username, email, photo, premium

export default function Settings() {
    const dispatch = useDispatch()
    // @ts-ignore
    const users = useSelector(state => state.user.value)
    return (
        <View style={styles.container}>
            <Text>{users.username}</Text>
            <Text>{users.email}</Text>

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
