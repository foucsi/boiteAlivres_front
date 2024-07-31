import {removeCommentReducer} from "@/redux/comments";
import {URL_DELETE_COMMENT} from "@/constants/Url";
import {useMutation} from "react-query";
import {useDispatch} from "react-redux";

export const deleteComment = async(uniqueId:string,commentId:string)=>{
    const url = URL_DELETE_COMMENT(uniqueId)
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
        // const data = await response.json()
        // if(data.result){
        //     dispatch(removeCommentReducer())
        // }else {
        //     console.log(data.error)
        // }
    return await response.json()
}

export const deleteCommentMutation = ()=>{
    const dispatch = useDispatch()
    const {mutate : delComment, isLoading, error} = useMutation(deleteComment, {
        onSuccess:()=>{
            console.log("Comment deleted")
            dispatch(removeCommentReducer())
        },
        onError:(err)=>{
            console.log(err)
        }
    })

    return {delComment, isLoading, error}
}