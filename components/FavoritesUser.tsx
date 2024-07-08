import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import {deleteFavorite} from "@/helpers/functions/deleteFavorite";
import {useDispatch} from "react-redux";

import {showModal} from "@/helpers/functions/showToast";

interface FavoritesUser{
    _id: string
    bookPlace: any,
}

export default function FavoritesUser({_id,bookPlace}:FavoritesUser) {
    const dispatch = useDispatch()

    const handleDeleteFavorite = ()=>{
        deleteFavorite(_id, dispatch)
        showModal('Suppression réussie','La boîte à livres a été retirée de vos favoris')
    }

    return (
        <View style={styles.containerFavorite}>
            <View style={styles.containerClose}>
                <TouchableOpacity onPress={handleDeleteFavorite}>
                    <AntDesign name="closecircleo" size={24} color="#294C60" />
                </TouchableOpacity>
            </View>
            <View style={styles.containerDescription}>
                <Image source={{uri: bookPlace.photo}} style={{width: 60, height: 60, borderRadius:10}}/>
                <View style={{ width:"80%"}}>
                    <Text>{bookPlace.description}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerFavorite:{
        backgroundColor:"white",
        marginTop:10,
        padding:10,
        width:"100%",
        height:130,
        borderRadius:10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
    },
    containerDescription:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-around",
        padding:5
    },
    containerClose:{
        alignItems:"flex-end"
    }
})
