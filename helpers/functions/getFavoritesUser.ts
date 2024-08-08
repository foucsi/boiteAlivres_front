import {URL_GET_FAVORITES_USER} from "@/constants/Url";
import {log} from "@/utils/logger";
import {errorResponse} from "@/constants/errors";

interface getFavoritesUserProps {
    uniqueId: string
}

export const getFavoritesUser = async({uniqueId} : getFavoritesUserProps) => {
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
       return await response.json()
}