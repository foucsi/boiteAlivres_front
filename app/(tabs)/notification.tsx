import {View, Text, StyleSheet, ScrollView} from 'react-native'
import React from 'react'
import {useGetAllFeatures} from "@/helpers/hooks/useGetAllFeatures";
import Features from "@/components/Features";

interface FeaturesUser{
    _id: string,
    feature: string
    feat: any,
    error:string
}


export default function Notification() {

    const {features,isLoading, error} = useGetAllFeatures()

    if(isLoading){return <View style={styles.containerIsLoadingOrError}><Text>Chargement...</Text></View>}
    if(error){return <View style={styles.containerIsLoadingOrError}><Text>Erreur: {error}</Text></View>}

    return (
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.mainTitle}>Fonctionnalités à venir</Text>
                <View style={styles.containerFeatures}>
                    {features.map((feature:FeaturesUser) =>{
                        // @ts-ignore
                        return <Features key={feature._id} feat={feature}/>
                    })}
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
    },
    containerIsLoadingOrError:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
