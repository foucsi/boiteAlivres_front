import {log} from "@/utils/logger";
import {URL_DELETE_FAVORITE} from "@/constants/Url";

export const deleteFavorite = async(favoriteId:string)=>{
    log.info(`Fetch route ${URL_DELETE_FAVORITE} width favoriteId : ${favoriteId}`)
        try{
            const response = await fetch(URL_DELETE_FAVORITE(favoriteId),{
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",}
            })
            if(!response.ok){
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json()
            log.info(`Fetch route ${URL_DELETE_FAVORITE} success`)
            return data
        }catch(err){
            console.log(err)
    }
}