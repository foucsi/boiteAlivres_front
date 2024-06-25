import {URL_GET_ALL_BOOK_PLACES} from "@/constants/Url";
import {log} from "@/utils/logger";

export const getAllBookPlaces = async () => {
    try{
        log.info("getAllBookPlaces.ts", "getAllBookPlaces", "Fetching all book places.")
        const response = await fetch(URL_GET_ALL_BOOK_PLACES);
        if(!response.ok){
            throw new Error(`HTTP error! status: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        if(data.result){
            log.info("getAllBookPlaces.ts", "getAllBookPlaces", "Successfully fetched all book places.")
            return {success: true, bookPlaces: data.bookPlaces}
        }else {
            log.error("getAllBookPlaces.ts", "getAllBookPlaces", data.error)
            return {success: false, error: data.error}
        }
    }catch(err){
        log.error("getAllBookPlaces.ts", "getAllBookPlaces", err)
        return {success: false, error:err}
    }
}