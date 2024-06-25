import {useState} from "react";
import {addFavorites} from "@/helpers/functions/addFavorites";

export const useAddFavorites = (uniqueId:string, bookPlaceId:string) => {
    const [favorites, setFavorites] = useState(false)

    const addFavorite = async() => {
        const result = await addFavorites(uniqueId, bookPlaceId)
        if(result.success){
            setFavorites(true)
        }else {
            console.log(result.error)
        }
    }
    return {favorites, setFavorites, addFavorite}
}