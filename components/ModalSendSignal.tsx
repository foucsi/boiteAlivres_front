import {View, Text, Modal, StyleSheet, TouchableOpacity} from 'react-native'
import React, {useState} from 'react'
import {useSignalMsg} from "@/helpers/hooks/useSignalMsg";
import {useSelector} from "react-redux";

// @ts-ignore
export default function ModalSendSignal({setShowModal, selectedMarker}) {
    const [message, setMessage] = useState('')
    const user = useSelector((state:any) => state.user.value)
    const {sendSignalMsg, error} = useSignalMsg(message, user.email)

    return (
        <Modal animationType="slide" transparent={true}>
            <View style={styles.modal}>
                <Text>Test signal message</Text>
                <TouchableOpacity onPress={()=>setShowModal(false)}>
                    <Text>close</Text>
                </TouchableOpacity>
                {error ? <Text>Failed to send signal message. Please try again.</Text>: null}
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
})
