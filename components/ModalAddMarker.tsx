import {View, Text, StyleSheet, Button, Modal, Alert, Pressable} from 'react-native'
import React from 'react'
import {useSelector} from "react-redux";

// @ts-ignore
export default function ModalAddMarker({modalVisible, setModalVisible}) {
    const user = useSelector((state: any) => state.user.value)
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Merci Beaucoup {user.username} !
                        Bravo ! Votre boîte à livres est en route 📚🎉
                        🔶 Statut : En attente du feu vert (24h max)
                        En attendant, pourquoi ne pas lui donner un peu de style ?
                        👉 Cliquez sur le marqueur de votre boîte et...
                        ✍️ Racontez son histoire
                        📸 Montrez son plus beau profil
                        Personnalisez, amusez-vous, et merci de faire grandir notre communauté de lecteurs !
                        </Text>
                    <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => setModalVisible(!modalVisible)}>
                        <Text style={styles.textStyle}>Fermer</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)'
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
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});


