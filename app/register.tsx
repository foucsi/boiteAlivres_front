import {View, Text, StyleSheet} from 'react-native'
import React from 'react'
import {Link} from "expo-router";

export default function Register() {
    return (
        <View style={styles.container}>
            <Text>Register</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

