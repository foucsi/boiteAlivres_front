import {URL_GET_ALL_BOOK_PLACES} from "@/constants/Url";

export const getAllBookPlaces = async () => {
    try{
        const response = await fetch(URL_GET_ALL_BOOK_PLACES);
        if(!response.ok){
            throw new Error(`HTTP error! status: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        if(data.result){
            return {success: true, bookPlaces: data.bookPlaces}
        }else {
            return {success: false, error: data.error}
        }
    }catch(err){
        return {success: false, error:err}
    }
}