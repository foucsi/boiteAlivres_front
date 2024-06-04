import {View, StyleSheet} from 'react-native'
import React, {useState} from 'react'
import MapViewComponent from "@/components/MapViewComponent";
import ModalBookPlaces from "@/components/ModalBookPlaces";

export default function MapScreen() {
    const [modalVisible, setModalVisible] = useState(false)
    return (
        <View style={styles.container}>
            <MapViewComponent setModalVisible={setModalVisible}/>
            <View>
                <ModalBookPlaces modalVisible={modalVisible} setModalVisible={setModalVisible}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
})
