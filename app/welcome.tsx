import {View, Text, StyleSheet} from 'react-native'
import React, {useEffect} from 'react'
import {Link} from "expo-router";
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Welcome() {
    return (
        <View style={styles.container}>
            <MaterialCommunityIcons name="bookshelf" size={64} color="white" />
            <Text style={styles.title}>Boite à livres</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#294C60'
    },
    title:{
        fontSize: 32,
        color: 'white'
    }
});
