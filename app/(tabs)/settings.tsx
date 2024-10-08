import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native'
import React from 'react'
import {router} from 'expo-router'
import {Linking} from 'react-native'

//IMPORT FUNCTION handleLogout
import {handleLogout} from "@/helpers/functions/handleLogout";
import {useDispatch, useSelector} from "react-redux";
import {maxHeight} from "@mui/system";

//ICONS
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import {ABOUT_DEV} from "@/constants/aboutDev";
import {useGetAllBookPlaceByUserId} from "@/helpers/hooks/useGetAllBookPlaceByUserId";

export default function Settings() {
    const dispatch = useDispatch()
    // @ts-ignore
    const users = useSelector(state => state.user.value)

    const {bookPlacesLength, isLoading, error} = useGetAllBookPlaceByUserId(users?.uniqueId)

    const memoizedAboutDev = ABOUT_DEV()

    if(isLoading){return <Text>Loading...</Text>}
    // @ts-ignore
    if(error){return <Text>Error: {error.message}</Text>}


    return (
        <View style={styles.container}>
            <View style={styles.settingsContainer}>
                <Text style={styles.mainTitle}>PARAMÈTRES</Text>
                <Image source={{uri: users?.photo}} style={{width: 100, height: 100}}/>
                <Text style={styles.text}>Utilisateur: {users?.username}</Text>
                <Text style={styles.text}>Email: {users?.email}</Text>
                <Text style={styles.text}>Premium: <Entypo name={users?.premium ? "check" : "cross"} size={24} color="green" /></Text>
                <Text style={styles.textShare}>Boite à livres partagées : {bookPlacesLength > 0 ? bookPlacesLength : <Text>0, En attente de votre première pépite !</Text>}</Text>
            </View>
            <View style={styles.containerLogout}>
                <TouchableOpacity style={styles.btnLogout} onPress={()=>handleLogout(dispatch, router, "/login")}>
                    <Text style={{color:"white"}}>Se déconnecter</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Text style={{textAlign: 'center', marginTop: 20, fontSize: 16, color:"#294C60"}}>Version 1.0.0</Text>
                <View style={styles.containerAbout}>
                    <Text style={{fontWeight:"bold", paddingBottom:5, color:"#294C60"}}>A propos du développeur</Text>
                    <Text style={{color:"#294C60"}}>
                        {memoizedAboutDev}
                    </Text>

                    <Text style={{fontWeight:"bold", paddingBottom:5 ,marginTop:5, color:"#294C60"}}>Contact</Text>
                    <View style={styles.containerIconContact}>
                            <TouchableOpacity onPress={() => Linking.openURL("https://www.linkedin.com/in/julien-foucart-333a40251/")}>
                                <AntDesign name="linkedin-square" size={24} color="#294C60" />
                            </TouchableOpacity>
                            <TouchableOpacity style={{marginLeft:10}} onPress={() => Linking.openURL("https://github.com/foucsi")}>
                                <AntDesign name="github" size={24} color="#294C60" />
                            </TouchableOpacity>
                        <TouchableOpacity style={{marginLeft:10}} onPress={() => Linking.openURL("https://www.julienfoucart.fr/")}>
                            <MaterialIcons name="http" size={28} color="#294C60" />
                        </TouchableOpacity>
                    </View>
                    <View style={{paddingTop:5}}>
                        <Text style={{color:"#294C60"}}>
                            Merci d'utiliser Boite à livres. Votre soutien et vos commentaires sont essentiels pour moi, et je suis honoré de vous avoir parmi les utilisateurs de cette application.
                        </Text>
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
    textShare:{
        fontSize: 16,
        marginTop: 20,
        color: '#294C60',
    },
    text:{
        fontSize: 20,
        marginTop: 20,
        color: '#294C60',
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
        marginTop: 10,
        padding: 10,
    },
    containerIconContact:{
        flexDirection: 'row',
        marginTop: 5,
    }
})
