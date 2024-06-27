import {View, Text, Image, StyleSheet} from 'react-native'
import React from 'react'

interface FavoritesUser{
    _id: string
    bookPlace: any
}

export default function FavoritesUser({_id,bookPlace}:FavoritesUser) {
    return (
        <View style={styles.containerFavorite}>
            <Text>Description: {bookPlace.description}</Text>
            <Image source={{uri: bookPlace.photo}} style={{width: 80, height: 80}}/>
        </View>
    )
}

const styles = StyleSheet.create({
    containerFavorite:{
        display: "flex",
        flexDirection: "row",
        marginTop: 10,
        width: "100%",
        padding: 10,
        backgroundColor: "white",
        borderRadius: 10,
    },
})
