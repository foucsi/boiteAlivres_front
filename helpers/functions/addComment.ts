import {URL_ADD_COMMENT} from "@/constants/Url";
import {errorResponse} from "@/constants/errors";

interface addCommentParams {
    uniqueId: string;
    bookPlaceId: string;
    comment: string;
}

export const addComment = async({uniqueId, bookPlaceId, comment} : addCommentParams)=>{
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