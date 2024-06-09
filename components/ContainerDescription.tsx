import {View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native'
import React, {useEffect, useState} from 'react'
import {useSelector} from "react-redux";

//ICONS
import {FontAwesome} from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';
import {useUpdateDescriptionBookPlace} from "@/hooks/useUpdateDescriptionBookPlace";

// @ts-ignore
export default function ContainerDescription({selectedMarker}) {
    const user = useSelector((state: any) => state.user.value)
    const [textInputVisible, setTextInputVisible] = useState(false)

    const {updated, description, setDescription, updateDescription} = useUpdateDescriptionBookPlace(selectedMarker.id)


    const displayInput = ()=>{
        setTextInputVisible((prevState)=>!prevState)
    }

    useEffect(() => {
        if (updated) {
            setTextInputVisible(false);
        }
    }, [updated]);

    return (
        <View style={styles.container}>
            <View style={styles.containerDescription}>
                <Text>{selectedMarker.description}</Text>
                {textInputVisible && <View style={styles.containerInput}>
                    <View style={{alignItems:"flex-end"}}>
                        <TouchableOpacity onPress={displayInput}>
                            <AntDesign name="closecircleo" size={24} color="#294C60" />
                        </TouchableOpacity>
                    </View>
                    <TextInput value={description} onChangeText={setDescription} style={styles.input} multiline={true} placeholder="Modifiez votre avis ici ..."/>
                    <TouchableOpacity style={styles.button} onPress={updateDescription}>
                        <Text style={styles.buttonText}>Envoyer</Text>
                    </TouchableOpacity>
                </View>}

            </View>
            <View style={styles.containerUpdateDescription}>
                {user.uniqueId === selectedMarker.uniqueId && <TouchableOpacity onPress={displayInput}>
                    <FontAwesome name="pencil-square-o" size={24} color="#294C60" />
                </TouchableOpacity>}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        width: '100%',
        height: 440,
        backgroundColor: '#F7F9F9',
    },
    containerDescription:{
        padding: 10,
        width: '100%',
        height: "65%",
    },
    containerUpdateDescription:{
        width: "100%",
        padding: 10,
        alignItems: 'flex-end',
    },
    input:{
        width: '100%',
        height: 70,
        borderStyle:"solid",
        borderColor: '#294C60',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        marginTop: 10,
    },
    containerInput:{
        justifyContent:"flex-end",
        height:250,
        paddingTop: 10,
        paddingBottom: 10,
    },
    button: {
        marginTop: 10,
        backgroundColor: '#294C60',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
})
