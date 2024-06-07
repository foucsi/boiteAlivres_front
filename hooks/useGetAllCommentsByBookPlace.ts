import {useEffect, useState} from "react";
import {getAllCommentsByBookPlace} from "@/functions/getAllCommentsByBookPlace";

export const useGetAllCommentsByBookPlace = async()=>{
    const [comments, setComments] = useState([])

    useEffect(()=>{
        const fetchAllComments = async()=>{
            const result = await getAllCommentsByBookPlace(bookPlaceId)
            if(result.success){
                setComments(result.comments)
            }else{
                console.log(result.error)
            }
        }
        fetchAllComments()
    }, [])

    return {comments}
}