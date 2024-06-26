import {useEffect, useState} from "react";
import {getFavoritesUser} from "@/helpers/functions/getFavoritesUser";

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

    const getFavorites = async()=>{
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
    }, [uniqueId])

    return {favorites, loading, error}
}