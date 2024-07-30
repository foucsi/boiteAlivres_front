import {useQuery} from "react-query";
import {getFavoritesUser} from "@/helpers/functions/getFavoritesUser";
import {useSelector} from "react-redux";
import {useEffect} from "react";

type Favorite = any

interface FavoritesUser{
    success: boolean,
    data?: any,
    error?: string
}

export const useGetFavoritesUser = (uniqueId:string) => {
    // // @ts-ignore
    const favo = useSelector((state:any)=> state.favorite.value)
    const {data, isLoading, error, refetch}=useQuery(['favorites', uniqueId], ()=>getFavoritesUser(uniqueId), {
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
        // @ts-ignore
        error: error?.message || error
    }
}