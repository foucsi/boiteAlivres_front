import {URL_ADD_COMMENT} from "@/constants/Url";

export const addComment = async({uniqueId, bookPlaceId, comment} : {uniqueId:string, bookPlaceId:string, comment:string})=>{
    const url = URL_ADD_COMMENT(uniqueId)
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ bookPlaceId : bookPlaceId,comment: comment}),
        })
        if(!response.ok){
            const errorResponse = `HTTP error! status: ${response.status} ${response.statusText}`
            throw new Error(errorResponse);
        }
        return await response.json()
 }