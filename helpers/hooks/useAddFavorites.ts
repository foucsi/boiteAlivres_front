import {addFavorites} from "@/helpers/functions/addFavorites";
import {addFavoriteReducer} from "@/redux/favoritesSlice";
import {useDispatch} from "react-redux";
import {showModal} from "@/helpers/functions/showToast";
import {useMutation} from "react-query";

export const useAddFavorites = (uniqueId:string, bookPlaceId:string) => {
    const dispatch = useDispatch()

    const handleError = (error:unknown) => {
        console.log("Error add favorite :", error)
    }

    const handleSuccess = (data:any) => {
        dispatch(addFavoriteReducer(data.favorite))
        showModal('Success', 'Boites à livres ajoutées à vos favoris', 'bottom', 4000)
    }

    const {mutate : addFavorite} = useMutation(()=>addFavorites({uniqueId , bookPlaceId}), {
        onError: handleError,
        onSuccess: handleSuccess
    })
    return {addFavorite}
}