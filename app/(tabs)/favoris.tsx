import {View, StyleSheet, Text, Button} from 'react-native'
import React, {useState} from 'react'
import Favorites from "@/components/Favorites";

//TEST MODAL
import Modal from "react-native-modal"


export default function Favoris() {
    const [isModalVisible, setModalVisible] = useState(true);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    return (
        <View style={styles.container}>
            <Favorites/>
            <Button title="Show modal" onPress={toggleModal} />
            <View style={{ flex: 1  }}>
                <Button title="Show modal" onPress={toggleModal} />

                <Modal isVisible={isModalVisible} animationIn="rotate">
                    <View style={styles.newModal}>
                        <Text>Hello!</Text>

                        <Button title="Hide modal" onPress={toggleModal} />
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
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        height: "50%",
    }
})
