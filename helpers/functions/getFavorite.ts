import {log} from "@/utils/logger"
import {URL_GET_FAVORITE} from "@/constants/Url";

export const getFavorite = async(uniqueId:string, bookPlaceId:string) => {
    try{
        log.info(`getFavorite: Fetching data for user ${uniqueId} and bookPlace ${bookPlaceId}`);
        const response = await fetch(URL_GET_FAVORITE(uniqueId, bookPlaceId), {
            method:"GET",
            headers: {
                "Accept":"application/json"
            }
        })
        if(!response.ok){
            throw new Error(`HTTP error! status: ${response.status} ${response.statusText}`)
        }
        const data = await response.json()
        if(data.result){
            log.info(`getFavorite: Successfully retrieved favorite`);
            return {success: true, data: data.result}
        }else {
            log.warn(`getFavorite: Error`, data.error || "Error")
            return {success: false, error: data.error}
        }
    }catch(err){
        log.error(`getFavorite: Error`, err)
        return {success: false, error: err}
    }
}