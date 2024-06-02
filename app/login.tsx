import {View, Text, StyleSheet, TextInput, Button, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard} from 'react-native'
import React from 'react'
import {Link} from "expo-router";
import {useLogin} from "@/hooks/useLogin";


export default function Login() {
    const {email,setEmail,password,setPassword,handleLogin, error} = useLogin()
    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.inner}>
                    <TextInput value={email} onChangeText={setEmail} placeholderTextColor="#E0E0E0" autoCapitalize={"none"} placeholder="Email" style={styles.input}/>
                    <TextInput value={password} onChangeText={setPassword} placeholderTextColor="#E0E0E0" autoCapitalize={"none"} autoCorrect={false} secureTextEntry={true}  placeholder="Mot de passe" style={styles.input} />
                    <Text style={styles.errorText}>{error}</Text>

                    <View style={styles.containerBtn}>
                        <Button color="#294C60" title="Se connecter" onPress={handleLogin} />
                    </View>

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
        color: '#E0E0E0',
    },
    containerBottom:{
        padding:30,
        alignItems:"flex-start",
        width:"80%"
    },
    errorText:{
        color: '#E0E0E0',
        fontSize: 12,
    },
    textWhite:{
        color:"#E0E0E0"
    },
    containerBtn:{
        width:"100%",
        backgroundColor:"#E0E0E0",
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#E0E0E0",
        borderRadius: 5,
        padding: 5,
    }
})