import {log} from "@/utils/logger";
import {URL_GET_BOOKPLACE_BY_USER_ID} from "@/constants/Url";

export const getAllBookPlaceByUser = async (uniqueId: string) => {
    try{
        log.info(`fetch all bookPlaceByUser Id with uniqueId: ${uniqueId} and route ${URL_GET_BOOKPLACE_BY_USER_ID}`)
        const response = await fetch(URL_GET_BOOKPLACE_BY_USER_ID(uniqueId), {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if(!response.ok){
            throw new Error(`HTTP error! status: ${response.status} ${response.statusText}`)
        }
        const data = await response.json()


        if(data.result){
            log.info("getAllBookPlaceByUser.ts", "getAllBookPlaceByUser", "Successfully fetched all book places by user.")
            return {success: true, data: data.bookPlaces}
        }else{
            log.warn("getAllBookPlaceByUser.ts", "getAllBookPlaceByUser", data.error)
            return {success: false, error: data.error}
        }
    }catch(err){
        log.warn("getAllBookPlaceByUser.ts", "getAllBookPlaceByUser", err)
        return {success: false, error:err}
    }
}