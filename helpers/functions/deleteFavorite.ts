import {log} from "@/utils/logger";
import {URL_DELETE_FAVORITE} from "@/constants/Url";

export const deleteFavorite = async({favoriteId} : {favoriteId: string})=>{
            const response = await fetch(URL_DELETE_FAVORITE(favoriteId),{
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",}
            })
            if(!response.ok){
                const errorResponse = `HHH error! status: ${response.status} => url ${response.url}`
                throw new Error(errorResponse);
            }
            log.info("Favorite deleted")
            return await response.json()
}