import {View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native'
import React, {useState} from 'react'
import {useSelector} from "react-redux";

//ICONS
import {FontAwesome} from "@expo/vector-icons";

// @ts-ignore
export default function ContainerDescription({selectedMarker}) {
    const user = useSelector((state: any) => state.user.value)
    const [textInputVisible, setTextInputVisible] = useState(false)

    const displayInput = ()=>{
        setTextInputVisible(true)
    }
    return (
        <View style={styles.container}>
            <View style={styles.containerDescription}>
                <Text>{selectedMarker.description}</Text>
                {textInputVisible && <View>
                    <TextInput style={styles.input} multiline={true} placeholder="Modifiez votre avis ici ..."/>
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
        height: 360,
        backgroundColor: '#F7F9F9',
    },
    containerDescription:{
        padding: 10,
        width: '100%',
        height: "55%",
    },
    containerUpdateDescription:{
        width: "100%",
        padding: 10,
        alignItems: 'flex-end',
    },
    input:{
        width: '100%',
        height: 50,
        borderStyle: 'solid',
        borderColor: '#294C60',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        marginTop: 10,
    }
})
