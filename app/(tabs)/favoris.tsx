import {View, StyleSheet, Text, Button} from 'react-native'
import React, {useState} from 'react'
import Favorites from "@/components/Favorites";

//TEST MODAL
import Modal from "react-native-modal"


export default function Favoris() {
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    return (
        <View style={styles.container}>
            <Favorites setModalVisible={setModalVisible}/>
            <Button title="Show modal" onPress={toggleModal} />
            <View style={{ flex: 1 }}>
                <Modal isVisible={isModalVisible}>
                    <View style={styles.newModal}>
                        <View style={styles.contentModal}>
                            <Button title="Hide modal" onPress={toggleModal} />
                        </View>
                    </View>
                </Modal>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerCenter:{
        width: '70%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text:{
        fontSize: 20,
        textAlign: 'center'
    },
    newModal:{
        flex: 1,
        justifyContent: 'flex-end',
    },
    contentModal:{
        borderRadius: 10,
        backgroundColor:"white",
        height: 100,
    }
})
