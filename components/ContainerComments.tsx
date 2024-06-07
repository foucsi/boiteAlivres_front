import {View, Text, StyleSheet, Image} from 'react-native'
import React from 'react'
import moment from "moment";


// @ts-ignore
export default function ContainerComments({comment, user}) {
    const date = moment(comment.date).format('DD/MM/YYYY')
    return (
        <View style={styles.container}>
            <Text>{comment}</Text>
            <Text>{date}</Text>
            <Text>{user.username}</Text>
            <Image source={{uri: user.photo}} style={{width: 30, height: 30, borderRadius: 50}}/>
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
