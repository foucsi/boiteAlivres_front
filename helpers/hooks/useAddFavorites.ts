import {addFavorites} from "@/helpers/functions/addFavorites";
import {addFavoriteReducer} from "@/redux/favoritesSlice";
import {useDispatch, useSelector} from "react-redux";
import {showModal} from "@/helpers/functions/showToast";
import {useMutation} from "react-query";

export const useAddFavorites = (uniqueId:string, bookPlaceId:string) => {
    const dispatch = useDispatch()
    const {mutate : addFavorite} = useMutation(()=>addFavorites({uniqueId , bookPlaceId}), {
        onError: (error) => {
            console.log(error)
        },
        onSuccess: (data) => {
            // console.log("success: ", data.result)
            dispatch(addFavoriteReducer(data.favorite))
            showModal('Success', 'Boites à livres ajoutées à vos favoris', 'bottom', 4000)
        }
    })
    return {addFavorite}
}