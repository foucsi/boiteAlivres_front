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
            <Image source={{uri: bookPlace.photo}} style={{width: 100, height: 100}}/>
        </View>
    )
}

const styles = StyleSheet.create({
    containerFavorite:{
        width: "100%",
    }
})
