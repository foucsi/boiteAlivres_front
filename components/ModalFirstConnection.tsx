import {View, Text, Modal, StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import {useSelector} from "react-redux";

// @ts-ignore
export default function ModalFirstConnection({setFirstLogin}) {
    const users = useSelector((state: any) => state.user.value);
    return (
        <Modal transparent={true} animationType="slide">
           <View style={styles.modal}>
               <View style={styles.firstConnection}>
                   <Text>Bienvenue dans l'application de partage de boîte à livres {users.username}!

                       Pour ajouter une boîte à livres :

                       1. Localisation : Effectuez une longue pression sur l'endroit de la carte où se trouve la boîte à livres.
                       2. Validation : Votre ajout sera soumis à un modérateur pour validation.
                       3. Affichage : Une fois validée, la boîte à livres sera visible sur la carte avec une icône.
                       4. Personnalisation : Vous pourrez alors ajouter une photo et personnaliser la description du lieu.
                       Bon partage et bonne lecture !</Text>
                   <TouchableOpacity onPress={()=>setFirstLogin(false)}>
                       <Text>Close Modal</Text>
                   </TouchableOpacity>
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
        backgroundColor: "white",
        padding: 20,
        borderRadius: 10,
    }
})
