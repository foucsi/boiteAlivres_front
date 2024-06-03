import {View, Text, StyleSheet, Button} from 'react-native'
import React from 'react'
import {useSelector} from "react-redux";
import Modal from "react-native-modal";

// @ts-ignore
export default function ModalAddMarker({modalVisible, setModalVisible}) {
    const user = useSelector((state: any) => state.user.value)
    return (
        <View style={{ flex: 1 }}>
            <Modal isVisible={modalVisible}>
                <View style={{ flex: 1 }}>
                    <Text>Hello!</Text>
                    <Button title="Hide modal" onPress={()=>setModalVisible(false)} />
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({

})


