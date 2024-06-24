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
    const colorStatus ={
        "En conception": "#294C60",
        "En développement": "#8FC0A9",
        "En test": "#F4B942",
        "Disponible":"#0090C1"
    }
    return (
        // @ts-ignore
        <View style={{backgroundColor:`${colorStatus[status]}`, marginTop:10, padding:10, borderRadius:5}}>
            <Text style={styles.text}>Fonctionnalitée: {feature}</Text>
            <Text style={styles.text}>Description : {description}</Text>
            <Text style={styles.text}>
                <Text style={styles.textStatus}>Status : {status}</Text>
            </Text>
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
        fontSize: 16,
    },
    textStatus:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    }
})
