import {useMutation} from "react-query";
import {deleteBookPlace} from "@/helpers/functions/deleteBookPlace";
import {useDispatch} from "react-redux";
import {showModal} from "@/helpers/functions/showToast";
import {removeBookSpace} from "@/redux/bookSpaces";

export const useDeleteBookPlace = () => {
    const dispatch = useDispatch()
    const {mutate: deleteBook} = useMutation(deleteBookPlace, {
        onError: (error) => {
            console.log(error)
        },
        onSuccess: () => {
            dispatch(removeBookSpace())
            showModal('success', 'Boite à livres supprimé!', 'bottom',200
    });
    return {deleteBook}
}