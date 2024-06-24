import {View, Text} from 'react-native'
import React from 'react'

interface FeaturesUser{
    _id: string,
    feature: string,
    feat: any,
    description: string

}

export default function Features({feat}:FeaturesUser) {
    const {feature, description} = feat
    return (
        <View>
            <Text>Fonctionnalitée: {feature}</Text>
            <Text>Description : {description}</Text>
        </View>
    )
}
