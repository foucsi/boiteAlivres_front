import {useState} from "react";
import {addComment} from "@/functions/addComment";
import {useDispatch, useSelector} from "react-redux";
import {addCommentReducer} from "@/redux/comments";

// @ts-ignore
export const useAddComment = (bookPlaceId)=>{
    const [comment, setComment] = useState('')
    const [success, setSuccess] = useState(false)
    const user = useSelector((state: any) => state.user.value)
    const dispatch = useDispatch()
    // @ts-ignore
    const newComment = async()=>{
        const result = await addComment(user.uniqueId, bookPlaceId, comment)
        if(result.success){
            setComment('')
            dispatch(addCommentReducer(result.comment))
            setSuccess(true)
        }else {
            console.log("error add comment: ", result.error)
        }
    }

    return {comment, setComment, newComment, success}
}