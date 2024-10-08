import {View, StyleSheet, Text, Button} from 'react-native'
import React, {useState} from 'react'
import Favorites from "@/components/Favorites";


export default function Favoris() {
    return (
        <View style={styles.container}>
            <Favorites />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerCenter:{
        width: '70%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text:{
        fontSize: 20,
        textAlign: 'center'
    },
    newModal:{
        flex: 1,
        justifyContent: 'flex-end',
    },
    contentModal:{
        borderRadius: 10,
        backgroundColor:"white",
        height: 100,
    }
})
