import {View, Text, StyleSheet, ScrollView} from 'react-native'
import React from 'react'


export default function Notification() {

    return (
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.mainTitle}>Fonctionnalités à venir</Text>
                <View style={styles.containerFeatures}></View>
            </ScrollView>

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
    },
    containerFeatures:{
        width:"100%",
        height: 2000,
        padding: 20,
    }
})
