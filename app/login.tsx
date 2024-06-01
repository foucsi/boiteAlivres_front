import {View, Text, StyleSheet, TextInput, Button} from 'react-native'
import React from 'react'
import {Link} from "expo-router";


export default function Login() {
    return (
        <View style={styles.container}>
            <View>
                <Text>Connection</Text>
            </View>

            <View style={styles.containerInput}>
                <TextInput  autoCapitalize={"none"} placeholder="Email" style={styles.input}/>
                <TextInput  autoCapitalize={"none"} autoCorrect={false} secureTextEntry={true} placeholder="Password" style={styles.input} />
                <Button title="Se connecter" onPress={() => {}} />
            </View>

            <View style={styles.containerBottom}>
                <Text >Vous n'avez pas encore de compte ?</Text>
                <Link href="/register" style={styles.containerEnregistrer}>S'enregistrer</Link>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    containerEnregistrer:{
        fontWeight: 'bold'
    },
    containerInput:{
        paddingTop:50,
        padding: 10,
        width:"80%",
        height:"50%",
        alignItems: 'flex-start',
    },
    input:{
        marginBottom: 10,
        width: '100%',
        height: 40,
        borderColor: 'black',
        borderStyle: 'solid',
        borderWidth: 1,
        padding:4,
    },
    containerBottom:{
        padding:10,
        alignItems:"flex-start",
        width:"80%"
    }
})