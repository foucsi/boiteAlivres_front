import {addFavorites} from "@/helpers/functions/addFavorites";
import {addFavoriteReducer} from "@/redux/favoritesSlice";
import {useDispatch} from "react-redux";
import {showModal} from "@/helpers/functions/showToast";
import {useMutation} from "react-query";

// import interface Favorite
import {FavoriteResponse} from "@/helpers/types";

/**
 * Custom hook to handle adding a favorite book place.
 * @param uniqueId - The unique identifier of the user.
 * @param bookPlaceId - The identifier of the book place.
 * @returns A mutation function to trigger the add favorite action.
 */


export const useAddFavorites = (uniqueId:string, bookPlaceId:string) => {
    const dispatch = useDispatch()

    const handleError = (error:unknown) => {
        console.error(`[useAddFavorites] Failed to add favorite. UniqueID: ${uniqueId}, BookPlaceID: ${bookPlaceId}`, error)
    }

    /**
     * Success handler for add favorite mutation.
     * @param data - The response data from the addFavorite API call.
     */

    const handleSuccess = (data:FavoriteResponse) => {
        dispatch(addFavoriteReducer(data.favorite))
        showModal('Success', 'Boites à livres ajoutées à vos favoris', 'bottom', 4000)
    }

    const {mutate : addFavorite} = useMutation(()=>addFavorites({uniqueId , bookPlaceId}), {
        onError: handleError,
        onSuccess: handleSuccess
    })
    return {addFavorite}
}