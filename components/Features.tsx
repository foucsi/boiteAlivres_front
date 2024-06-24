import {View, Text, StyleSheet} from 'react-native'
import React from 'react'

interface FeaturesUser{
    _id: string,
    feature: string,
    feat: any,
    description: string,
    status: string

}

export default function Features({feat}:FeaturesUser) {
    const {feature, description, status} = feat
    return (
        <View style={styles.containerFeatures}>
            <Text style={styles.text}>Fonctionnalitée: {feature}</Text>
            <Text style={styles.text}>Description : {description}</Text>
            <Text style={styles.text}>Status : {status}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    containerFeatures:{
        width:"100%",
        padding: 20,
        borderStyle: 'solid',
        backgroundColor:"#294C60",
        borderRadius: 10,
        marginTop: 10,
    },
    text:{
        color: 'white',
    }
})
