import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native'
import React from 'react'
import {router} from 'expo-router'
import {Linking} from 'react-native'

//IMPORT FUNCTION handleLogout
import {handleLogout} from "@/functions/handleLogout";
import {useDispatch, useSelector} from "react-redux";
import {maxHeight} from "@mui/system";

//ICONS
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

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
                <Text style={styles.text}>Premium: <Entypo name={users.premium ? "check" : "cross"} size={24} color="green" /></Text>
            </View>
            <View style={styles.containerLogout}>
                <TouchableOpacity style={styles.btnLogout} onPress={()=>handleLogout(dispatch, router, "/login")}>
                    <Text style={{color:"white"}}>Se déconnecter</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Text style={{textAlign: 'center', marginTop: 20, fontSize: 16}}>Version 1.0.0</Text>
                <View style={styles.containerAbout}>
                    <Text style={{fontWeight:"bold", paddingBottom:5}}>A propos du développeur</Text>
                    <Text>Bonjour ! Je suis Julien Foucart, le développeur de Boite à livres. Passionné par la technologie, l'innovation et la littérature, je me consacre à créer des applications qui simplifient la vie quotidienne et apportent une valeur ajoutée aux utilisateurs.</Text>

                    <Text style={{fontWeight:"bold", paddingBottom:5 ,marginTop:20}}>Contact</Text>
                    <View style={styles.containerIconContact}>
                            <TouchableOpacity onPress={() => Linking.openURL("https://www.linkedin.com/in/julien-foucart-333a40251/")}>
                                <AntDesign name="linkedin-square" size={24} color="#294C60" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => Linking.openURL("https://www.linkedin.com/in/julien-foucart-333a40251/")}>
                                <AntDesign name="linkedin-square" size={24} color="#294C60" />
                            </TouchableOpacity>
                    </View>

                </View>
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
        height:450,
        justifyContent: 'center',
    },
    containerLogout:{
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginTop: 20,
    },
    btnLogout:{
        backgroundColor: '#294C60',
        padding: 10,
        borderRadius: 5,
        width: "50%",
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerAbout:{
        marginTop: 20,
        padding: 20,
    },
    containerIconContact:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    }
})
