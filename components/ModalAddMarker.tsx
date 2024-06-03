import {View, Text, StyleSheet, Modal, Pressable, Alert, TouchableOpacity} from 'react-native'
import React from 'react'
import {useSelector} from "react-redux";
import { AntDesign } from '@expo/vector-icons';

// @ts-ignore
export default function ModalAddMarker({modalVisible, setModalVisible}) {
    const user = useSelector((state: any) => state.user.value)
    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                // onRequestClose={() => {
                //     Alert.alert('Modal has been closed.');
                //     setModalVisible(!modalVisible);
                // }}>
            >
                    <View style={styles.modalView}>
                        <TouchableOpacity>
                            <Text>test</Text>
                        </TouchableOpacity>
                        <Text>Merci Beaucoup {user.username} !
                            Votre contribution a été soumise avec succès et est en attente de modération. Merci de nous aider à enrichir notre communauté de partage de livres !
                            Un modérateur validera votre ajout sous 24 heures</Text>
                    </View>
            </Modal>
        </View>
    )
}


const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
});
