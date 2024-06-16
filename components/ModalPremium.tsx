import {View, Text, Modal, TouchableOpacity} from 'react-native'
import React from 'react'

// @ts-ignore
export default function ModalPremium({setModalPremiumIsVisible}) {
    return (
        <Modal animationType="slide" transparent={true}>
            <View>
                <TouchableOpacity onPress={()=>setModalPremiumIsVisible(false)}>
                    <Text>Close Modal</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    )
}
