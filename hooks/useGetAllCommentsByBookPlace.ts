import {useEffect, useState} from "react";
import {getAllCommentsByBookPlace} from "@/functions/getAllCommentsByBookPlace";

// @ts-ignore
export const useGetAllCommentsByBookPlace = async(bookPlaceId)=>{
    const [comments, setComments] = useState([])

    useEffect(()=>{
        const fetchAllComments = async()=>{
            // @ts-ignore
            const result = await getAllCommentsByBookPlace(bookPlaceId)
            if(result.success){
                setComments(result.comments)
            }else{
                // console.log(result.error)
            }
        }
        fetchAllComments()
    }, [bookPlaceId])

    return {comments}
}