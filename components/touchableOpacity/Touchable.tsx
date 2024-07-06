import {View, Text, TouchableOpacity} from 'react-native'
import React from 'react'
import {AntDesign} from "@expo/vector-icons";

// @ts-ignore
export default function Touchable({onPress, nameIcon, size, color}) {
    return (
        <TouchableOpacity onPress={onPress}>
            <AntDesign name={nameIcon} size={size} color={color}/>
        </TouchableOpacity>
    )
}
