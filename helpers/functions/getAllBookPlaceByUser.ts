import {log} from "@/utils/logger";
import {URL_GET_BOOKPLACE_BY_USER_ID} from "@/constants/Url";

export const getAllBookPlaceByUser = async (uniqueId: string) => {
    try{
        const response = await fetch(URL_GET_BOOKPLACE_BY_USER_ID(uniqueId))
        const data = await response.json()

        if(data.result){
            return {success: true, data: data.bookPlaces}
        }else{
            return {success: false, error: data.error}
        }
    }catch(err){
        log.warn("getAllBookPlaceByUser.ts", "getAllBookPlaceByUser", err)
        return {success: false, error:err}
    }
}