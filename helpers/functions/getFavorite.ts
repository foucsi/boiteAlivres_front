import {log} from "@/utils/logger"
import {URL_GET_FAVORITE} from "@/constants/Url";
import {errorResponse} from "@/constants/errors";

interface FavoriteParams {
    uniqueId:string,
    bookPlaceId:string
}

export const getFavorite = async({uniqueId,bookPlaceId} : FavoriteParams) => {
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
}