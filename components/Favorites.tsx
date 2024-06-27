import {View, Text} from 'react-native'
import React from 'react'
import {useGetFavoritesUser} from "@/helpers/hooks/useGetFavoritesUser";
import {useSelector} from "react-redux";
import FavoritesUser from "@/components/FavoritesUser";

export default function Favorites() {

    const uniqueId = useSelector((state: any) => state.user.value.uniqueId)

    const {favorites, loading, error} = useGetFavoritesUser(uniqueId)

    if(loading) return <Text>Loading...</Text>
    if(error) return <Text>Erreur: {error}</Text>


    return (
        <View>
            {favorites.map((favorite:any)=>{
                return <FavoritesUser key={favorite._id}/>
            })}
        </View>
    )
}
