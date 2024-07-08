import {View, StyleSheet, Text, Button} from 'react-native'
import React, {useState} from 'react'
import Favorites from "@/components/Favorites";

import Toast from 'react-native-toast-message'



export default function Favoris() {
    const showToast = () => {
        Toast.show({
            type: 'success',
            text1: 'Hello',
            text2: 'This is some something 👋'
        });
    }

    return (
        <View style={styles.container}>
            <Favorites />
            <Button title="show toast" onPress={showToast}/>
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
