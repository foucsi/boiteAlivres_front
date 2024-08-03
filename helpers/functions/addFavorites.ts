import {URL_ADD_FAVORITE} from "@/constants/Url";
import {errorResponse} from "@/constants/errors";

export const addFavorites = async ({uniqueId, bookPlaceId} : {uniqueId:string, bookPlaceId:string})=>{
        const response = await fetch(URL_ADD_FAVORITE(uniqueId, bookPlaceId), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(!response.ok){
            throw new Error(errorResponse(response.status, response.url));
        }
        return await response.json()
}