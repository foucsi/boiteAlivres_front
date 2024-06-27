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
                <AntDesign name="closecircleo" size={24} color="black" />
            </TouchableOpacity>
            <Text>Description: {bookPlace.description}</Text>
            <Image source={{uri: bookPlace.photo}} style={{width: 80, height: 80}}/>
        </View>
    )
}

const styles = StyleSheet.create({
    containerFavorite:{
        display: "flex",
        flexDirection: "column",
        marginTop: 10,
        width: "100%",
        padding: 10,
        backgroundColor: "white",
        borderRadius: 10,
        height: 150,
    },
})
