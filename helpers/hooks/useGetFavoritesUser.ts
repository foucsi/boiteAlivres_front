import {useEffect, useState} from "react";
import {getFavoritesUser} from "@/helpers/functions/getFavoritesUser";

export const useGetFavoritesUser = (uniqueId:string) => {
    const [favorites, setFavorites] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const getFavorites = async()=>{
        const result = await getFavoritesUser(uniqueId)
    }

    useEffect(() => {
        getFavorites()
    }, [favorites]);

    return {favorites, loading, error}
}