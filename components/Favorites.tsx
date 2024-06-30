import {View, Text, ScrollView, SafeAreaView, StyleSheet} from 'react-native'
import React from 'react'
import {useGetFavoritesUser} from "@/helpers/hooks/useGetFavoritesUser";
import {useSelector} from "react-redux";
import FavoritesUser from "@/components/FavoritesUser";

interface Favorites{
    _id: string,
}

export default function Favorites() {

    // @ts-ignore
    const uniqueId = useSelector((state: Favorites) => state.user.value.uniqueId)

    const {favorites, loading, error} = useGetFavoritesUser(uniqueId)

    if(loading) return <Text>Loading...</Text>
    if(error) return <Text>Erreur: {error}</Text>


    return (
        <SafeAreaView >
            <View style={styles.container}>
                <ScrollView>
                    {favorites.length> 0 ? favorites.map((favorite:any)=>{
                        return <FavoritesUser key={favorite._id} {...favorite}/>
                    }): <Text>Vous n'avez pas encore de favoris</Text>}
                </ScrollView>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:10
    },
})
