import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

interface FavoritesUser{
    _id: string
    bookPlace: any
}

export default function FavoritesUser({_id,bookPlace}:FavoritesUser) {
    return (
        <View style={styles.containerFavorite}>
            <TouchableOpacity>
                <AntDesign name="closecircleo" size={24} color="#294C60" />
            </TouchableOpacity>
            <View style={{backgroundColor:"blue", display:"flex", flexDirection:"row"}}>
                <Image source={{uri: bookPlace.photo}} style={{width: 80, height: 80}}/>
                <Text>{bookPlace.description}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerFavorite:{
        flexDirection:"column",
        backgroundColor:"red",
        marginTop:10,
    },
})
