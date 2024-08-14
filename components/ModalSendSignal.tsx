import {View, Text, Modal, StyleSheet} from 'react-native'
import React from 'react'

export default function ModalSendSignal() {
    return (
        <Modal animationType="slide" transparent={true}>
            <View style={styles.modal}>
                <Text>Test signal message</Text>
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
