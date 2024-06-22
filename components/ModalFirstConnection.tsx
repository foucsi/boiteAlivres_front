import {View, Text, Modal, StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'

// @ts-ignore
export default function ModalFirstConnection({setFirstLogin}) {
    return (
        <Modal transparent={true} animationType="slide">
           <View style={styles.modal}>
            <Text>modal first connection</Text>
               <TouchableOpacity onPress={()=>setFirstLogin(false)}>
                   <Text>Close Modal</Text>
               </TouchableOpacity>
           </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modal:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor: 'rgba(0,0,0,0.5)',
    }
})
