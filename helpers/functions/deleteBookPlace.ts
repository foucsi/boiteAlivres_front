import {URL_DELETE_BOOK_PLACE} from "@/constants/Url";
import {log} from "@/utils/logger";

export const deleteBookPlace = async (id: string) => {
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
        }else {
            log.warn(`Error while deleting place with id: ${id}`)
        }
    }catch(err){
        log.error('Error while')
    }
}