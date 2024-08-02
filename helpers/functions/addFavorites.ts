import {URL_ADD_FAVORITE} from "@/constants/Url";

export const addFavorites = async (uniqueId:string, bookPlaceId:string)=>{
        const response = await fetch(URL_ADD_FAVORITE(uniqueId, bookPlaceId), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(!response.ok){
            const errorResponse = `HTTP error! status: ${response.status} ${response.statusText}`
            throw new Error(errorResponse);
        }
        return await response.json()
}