import {View, Text, Modal, StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import {deleteBookPlace} from "@/helpers/functions/deleteBookPlace";

// @ts-ignore
export default function ModalDeleteConfirmBookPlace({setModalDeleteBookPlaceVisible, bookPlaceId}) {
    return (
        <Modal transparent={true} animationType="slide">
            <View style={styles.modal}>
                <Text>Tu es sur de vouloir supprimer ta boites à livres ?</Text>
                <View>
                    <TouchableOpacity onPress={()=>deleteBookPlace(bookPlaceId)}>
                        <Text>Oui</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={(prev)=>setModalDeleteBookPlaceVisible(!prev)}>
                        <Text>Non</Text>
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
    }
})
