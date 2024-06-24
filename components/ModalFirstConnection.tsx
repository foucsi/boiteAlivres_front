import {View, Text, Modal, StyleSheet, TouchableOpacity} from 'react-native'
import React, {useMemo} from 'react'
import {useSelector} from "react-redux";
import { AntDesign } from '@expo/vector-icons';
import ModalContent from "@/components/ModalContent";

interface ModalFirstConnectionProps {
    setFirstLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

// @ts-ignore
export default function ModalFirstConnection({setFirstLogin}:ModalFirstConnectionProps) {
    const username = useSelector((state: any) => state.user.value.username);

    const closeModal = ()=>{
        setFirstLogin((prev)=> !prev)
    }

    const memoizedContent = useMemo(() => (
        <ModalContent username={username} />
    ), [username]);

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
                        {memoizedContent}
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
