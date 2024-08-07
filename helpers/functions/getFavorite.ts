import {log} from "@/utils/logger"
import {URL_GET_FAVORITE} from "@/constants/Url";
const {errorResponse} = require("@/utils/responses")

export const getFavorite = async(uniqueId:string, bookPlaceId:string) => {
        const response = await fetch(URL_GET_FAVORITE(uniqueId, bookPlaceId), {
            method:"GET",
            headers: {
                "Accept":"application/json"
            }
        })
        if (!response.ok) {
            throw new Error(errorResponse(response.status, response.url));
        }
        return await response.json()
        // const data = await response.json()
        // if(data.result){
        //     log.info(`getFavorite: Successfully retrieved favorite`);
        //     return {success: true, data: data.result}
        // }else {
        //     log.warn(`getFavorite:`, data.error, response.status)
        //     return {success: false, error: data.error}
        // }
}