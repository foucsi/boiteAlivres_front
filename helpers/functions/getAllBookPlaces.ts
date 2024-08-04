import {URL_GET_ALL_BOOK_PLACES} from "@/constants/Url";
import {log} from "@/utils/logger";

export const getAllBookPlaces = async () => {
        const response = await fetch(URL_GET_ALL_BOOK_PLACES);
        if(!response.ok){
            throw new Error(`HTTP error! status: ${response.status} ${response.statusText}`);
        }
        log.info("getAllBookPlaces", "Successfully fetched all book places.");
        return await response.json();
}