import { useState } from "react";
import { addComment } from "@/helpers/functions/addComment";
import { useDispatch, useSelector } from "react-redux";
import { addCommentReducer } from "@/redux/commentsSlice";
import { useMutation } from "react-query";
import {RootState} from "@/redux/store";

interface AddCommentProps {
    bookPlaceId: string;
}

interface User {
    uniqueId: string;
}

// @ts-ignore
export const useAddComment = ({bookPlaceId}): AddCommentProps => {
    const [comment, setComment] = useState('');
    const user = useSelector((state:RootState)=>state.user.value) as User;
    const dispatch = useDispatch();

    

    const handleSuccess = (data:{comment:string})=>{
        dispatch(addCommentReducer(data.comment));
        setComment('');
    }

    const handleError = (err:any)=>{
        console.log("Erreur lors de l'ajout du commentaire : ", err);
    }

    const { mutate: newComment } = useMutation(
        () => addComment({ uniqueId: user.uniqueId, bookPlaceId, comment }),
        {
            onSuccess: handleSuccess,
            onError: handleError
        }
    );

    return { comment, setComment, newComment };
};
