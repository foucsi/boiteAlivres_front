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
    // @ts-ignore
    const {data, isLoading, error, refetch}=useQuery<FavoritesUser>(['favorites', uniqueId], ()=>getFavoritesUser(uniqueId), {
        enabled: !!uniqueId
        // enabled means that the query will not run until the uniqueId is not null
    })

    useEffect(() => {
        if(uniqueId){
            refetch()
        }
    }, [favo])
    return {
        // @ts-ignore
        favorites: data?.data || [],
        isLoading,
        // @ts-ignore
        error: error?.message || error
    }
}