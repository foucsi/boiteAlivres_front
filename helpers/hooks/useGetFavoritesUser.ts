import {useQuery} from "react-query";
import {getFavoritesUser} from "@/helpers/functions/getFavoritesUser";
import {useSelector} from "react-redux";

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
    const {data, isLoading, error, refetch}=useQuery<FavoritesUser>(['favorites', uniqueId, favo], ()=>getFavoritesUser(uniqueId), {
        enabled: !!uniqueId
    })
    return {
        // @ts-ignore
        favorites: data?.favorites|| [],
        isLoading,
        // @ts-ignore
        error: error?.message || error
    }
}