import {View, Text, Modal, StyleSheet} from 'react-native'
import React from 'react'

export default function ModalFirstConnection() {
    return (
        <Modal transparent={true} animationType="slide">
           <View style={styles.modal}>
            <Text>modal first connection</Text>
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
    }
})
