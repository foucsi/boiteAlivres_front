import {addFavorites} from "@/helpers/functions/addFavorites";

export const useAddFavorites = (uniqueId:string, bookPlaceId:string) => {
    const addFavorite = async() => {
        const result = await addFavorites(uniqueId, bookPlaceId)
        if(result.success){
            console.log(result.success)
        }else {
            console.log(result.error)
        }
    }
    return { addFavorite}
}