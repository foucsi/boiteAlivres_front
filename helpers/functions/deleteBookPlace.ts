import {URL_DELETE_BOOK_PLACE} from "@/constants/Url";
import {log} from "@/utils/logger";
import {errorResponse} from "@/constants/errors";

interface DeleteBookSpaceParams {
    id: string;
}

export const deleteBookPlace = async ({id} :DeleteBookSpaceParams ) => {
        log.info(`Fetching DELETE ${URL_DELETE_BOOK_PLACE(id)} with id: ${id}`)
        const response = await fetch(URL_DELETE_BOOK_PLACE(id), {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        if(!response.ok){
            throw new Error(errorResponse(response.status, response.url));
        }
        return await response.json()
}