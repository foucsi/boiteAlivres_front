import {useEffect, useState} from "react";
import {getAllCommentsByBookPlace} from "@/functions/getAllCommentsByBookPlace";

// @ts-ignore
export const useGetAllCommentsByBookPlace = (bookPlaceId)=>{
    const [comments, setComments] = useState([])
    const [error, setError] = useState(null)

    useEffect(()=>{
        const fetchAllComments = async()=>{
            const result = await getAllCommentsByBookPlace(bookPlaceId)
            if(result.success){
                setComments(result.comments)
            }else{
                console.log(result.error)
                setError(result.error)
            }
        }
        fetchAllComments()
    }, [bookPlaceId])

    return {comments}
}