import {useQuery} from "react-query";
import {getFavoritesUser} from "@/helpers/functions/getFavoritesUser";
import {useSelector} from "react-redux";
import {useEffect} from "react";

interface Favorite {
    _id: string,
    bookPlace: string,
    user:string,
    date_added: string,
}

interface FavoritesUser{
    success: boolean,
    data?: Favorite[],
    error?: string
}

export const useGetFavoritesUser = (uniqueId:string) => {
    const favo = useSelector((state:any)=> state.favorite.value)
    const {data, isLoading, error, refetch}=useQuery<FavoritesUser, Error>(['favorites', uniqueId], ()=>getFavoritesUser(uniqueId), {
        enabled: !!uniqueId

    })

    useEffect(() => {
        if(uniqueId){
            refetch()
        }
    }, [favo])

    return {
        favorites: data?.data || [],
        isLoading,
        error: error?.message || error
    }
}