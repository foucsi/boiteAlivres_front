import {removeCommentReducer} from "@/redux/comments";

export const deleteComment = async(uniqueId:string,commentId:string, dispatch:any)=>{
    const url = `http://localhost:3000/comments/removeComment/${uniqueId}`
    try{

    }catch (err){
        console.log(err)
    }
}