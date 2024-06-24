import {Text, StyleSheet} from 'react-native'
import React from 'react'
import {WELCOME_TEXT} from "@/constants/WELCOME_TEXT";

interface ModalContentProps{
    username:string
}

export default function ModalContent({username}:ModalContentProps) {
    return (
        <Text style={styles.text}>
            {WELCOME_TEXT(username)}
        </Text>
    )
}

const styles = StyleSheet.create({
    text:{
        textAlign:"center"
    }
})
