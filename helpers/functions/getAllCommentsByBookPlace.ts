import {URL_GET_ALL_COMMENTS_BY_BOOK_PLACE} from "@/constants/Url";
import {errorResponse} from "@/constants/errors";

interface BookPlaceIdInfo {
    bookPlaceId: string
}

export const getAllCommentsByBookPlace = async({bookPlaceId} : BookPlaceIdInfo)=>{
    const url = URL_GET_ALL_COMMENTS_BY_BOOK_PLACE(bookPlaceId)
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error(errorResponse(response.status, response.url));
        }
        return await response.json();
}