import {View, Text, StyleSheet, TextInput, Button, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard} from 'react-native'
import React from 'react'
import {Link} from "expo-router";


export default function Login() {
    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.inner}>
                    <TextInput placeholderTextColor="#E0E0E0" autoCapitalize={"none"} placeholder="Email" style={styles.input}/>
                    <TextInput placeholderTextColor="#E0E0E0" autoCapitalize={"none"} autoCorrect={false} secureTextEntry={true}  placeholder="Mot de passe" style={styles.input} />
                    <Text style={styles.errorText}></Text>
                    <Button color="#E0E0E0" title="Se connecter" onPress={()=>console.log("")} />
                </View>
            </TouchableWithoutFeedback>
            <View style={styles.containerBottom}>
                <Text style={styles.textWhite}>Vous n'avez pas encore de compte ?</Text>
                <Link  href="/register" style={styles.textWhite}>S'enregistrer</Link>
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#294C60"
    },
    containerEnregistrer:{
        fontWeight: 'bold'
    },
    inner:{
        padding: 24,
        flex: 1,
        justifyContent: 'space-evenly',
    },
    input:{
        height: 30,
        borderColor: '#E0E0E0',
        borderBottomWidth: 1,
    },
    containerBottom:{
        padding:30,
        alignItems:"flex-start",
        width:"80%"
    },
    errorText:{
        color: 'red',
        fontSize: 12,
    },
    textWhite:{
        color:"#E0E0E0"
    }
})