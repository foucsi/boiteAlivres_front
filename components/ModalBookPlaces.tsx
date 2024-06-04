import {View, Text, Modal, Pressable, StyleSheet, TouchableOpacity, Image} from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
// @ts-ignore
export default function ModalBookPlaces({modalVisible, setModalVisible, selectedMarker}) {
    return (
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
            <View style={styles.centeredView}>
                <View style={styles.firstView}>
                    <Image source={{uri: selectedMarker.photo}} style={styles.photo}/>
                    <View style={styles.containerClosed}>
                        <TouchableOpacity onPress={()=>setModalVisible(false)}>
                            <AntDesign name="closecircle" size={28} color="white" />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.secondView}>

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
    firstView: {
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '30%',
        backgroundColor: 'white',
    },
    secondView:{
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '70%',
        backgroundColor: "0,0,0,0.5"
    },
    photo:{
        width: "100%",
        height: "100%",
    },
    containerClosed:{
        position: 'absolute',
        top: 50,
        right: 0,
        width: 30,
        left:10,
    }
});
