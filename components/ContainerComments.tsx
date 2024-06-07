import {View, Text, StyleSheet} from 'react-native'
import React from 'react'

// @ts-ignore
export default function ContainerComments({comment}) {
    return (
        <View style={styles.container}>
            <Text>{comment}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        margin: 10,
        padding: 10,
        backgroundColor: "#294C60",
        borderRadius: 10
    }
})
