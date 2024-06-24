import {View, Text, StyleSheet, ScrollView} from 'react-native'
import React from 'react'
import {useGetAllFeatures} from "@/helpers/hooks/useGetAllFeatures";

interface Features{
    _id: string,
    feature: string

}


export default function Notification() {

    const {features} = useGetAllFeatures()
    const allFeatures= features.map((feat:Features)=>{
        return <View key={feat._id}>
                <Text>{feat.feature}</Text>
            </View>
    })

    return (
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.mainTitle}>Fonctionnalités à venir</Text>
                <View style={styles.containerFeatures}>
                    {allFeatures}
                </View>
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
