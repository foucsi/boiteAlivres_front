import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

export default function StripePremiumAccount() {
    return (
        <View style={styles.container}>
            <AntDesign name="creditcard" size={96} color="black" />
            <View>
                <TextInput style={styles.input} placeholder="Card Number" />
                <TextInput style={styles.input} placeholder="MM/YY" />
                <TextInput style={styles.input} placeholder="CVC" />
                <View style={styles.containerBtn}>
                    <TouchableOpacity style={styles.btnSubmit}>
                        <Text style={{color:"white"}}>Submit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnCancel}>
                        <Text style={{color:"white"}}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    input:{
        borderWidth:1,
        borderColor:"black",
        borderRadius:5,
        padding:10,
        margin:10,
        width:300
    },
    containerBtn:{
        flexDirection:"row",
        justifyContent:"space-between"
    },
    btnSubmit:{
        backgroundColor:"#294C60",
        padding:10,
        borderRadius:5,
        margin:10,
    },
    btnCancel:{
        backgroundColor:"red",
        padding:10,
        borderRadius:5,
        margin:10
    }
})
