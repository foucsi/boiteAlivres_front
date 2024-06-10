import {removeCommentReducer} from "@/redux/comments";

export const deleteComment = async(uniqueId:string,commentId:string, dispatch:any)=>{
    const url = `http://localhost:3000/comments/removeComment/${uniqueId}`
    try{
        const response = await fetch(url,{
            method:"DELETE",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({commentId})
        })
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