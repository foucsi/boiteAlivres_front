import {useEffect, useState} from "react";
import {getFavoritesUser} from "@/helpers/functions/getFavoritesUser";

interface favoritesUser{
    success: boolean,
    data?: any,
    error?: string
}

export const useGetFavoritesUser = (uniqueId:string) => {
    const [favorites, setFavorites] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const getFavorites = async()=>{
        setLoading(true)
        const result = await getFavoritesUser(uniqueId)
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