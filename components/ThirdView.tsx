import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import React from 'react'
import {iconsMaterial} from "@/constants/icons";
import {handleLinking} from "@/helpers/functions/navigationMap";
import {shareBookPlace} from "@/helpers/functions/shareBookPlace";
import {FontAwesome5} from "@expo/vector-icons";

// @ts-ignore
export default function ThirdView({selectedMarker, setModalCommentVisible}) {
    return (
        <View style={styles.thirdView}>
            {iconsMaterial.map((icon: any) => {
                return (
                    <View style={styles.containerIcon} key={icon.name}>
                        <TouchableOpacity onPress={()=> {
                            if (icon.text === "Commenter"){setModalCommentVisible(icon.onPress)}
                            else if(icon.text === "Direction"){
                                handleLinking(selectedMarker.lat, selectedMarker.long)
                            }else if(icon.text === "Partager"){
                                shareBookPlace()
                            }
                        }}>
                            <FontAwesome5 name={icon.name} size={icon.size} color={icon.color} />
                        </TouchableOpacity>
                        <Text>{icon.text}</Text>
                    </View>
                )
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    thirdView:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%',
        height: '10%',
        backgroundColor: '#F7F9F9',
        borderBottomWidth: 1,
        borderColor: '#294C60',
    },
    containerIcon:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
})
