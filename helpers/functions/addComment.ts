import {URL_ADD_COMMENT} from "@/constants/Url";

export const addComment = async(uniqueId:string, bookPlaceId:string, comment:string)=>{
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
        // const data = await response.json()
        // if(data.result){
        //     return {success:true, comment:data.comment}
        // }else {
        //     return {success:false, error:data.error}
        // }
 }