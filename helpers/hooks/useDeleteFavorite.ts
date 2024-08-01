import {showModal} from "@/helpers/functions/showToast";
import {useDispatch} from "react-redux";
import {useMutation} from "react-query";
import {removeFavorite} from "@/redux/favoritesSlice";
import {deleteFavorite} from "@/helpers/functions/deleteFavorite";

export const useDeleteFavorite = ()=>{
    const dispatch = useDispatch()
    const {mutate: delFavorite} = useMutation(deleteFavorite, {
        onSuccess:()=>{
            console.log("Favorite deleted");
            dispatch(removeFavorite());
            showModal('Suppression réussie','La boîte à livres a été retirée de vos favoris', 'bottom', 2000)
        }
    });
}