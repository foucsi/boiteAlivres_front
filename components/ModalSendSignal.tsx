import {View, Text, Modal, StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'

// @ts-ignore
export default function ModalSendSignal({setShowModal}) {
    return (
        <Modal animationType="slide" transparent={true}>
            <View style={styles.modal}>
                <Text>Test signal message</Text>
                <TouchableOpacity onPress={()=>setShowModal(false)}>
                    <Text>close</Text>
                </TouchableOpacity>
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
