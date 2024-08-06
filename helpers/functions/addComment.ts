import {URL_ADD_COMMENT} from "@/constants/Url";
import {errorResponse} from "@/constants/errors";

export const addComment = async({uniqueId, bookPlaceId, comment} : {uniqueId:string, bookPlaceId:string, comment:string})=>{
    const url = URL_ADD_COMMENT(uniqueId)
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ bookPlaceId,comment}),
        })
        if(!response.ok){
            throw new Error(errorResponse(response.status, response.url));
        }
        return await response.json()
 }