import {useEffect, useState, useCallback} from "react";
import {getFavorite} from "@/helpers/functions/getFavorite";

export const useGetFavorite = (uniqueId:string, bookPlaceId:string) => {
    const [isFavorite, setIsFavorite] = useState<boolean>(false)

    const fetchIsFavorite = useCallback(async() => {
        if(!bookPlaceId || bookPlaceId === null){
            return
        }
        const response = await getFavorite(uniqueId, bookPlaceId)
        if(response.success){
            setIsFavorite(true)
        }else{
            setIsFavorite(false)
        }
    }, [uniqueId, bookPlaceId])


    useEffect(()=>{
        fetchIsFavorite()
    }, [fetchIsFavorite])

    return {isFavorite}
}