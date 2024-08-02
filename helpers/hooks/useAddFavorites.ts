import {addFavorites} from "@/helpers/functions/addFavorites";
import {addFavoriteReducer} from "@/redux/favoritesSlice";
import {useDispatch, useSelector} from "react-redux";
import {showModal} from "@/helpers/functions/showToast";
import {useMutation} from "react-query";

export const useAddFavorites = (uniqueId:string, bookPlaceId:string) => {
    const dispatch = useDispatch()
    const user = useSelector((state: any) => state.user.value)

    // const addFavorite = async() => {
    //     const result = await addFavorites(uniqueId, bookPlaceId)
    //     if(result.success){
    //         console.log(result.success)
    //         dispatch(addFavoriteReducer(result.favorite))
    //         showModal('Success', 'Boites à livres ajoutées à vos favoris', 'bottom', 4000)
    //     }else {
    //         console.log(result.error)
    //     }
    // }
    // return { addFavorite}
    const {mutate : addFavorite} = useMutation(()=>addFavorites({uniqueId , bookPlaceId}), {
        onError: (error) => {
            console.log(error)
        },
        onSuccess: (data) => {
            console.log(data.success)
            dispatch(addFavoriteReducer(data.favorite))
            showModal('Success', 'Boites à livres ajoutées à vos favoris', 'bottom', 4000)
        }
    })
    return {addFavorite}
}