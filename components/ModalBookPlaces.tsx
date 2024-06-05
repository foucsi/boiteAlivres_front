import {View, Text, Modal, Pressable, StyleSheet, TouchableOpacity, Image} from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import moment from "moment";
import { MaterialIcons } from '@expo/vector-icons';

// @ts-ignore
export default function ModalBookPlaces({modalVisible, setModalVisible, selectedMarker}) {
    const momentDate = moment(selectedMarker.date).format('DD/MM/YYYY')
    return (
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
            <View style={styles.centeredView}>
                <View style={styles.firstView}>
                    <Image source={{uri: selectedMarker.photo}} style={styles.photo}/>
                    <View style={styles.containerClosed}>
                        <TouchableOpacity onPress={()=>setModalVisible(false)}>
                            <AntDesign name="closecircle" size={28} color="#F7F9F9" />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.secondView}>
                    <Text>Posté le {momentDate} par {selectedMarker.username}</Text>
                </View>
                <View style={styles.thirdView}>
                    <TouchableOpacity>
                        <MaterialIcons name="assistant-direction" size={48} color="#294C60" />
                    </TouchableOpacity>
                    <Text>direction</Text>
                </View>
                <View style={styles.lastView}>
                    <Text>{selectedMarker.description}</Text>
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
        alignItems: 'flex-end',
        justifyContent: 'center',
        width: '100%',
        height: '5%',
        backgroundColor: "#F7F9F9",
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#294C60',
        opacity: 0.9,
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
    },
    thirdView:{
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '10%',
        backgroundColor: '#F7F9F9',
        opacity: 0.9,
        borderBottomWidth: 1,
        borderColor: '#294C60',
    },
    lastView:{
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '55%',
        backgroundColor: '#F7F9F9',
        opacity: 0.9,
    }
});
