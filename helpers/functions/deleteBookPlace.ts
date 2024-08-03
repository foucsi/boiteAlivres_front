import {URL_DELETE_BOOK_PLACE} from "@/constants/Url";
import {log} from "@/utils/logger";
import {removeBookSpace} from "@/redux/bookSpaces";
import {showModal} from "@/helpers/functions/showToast";

interface DeleteBookSpaceParams {
    id: string;
    dispatch: any;
}

export const deleteBookPlace = async ({id, dispatch} :DeleteBookSpaceParams ) => {
    try{
        log.info(`Fetching DELETE ${URL_DELETE_BOOK_PLACE(id)} with id: ${id}`)
        const response = await fetch(URL_DELETE_BOOK_PLACE(id), {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        if(!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        if(data.result){
            log.info(`Deleted place with id success: ${id}`)
            dispatch(removeBookSpace())
            showModal('success', 'Boite à livres supprimé!', 'bottom',2000)
        }else {
            log.warn(`Error while deleting place with id: ${id}`)
        }
    }catch(err){
        log.error('Error while')
    }
}