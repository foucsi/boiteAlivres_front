import {log} from "@/utils/logger";
import {URL_DELETE_FAVORITE} from "@/constants/Url";

export const deleteFavorite = async({favoriteId} : {favoriteId: string})=>{
            const response = await fetch(URL_DELETE_FAVORITE(favoriteId),{
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",}
            })
            if(!response.ok){
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            log.info("Favorite deleted")
            return response.json()
}