import {View, Text, StyleSheet} from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';

import {INFOS_TEXT} from "@/constants/infoText";

export default function Notification() {

    const infosText = INFOS_TEXT('infos')
    return (
        <View style={styles.container}>
            <View style={styles.containerCenter}>
                <FontAwesome name="info-circle" size={44} color="#294C60" />
                <Text style={styles.text}>
                    {infosText}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerCenter:{
        width: '70%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text:{
        fontSize: 20,
        textAlign: 'center'
    }
})
