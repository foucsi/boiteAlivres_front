import {View, Text, StyleSheet, TextInput, Button, KeyboardAvoidingView,Platform, TouchableWithoutFeedback, Keyboard} from 'react-native'
import React from 'react'
import {Link} from "expo-router";
import {useRegister} from "@/hooks/useRegister";
import { Camera } from 'lucide-react-native'

export default function Register() {
    const {username, password, email, setUsername, setPassword, setEmail, handleRegister, error} = useRegister()
    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.inner}>
                    <TextInput value={username} onChangeText={setUsername} autoCapitalize={"none"} placeholder="Utilisateur" style={styles.input}/>
                    <TextInput value={email} onChangeText={setEmail}  autoCapitalize={"none"} placeholder="Email" style={styles.input}/>
                    <TextInput value={password} onChangeText={setPassword} autoCapitalize={"none"} autoCorrect={false} secureTextEntry={true}  placeholder="Mot de passe" style={styles.input} />
                    <Text style={styles.errorText}>{error}</Text>
                    <Button title="S'enregistrer" onPress={handleRegister} />
                </View>
                </TouchableWithoutFeedback>
            <View style={styles.containerBottom}>
                <Text >Vous avez déja un compte ?</Text>
                <Link href="/login" style={styles.containerEnregistrer}>Se connecter</Link>
            </View>
        </KeyboardAvoidingView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        borderColor: '#000000',
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
    }
})

