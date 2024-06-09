import {View, Text, Modal, TouchableOpacity, StyleSheet} from 'react-native'
import React from 'react'

// @ts-ignore
export default function ModalComment({setModalCommentVisible}) {
    const closeModal = ()=>{
        setModalCommentVisible((prev: any) => !prev)
    }
    return (
        <Modal animationType="slide" transparent={true} >
            <View style={styles.modal}>
                <View style={styles.modalContainer}>
                    <TouchableOpacity onPress={closeModal}>
                        <Text>Close</Text>
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
    },
    modalContainer:{
        alignItems:"center",
        justifyContent:"center",
        height:200,
        width:300,
        backgroundColor:"white",
        borderRadius: 10,
    }
})
