import {View, Text, Modal, Pressable, StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'

// @ts-ignore
export default function ModalBookPlaces({modalVisible, setModalVisible, selectedMarker}) {
    return (
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text>{selectedMarker.lat}</Text>
                    <TouchableOpacity onPress={()=>setModalVisible(false)}>
                        <Text>close</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalView: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '30%',
        backgroundColor: 'white',
    },
});
