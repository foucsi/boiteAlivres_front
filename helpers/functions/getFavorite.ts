import {log} from "@/utils/logger"
import {URL_GET_FAVORITE} from "@/constants/Url";

export const getFavorite = async(uniqueId:string, bookPlaceId:string) => {
    try{
        log.info(`getFavorite: Fetching data for user ${uniqueId} and bookPlace ${bookPlaceId} on url${URL_GET_FAVORITE(uniqueId, bookPlaceId)}`);
        const response = await fetch(URL_GET_FAVORITE(uniqueId, bookPlaceId), {
            method:"GET",
            headers: {
                "Accept":"application/json"
            }
        })
        // si la requete n'est pas ok
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json()
        if(data.result){
            log.info(`getFavorite: Successfully retrieved favorite`);
            return {success: true, data: data.result}
        }else {
            log.warn(`getFavorite:`, data.error, response.status)
            return {success: false, error: data.error}
        }
    }catch(err){
        log.error(`getFavorite: `, err)
        return {success: false, error: err}
    }
}