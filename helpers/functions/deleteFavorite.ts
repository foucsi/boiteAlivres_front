import {URL_DELETE_FAVORITE} from "@/constants/Url";
import {errorResponse} from "@/constants/errors";

interface deleteFavoriteProps {
    favoriteId: string
}

export const deleteFavorite = async({favoriteId} :deleteFavoriteProps)=>{
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