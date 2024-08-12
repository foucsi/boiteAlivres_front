import {useMutation} from "react-query";
import {deleteBookPlace} from "@/helpers/functions/deleteBookPlace";
import {useDispatch} from "react-redux";
import {showModal} from "@/helpers/functions/showToast";
import {removeBookSpace} from "@/redux/bookSpacesSlice";

export const useDeleteBookPlace = () => {
    const dispatch = useDispatch()

    const handleError = (error : unknown) => {
        console.log(error)
    }
    const {mutate: deleteBook} = useMutation(deleteBookPlace, {
        onError: handleError,
        onSuccess: () => {
            console.log("Deleted place with id success")
            dispatch(removeBookSpace())
            showModal('success', 'Boite à livres supprimé!', 'bottom',200)
        }
    });
    return {deleteBook}
}