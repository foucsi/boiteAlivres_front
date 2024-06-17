import {View, Text, Modal, TouchableOpacity, StyleSheet} from 'react-native'
import React from 'react'
import {router} from 'expo-router'

import { AntDesign } from '@expo/vector-icons';

// @ts-ignore
export default function ModalPremium({setModalPremiumIsVisible}) {

    const navigationStripeComponent = ()=>{
        setModalPremiumIsVisible(false)
        router.navigate("/stripePremiumAccount")
    }
    return (
        <Modal animationType="slide" transparent={true}>
            <View style={styles.modal}>
                <View style={styles.modalContainer}>
                    <View style={styles.iconClose}>
                        <TouchableOpacity onPress={()=>setModalPremiumIsVisible(false)}>
                            <AntDesign name="closecircleo" size={24} color="#294C60" />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.mainText}>Compte Premium Requis</Text>
                    <Text style={styles.secondText}>Pour ajouter une boîte à livres, vous devez disposer d'un compte premium. Veuillez mettre à niveau votre compte pour accéder à cette fonctionnalité exclusive et profiter de nombreux autres avantages.</Text>
                    <View style={styles.containerAccount}>
                        <TouchableOpacity>
                            <Text style={{color:"white"}}>Mettre à niveau mon compte</Text>
                        </TouchableOpacity>
                    </View>
                </View>
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
    },
    modalContainer:{
        padding: 10,
        height:230,
        width:300,
        backgroundColor:"white",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4.84,
        elevation: 5,
    },
    mainText:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#294C60',
        textAlign: 'center',
        padding: 10
    },
    secondText:{
        fontSize: 14,
        color: '#294C60',
        textAlign: 'center'
    },
    iconClose:{
        alignItems: 'flex-end'
    },
    containerAccount:{
        cursor: 'pointer',
        marginTop: 15,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#294C60',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    }
})
