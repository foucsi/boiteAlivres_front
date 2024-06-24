import {removeCommentReducer} from "@/redux/comments";
import {URL_DELETE_COMMENT} from "@/constants/Url";

export const deleteComment = async(uniqueId:string,commentId:string, dispatch:any)=>{
    // const url = `http://localhost:3000/comments/removeComment/${uniqueId}`
    const url = URL_DELETE_COMMENT(uniqueId)
    try{
        const response = await fetch(url,{
            method:"DELETE",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({commentId})
        })
        if(!response.ok){
            throw new Error(`HTTP error! status: ${response.status} ${response.statusText}`)
        }
        const data = await response.json()
        if(data.result){
            dispatch(removeCommentReducer())
        }else {
            console.log(data.error)
        }
    }catch (err){
        console.log(err)
    }
}