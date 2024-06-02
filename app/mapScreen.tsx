import {View, Text, StyleSheet} from 'react-native'
import React from 'react'
import {useSelector} from "react-redux";

export default function MapScreen() {
    const user = useSelector((state: any) => state.user.value)
    return (
        <View style={styles.container}>
            <Text>MapScreen</Text>
            <Text>Bienvenue {user.username}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})
