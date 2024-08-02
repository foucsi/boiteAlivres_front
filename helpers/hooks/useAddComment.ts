import {useState} from "react";
import {addComment} from "@/helpers/functions/addComment";
import {useDispatch, useSelector} from "react-redux";
import {addCommentReducer} from "@/redux/comments";
import {useMutation} from "react-query";

// @ts-ignore
export const useAddComment = (bookPlaceId)=>{
    const [comment, setComment] = useState('')
    const user = useSelector((state: any) => state.user.value)
    const dispatch = useDispatch()
    // @ts-ignore
    // const newComment = async()=>{
    //     const result = await addComment(user.uniqueId, bookPlaceId, comment)
    //     if(result.success){
    //         setComment('')
    //         dispatch(addCommentReducer(result.comment))
    //     }else {
    //         console.log("error add comment: ", result.error)
    //     }
    // }
    //
    // return {comment, setComment, newComment}

    const {mutate : newComment} = useMutation(()=> addComment(user.uniqueId, bookPlaceId, comment), {
        onSuccess:(data)=>{
            dispatch(addCommentReducer(data.comment))
            setComment('')
        },
        onError:(err)=> {
            console.log("Error adding comment: ", err)
        }
    })
    return {comment, setComment,newComment}
}