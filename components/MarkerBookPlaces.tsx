import React from 'react'
import {Marker} from "react-native-maps";
import { FontAwesome } from '@expo/vector-icons';
import {View, StyleSheet} from "react-native";

// @ts-ignore
export default function MarkerBookPlaces({lat,long, description,img, setModalVisible, setSelectedMarker, photo, date, username, photoUser, uniqueId, id, status}) {
    return (
        <Marker description="Boite à livres" coordinate={{latitude:lat, longitude:long}} >
            <View style={styles(status).containerIcon}>
                <FontAwesome name={img} size={24} color={status === "pending" ? "orange" : "#294C60"}  onPress={()=>{
                    setModalVisible(true)
                    setSelectedMarker({lat:lat, long:long, photo:photo, description:description , date:date, username:username, photoUser:photoUser, uniqueId:uniqueId, id:id})
                }}/>
            </View>
        </Marker>
    )
}

const styles = (status:any) => StyleSheet.create({
    containerIcon:{
        padding:5,
        backgroundColor: 'white',
        borderRadius: 50,
        borderStyle: 'solid',
        borderColor: status === "pending"? "orange":'#294C60',
        borderWidth: 1,
    }
})

