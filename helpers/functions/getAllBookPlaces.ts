import {URL_GET_ALL_BOOK_PLACES} from "@/constants/Url";
import {errorResponse} from "@/constants/errors";

export const getAllBookPlaces = async () => {
        const response = await fetch(URL_GET_ALL_BOOK_PLACES);
        if(!response.ok){
            throw new Error(errorResponse(response.status, response.url));
        }
        return await response.json();
}