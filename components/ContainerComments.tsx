import {View, Text, StyleSheet, Image} from 'react-native'
import React from 'react'
import moment from "moment";


// @ts-ignore
export default function ContainerComments({comment, user}) {
    const date = moment(comment.date).format('DD/MM/YYYY')
    return (
        <View style={styles.container}>
            <View style={styles.firstComponent}>
                <View>
                    <Image source={{uri: user.photo}} style={{width: 30, height: 30, borderRadius: 50}}/>
                </View>
                <View>
                    <Text>{user.username}</Text>
                    <Text>{date}</Text>
                </View>
            </View>
            <View style={styles.secondComponent}>
                <Text>{comment}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        display: "flex",
        flexDirection:"column",
        alignItems: "center",
        justifyContent: "space-between",
        margin: 10,
        padding: 10,
        borderRadius: 10,
        borderBottomWidth: 1,
        borderStyle: 'solid',
        borderColor: '#EFEFEF',
    },
    firstComponent:{
        display: "flex",
        flexDirection: "row",
        width: "100%",
    },
    secondComponent:{
        paddingTop: 10,
        display: "flex",
        flexDirection: "row",
        width: "100%",
        padding:5,
    }
})
