import {URL_DELETE_BOOK_PLACE} from "@/constants/Url";
import {log} from "@/utils/logger";

export const deleteBookPlace = async (id: string) => {
    try{
        const response = await fetch(URL_DELETE_BOOK_PLACE(id), {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        const data = await response.json()
        if(data.result){
            console.log('Place deleted')
        }
    }catch(err){
        console.log(err)
    }
}