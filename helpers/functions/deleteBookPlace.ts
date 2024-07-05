import {URL_DELETE_BOOK_PLACE} from "@/constants/Url";

export const deleteBookPlace = async (id: string) => {
    try{
        const response = await fetch(URL_DELETE_BOOK_PLACE(id), {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        })
    }catch(err){
        console.log(err)
    }
}