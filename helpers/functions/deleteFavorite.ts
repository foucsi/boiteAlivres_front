import {URL_DELETE_FAVORITE} from "@/constants/Url";
import {errorResponse} from "@/constants/errors";

export const deleteFavorite = async({favoriteId} : {favoriteId: string})=>{
            const response = await fetch(URL_DELETE_FAVORITE(favoriteId),{
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",}
            })
            if(!response.ok){
                throw new Error(errorResponse(response.status, response.url));
            }
            return await response.json()
}