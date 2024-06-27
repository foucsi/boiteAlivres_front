import {useEffect, useState} from "react";
import {getFavoritesUser} from "@/helpers/functions/getFavoritesUser";
import {useSelector} from "react-redux";

type Favorite = any

interface FavoritesUser{
    success: boolean,
    data?: any,
    error?: string
}

export const useGetFavoritesUser = (uniqueId:string) => {
    const [favorites, setFavorites] = useState<Favorite[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    // @ts-ignore
    const favo = useSelector((state)=> state.favorite.value)

    const getFavorites = async()=>{
        console.log("favo:", favo)
        setLoading(true)
        // @ts-ignore
        const result :FavoritesUser = await getFavoritesUser(uniqueId)
        if(result.success){
            setFavorites(result.data)
            setLoading(false)
        }else {
            setError(result.error || "Une erreur est survenue")
            setLoading(false)
        }
    }

    useEffect(() => {
        getFavorites()
    }, [uniqueId, favo])

    return {favorites, loading, error}
}