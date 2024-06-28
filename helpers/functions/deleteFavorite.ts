import {log} from "@/utils/logger";
import {URL_DELETE_FAVORITE} from "@/constants/Url";

interface DeleteFavoriteResponse {
    result: boolean;
    message?: string;
}

export const deleteFavorite = async(favoriteId:string)=>{
    log.info(`Attempting to delete favorite with ID: ${favoriteId}`)
        try{
            const response = await fetch(URL_DELETE_FAVORITE(favoriteId),{
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",}
            })
            if(!response.ok){
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data : DeleteFavoriteResponse = await response.json()
            log.info(`Fetch route ${URL_DELETE_FAVORITE} success`)
            if(data.result){
                log.info(`Fetch route ${URL_DELETE_FAVORITE} success`)
            }else {
                log.warn(`Fetch route ${URL_DELETE_FAVORITE} failed`)
            }
        }catch(err){
            log.error(err)
    }
}