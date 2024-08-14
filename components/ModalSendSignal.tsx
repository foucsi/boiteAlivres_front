import {View, Text, Modal, StyleSheet, TouchableOpacity, TextInput} from 'react-native'
import React, {useState} from 'react'
import {useSignalMsg} from "@/helpers/hooks/useSignalMsg";
import {useSelector} from "react-redux";

import { AntDesign } from '@expo/vector-icons';

// @ts-ignore
export default function ModalSendSignal({setShowModal, selectedMarker}) {
    const [message, setMessage] = useState('')
    const user = useSelector((state:any) => state.user.value)
    const {sendSignalMsg, error} = useSignalMsg(message, user.email, setShowModal)

    const closeModal = ()=>{
        setShowModal((prev: any) => !prev)
    }

    return (
        <Modal animationType="slide" transparent={true}>
            <View style={styles.modal}>
                <View style={styles.modalContainer}>
                    <View style={{padding:5}}>
                        <TouchableOpacity>
                            <AntDesign name="closecircleo" size={24} color="#294C60" onPress={closeModal}/>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TextInput value={message} onChangeText={setMessage} multiline={true} style={styles.input} placeholder="Faites votre signalement ici."/>
                    </View>
                    <View>
                        <TouchableOpacity
                            style={styles.button}
                            // @ts-ignore
                            onPress={sendSignalMsg}
                        >
                            <Text style={styles.buttonText}>Envoyer</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modal:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContainer:{
        padding: 10,
        height:200,
        width:300,
        backgroundColor:"white",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4.84,
        elevation: 5,
    },
    input:{
        fontSize: 12,
        width: '100%',
        height: 70,
        borderStyle:"solid",
        borderColor: '#294C60',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        marginTop: 10,
    },
    button: {
        marginTop: 10,
        backgroundColor: '#294C60',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
})
