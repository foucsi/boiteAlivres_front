import {View, Text, StyleSheet} from 'react-native'
import React from 'react'


export default function Notification() {

    return (
        <View style={styles.container}>
            <Text style={styles.mainTitle}>Fonctionnalités à venir</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    mainTitle:{
        marginTop: 90,
        fontSize: 20,
        marginLeft: 20,
        fontWeight: 'bold',
    }
})
