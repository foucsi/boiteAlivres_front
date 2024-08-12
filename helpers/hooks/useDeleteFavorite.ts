import {showModal} from "@/helpers/functions/showToast";
import {useDispatch} from "react-redux";
import {useMutation} from "react-query";
import {removeFavorite} from "@/redux/favoritesSlice";
import {deleteFavorite} from "@/helpers/functions/deleteFavorite";

export const useDeleteFavorite = (favoriteId:string)=>{
    const dispatch = useDispatch()

    const handleError = (error:unknown)=>{
        console.log("Error deleting favorite:", error);
    }
    const {mutate: delFavorite} = useMutation(()=>deleteFavorite({favoriteId}), {
        onSuccess:()=>{
            dispatch(removeFavorite(favoriteId));
            console.log("favoriteId", favoriteId);
            showModal('Suppression réussie','La boîte à livres a été retirée de vos favoris', 'bottom', 2000)
        },
        onError: handleError
    });

    return {delFavorite}
}