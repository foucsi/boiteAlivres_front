import {View, Text, Modal, TouchableOpacity, StyleSheet} from 'react-native'
import React from 'react'

// @ts-ignore
export default function ModalPremium({setModalPremiumIsVisible}) {
    return (
        <Modal animationType="slide" transparent={true}>
            <View style={styles.modal}>
                <View style={styles.modalContainer}>
                    <Text>Modal Premium</Text>
                    <TouchableOpacity onPress={()=>setModalPremiumIsVisible(false)}>
                        <Text>Close Modal</Text>
                    </TouchableOpacity>
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
