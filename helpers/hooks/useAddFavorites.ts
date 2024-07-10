import {addFavorites} from "@/helpers/functions/addFavorites";
import {addFavoriteReducer} from "@/redux/favoritesSlice";
import {useDispatch, useSelector} from "react-redux";
import {showModal} from "@/helpers/functions/showToast";

export const useAddFavorites = (uniqueId:string, bookPlaceId:string) => {
    const dispatch = useDispatch()

    const addFavorite = async() => {
        const result = await addFavorites(uniqueId, bookPlaceId)
        if(result.success){
            console.log(result.success)
            dispatch(addFavoriteReducer(result.favorite))
            showModal('Success', 'Added to favorites', 'bottom')
        }else {
            console.log(result.error)
        }
    }
    return { addFavorite}
}