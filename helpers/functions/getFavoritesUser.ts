import {URL_GET_FAVORITES_USER} from "@/constants/Url";
import {log} from "@/utils/logger";

export const getFavoritesUser = async(uniqueId: string) => {
    try{
        log.info(`fetching favorites user with uniqueId: ${uniqueId} and route: ${URL_GET_FAVORITES_USER}`)
        // @ts-ignore
        const response = await fetch(URL_GET_FAVORITES_USER, {
            method: 'GET',
            headers: {
                "Accept": "application/json"
            }
        })
        if(!response.ok){
            throw new Error(`HTTP error! status: ${response.status} ${response.statusText}`)
        }
        const data = await response.json()
    }catch(err){
        console.log(err)
    }
}