import {View, Text, Modal, StyleSheet, TouchableOpacity, TextInput} from 'react-native'
import React, {useState} from 'react'
import {useSignalMsg} from "@/helpers/hooks/useSignalMsg";
import {useSelector} from "react-redux";

import { AntDesign } from '@expo/vector-icons';

// @ts-ignore
export default function ModalSendSignal({setShowModal, selectedMarker}) {
    const [message, setMessage] = useState('')
    const user = useSelector((state:any) => state.user.value)
    const {sendSignalMsg, error} = useSignalMsg(message, user.email)

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
                    {error ? <Text>Failed to send signal message. Please try again.</Text>: null}
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
})
