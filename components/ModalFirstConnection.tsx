import {View, Text, Modal, StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import {useSelector} from "react-redux";
import { AntDesign } from '@expo/vector-icons';

// @ts-ignore
export default function ModalFirstConnection({setFirstLogin}) {
    const users = useSelector((state: any) => state.user.value);

    const closeModal = ()=>{
        setFirstLogin((prev:boolean)=> !prev)
    }

    return (
        <Modal transparent={true} animationType="slide">
           <View style={styles.modal}>
               <View style={styles.firstConnection}>
                   <View style={{alignItems:"flex-end", padding:5}}>
                       <TouchableOpacity onPress={closeModal}>
                           <AntDesign name="closecircleo" size={24} color="black" />
                       </TouchableOpacity>
                   </View>
                    <View style={styles.containerText}>
                        <Text>
                            Bienvenue dans l'application de partage de boîte à livres {users.username} !
                            {"\n\n"}
                            Pour ajouter une boîte à livres :
                            {"\n\n"}
                            1. Localisation : Effectuez une longue pression sur l'endroit de la carte où se trouve la boîte à livres.
                            {"\n\n"}
                            2. Validation : Votre ajout sera soumis à un modérateur pour validation sous 24h.
                            {"\n\n"}
                            3. Affichage : Une fois validée, la boîte à livres sera visible sur la carte avec une icône.
                            {"\n\n"}
                            4. Personnalisation : Vous pourrez alors ajouter une photo et personnaliser la description du lieu.
                            {"\n\n"}
                            Bon partage et bonne lecture !
                        </Text>
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
    firstConnection:{
        width: "80%",
        backgroundColor: "white",
        padding: 20,
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
    containerText:{
        alignItems:"center",
        justifyContent:"center",
    }
})
