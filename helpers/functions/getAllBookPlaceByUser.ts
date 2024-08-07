import {log} from "@/utils/logger";
import {URL_GET_BOOKPLACE_BY_USER_ID} from "@/constants/Url";

import {errorResponse} from "@/constants/errors";

export const getAllBookPlaceByUser = async (uniqueId: string) => {
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
        const data = await response.json()


        if(data.result){
            log.info("getAllBookPlaceByUser.ts", "getAllBookPlaceByUser", "Successfully fetched all book places by user.")
            return {success: true, data: data.bookPlaces.length}
        }else{
            log.warn("getAllBookPlaceByUser.ts", "getAllBookPlaceByUser", data.error)
            return {success: false, error: data.error}
        }
}