import {log} from "@/utils/logger";
import {URL_GET_BOOKPLACE_BY_USER_ID} from "@/constants/Url";

import {errorResponse} from "@/constants/errors";

interface uniqueIdParams{
    uniqueId: string
}

export const getAllBookPlaceByUser = async ({uniqueId} : uniqueIdParams) => {
        log.info(`fetch all bookPlaceByUser Id with uniqueId: ${uniqueId} and route ${URL_GET_BOOKPLACE_BY_USER_ID}`)
        const response = await fetch(URL_GET_BOOKPLACE_BY_USER_ID(uniqueId), {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if(!response.ok){
            throw new Error(errorResponse(response.status, response.url))
        }
        return await response.json()
}