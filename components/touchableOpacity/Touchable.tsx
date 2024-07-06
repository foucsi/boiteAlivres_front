import {View, Text, TouchableOpacity} from 'react-native'
import React from 'react'
import {AntDesign} from "@expo/vector-icons";

// @ts-ignore
export default function Touchable({onPress, nameIcon}) {
    return (
        <TouchableOpacity onPress={onPress}>
            <AntDesign name={nameIcon} size={28} color="#F7F9F9" />
        </TouchableOpacity>
    )
}
