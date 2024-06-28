import {log} from "@/utils/logger";
import {URL_DELETE_FAVORITE} from "@/constants/Url";

export const deleteFavorite = async(favoriteId:string)=>{
    log.info(`Fetch route ${URL_DELETE_FAVORITE} width favoriteId : ${favoriteId}`)
    const url = ""
        try{
            const response = await fetch(URL_DELETE_FAVORITE(favoriteId),{
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",}
            })
        }catch(err){
            console.log(err)
    }
}