import {useQuery} from "react-query";
import {getFavoritesUser} from "@/helpers/functions/getFavoritesUser";
import {useSelector} from "react-redux";

type Favorite = any

interface FavoritesUser{
    success: boolean,
    data?: any,
    error?: string
}

export const useGetFavoritesUser = (uniqueId:string) => {
    const {data, isLoading, error}=useQuery(['favorites', uniqueId], ()=>getFavoritesUser(uniqueId), {
        enabled: !!uniqueId
        //enable sert a verifier si le param uniqueId est bien present
    })

    return {
        favorites: data?.data || [],
        isLoading,
        // @ts-ignore
        error: error?.message || error
    }
}