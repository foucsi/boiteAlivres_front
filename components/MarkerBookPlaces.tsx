import React from 'react'
import {Marker} from "react-native-maps";
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import {View, StyleSheet} from "react-native";

// @ts-ignore
export default function MarkerBookPlaces({lat,long, description,img, setModalVisible, setSelectedMarker, photo, date, username, photoUser, uniqueId}) {
    return (
        <Marker description={description} coordinate={{latitude:lat, longitude:long}} >
            <View style={styles.containerIcon}>
                <FontAwesome name={img} size={24} color="black" onPress={()=>{
                    setModalVisible(true)
                    setSelectedMarker({lat:lat, long:long, photo:photo, description:description , date:date, username:username, photoUser:photoUser, uniqueId:uniqueId})
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
        borderColor: 'black',
        borderWidth: 1,
    }
})

