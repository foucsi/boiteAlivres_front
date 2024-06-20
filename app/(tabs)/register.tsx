import {View, Text, StyleSheet, TextInput, Button, KeyboardAvoidingView,Platform, TouchableWithoutFeedback, Keyboard} from 'react-native'
import React from 'react'
import {Link} from "expo-router";
import {useRegister} from "@/hooks/useRegister";

export default function Register() {
    const {username, password, email, setUsername, setPassword, setEmail, handleRegister, error} = useRegister()
    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.inner}>
                    <TextInput placeholderTextColor="#E0E0E0" value={username} onChangeText={setUsername} autoCapitalize={"none"} placeholder="Utilisateur" style={styles.input}/>
                    <TextInput placeholderTextColor="#E0E0E0" value={email} onChangeText={setEmail}  autoCapitalize={"none"} placeholder="Email" style={styles.input}/>
                    <TextInput placeholderTextColor="#E0E0E0" value={password} onChangeText={setPassword} autoCapitalize={"none"} autoCorrect={false} secureTextEntry={true}  placeholder="Mot de passe" style={styles.input} />
                    <Text style={styles.errorText}>{error}</Text>

                    <View style={styles.containerBtn}>
                        <Button color="#294C60" title="S'enregistrer" onPress={handleRegister} />
                    </View>

                </View>
                </TouchableWithoutFeedback>
            <View style={styles.containerBottom}>
                <Text style={styles.textWhite} >Vous avez déja un compte ?</Text>
                <Link href="/tabs/login" style={styles.textWhite}>Se connecter</Link>
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
        height: 40,
        borderColor: '#E0E0E0',
        borderBottomWidth: 1,
        color: 'white'
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
        padding: 5
    }
})

