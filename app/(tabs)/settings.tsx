import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native'
import React from 'react'
import {router} from 'expo-router'

//IMPORT FUNCTION handleLogout
import {handleLogout} from "@/functions/handleLogout";
import {useDispatch, useSelector} from "react-redux";
import {maxHeight} from "@mui/system";


//username, email, photo, premium

export default function Settings() {
    const dispatch = useDispatch()
    // @ts-ignore
    const users = useSelector(state => state.user.value)
    return (
        <View style={styles.container}>
            <View style={styles.settingsContainer}>
                <Text style={styles.mainTitle}>PARAMÈTRES</Text>
                <Image source={{uri: users.photo}} style={{width: 100, height: 100}}/>
                <Text style={styles.text}>Utilisateur: {users.username}</Text>
                <Text style={styles.text}>Email: {users.email}</Text>
            </View>
            <View style={styles.containerLogout}>
                <TouchableOpacity style={styles.btnLogout} onPress={()=>handleLogout(dispatch, router, "/login")}>
                    <Text>Se déconnecter</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: 'white'
    },
    mainTitle:{
        fontSize: 38,
        textAlign: 'center',
        marginTop: 20,
    },
    text:{
        fontSize: 20,
        marginTop: 20,
    },
    settingsContainer:{
        padding: 20,
        width:"100%",
        height:400,
        justifyContent: 'center',
    },
    containerLogout:{
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginTop: 20,
        height:"40%",
    },
    btnLogout:{
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 5,
        width: "50%",
        alignItems: 'center',
        justifyContent: 'center',
    }
})
