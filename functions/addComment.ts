import {URL_ADD_COMMENT} from "@/constants/Url";

export const addComment = async(uniqueId:string, bookPlaceId:string, comment:string)=>{
    // const url=`http://localhost:3000/comments/addComment/${uniqueId}`
    const url = URL_ADD_COMMENT(uniqueId)
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ bookPlaceId : bookPlaceId,comment: comment}),
        })
        if(!response.ok){
            throw new Error(`HTTP error! status: ${response.status} ${response.statusText}`);
        }
        const data = await response.json()
        if(data.result){
            return {success:true, comment:data.comment}
        }else {
            return {success:false, error:data.error}
        }
    }
    catch(err){
    return {success:false, error:err}
}}