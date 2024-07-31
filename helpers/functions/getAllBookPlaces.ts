import {URL_GET_ALL_BOOK_PLACES} from "@/constants/Url";
import {log} from "@/utils/logger";

export const getAllBookPlaces = async () => {
        log.info("getAllBookPlaces", `Fetching all bookPlaces on url ${URL_GET_ALL_BOOK_PLACES}`);
        const response = await fetch(URL_GET_ALL_BOOK_PLACES);
        if(!response.ok){
            throw new Error(`HTTP error! status: ${response.status} ${response.statusText}`);
        }
        log.info("getAllBookPlaces", "Successfully fetched all book places.");
        return response.json();
}