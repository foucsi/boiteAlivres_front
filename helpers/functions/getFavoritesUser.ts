import {URL_GET_FAVORITES_USER} from "@/constants/Url";
import {log} from "@/utils/logger";

export const getFavoritesUser = async(uniqueId: string) => {
    try{
        log.info(`fetching favorites user with uniqueId: ${uniqueId} and route: ${URL_GET_FAVORITES_USER}`)
        // @ts-ignore
        const response = await fetch(URL_GET_FAVORITES_USER(uniqueId), {
            method: 'GET',
            headers: {
                "Accept": "application/json"
            }
        })
        if(!response.ok){
            throw new Error(`HTTP error! status: ${response.status} ${response.statusText}`)
        }
        const data = await response.json()
        if(data.result){
            log.info(`getFavoritesUser: Successfully retrieved favorites`)
            return {success: true, data: data.favorites}
        }else {
            log.warn(`getFavoritesUser: Error`, data.error || "Error")
            return {success: false, error: data.error}
        }
    }catch(err){
        console.log(err)
    }
}