import {View, Text, Modal, StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import {deleteBookPlace} from "@/helpers/functions/deleteBookPlace";
import {useDispatch} from "react-redux";

// @ts-ignore
export default function ModalDeleteConfirmBookPlace({setModalDeleteBookPlaceVisible, bookPlaceId, setModalVisible}) {
    const dispatch = useDispatch()
    return (
        <Modal transparent={true} animationType="slide">
            <View style={styles.modal}>
                <View style={styles.containerCenter}>
                <Text>Tu es sur de vouloir supprimer ta boites à livres ?</Text>
                    <View style={styles.containerBtn}>
                        <TouchableOpacity
                            style={styles.btn}
                            onPress={() => {
                                deleteBookPlace(bookPlaceId, dispatch);
                                setModalVisible(false);
                            }}
                        >
                            <Text style={styles.textBtn}>Oui</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btn} onPress={(prev)=>setModalDeleteBookPlaceVisible(!prev)}>
                            <Text style={styles.textBtn}>Non</Text>
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
    containerCenter:{
        padding:10,
        backgroundColor:"white",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:10,
    },
    containerBtn:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        width:"30%",
        height:70,
    },
    btn:{
        alignItems:"center",
        padding:10,
        backgroundColor:"#BA274A",
        borderRadius:5,
        height:40,
        width:50,
        textAlign:"center",
    },
    textBtn:{
        color:"white",
    }
})
