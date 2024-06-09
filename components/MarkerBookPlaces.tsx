import React, {useEffect} from 'react'
import {Marker} from "react-native-maps";
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import {View, StyleSheet} from "react-native";

// @ts-ignore
export default function MarkerBookPlaces({lat,long, description,img, setModalVisible, setSelectedMarker, photo, date, username, photoUser, uniqueId, id}) {
    return (
        <Marker description="Boite à livres" coordinate={{latitude:lat, longitude:long}} >
            <View style={styles.containerIcon}>
                <FontAwesome name={img} size={24} color="#294C60" onPress={()=>{
                    setModalVisible(true)
                    setSelectedMarker({lat:lat, long:long, photo:photo, description:description , date:date, username:username, photoUser:photoUser, uniqueId:uniqueId, id:id})
                }}/>
            </View>
        </Marker>
    )
}

const styles = StyleSheet.create({
    containerIcon:{
        padding:5,
        backgroundColor: 'white',
        borderRadius: 50,
        borderStyle: 'solid',
        borderColor: '#294C60',
        borderWidth: 1,
    }
})

