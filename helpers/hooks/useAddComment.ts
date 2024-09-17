import { useState } from "react";
import { addComment } from "@/helpers/functions/addComment";
import { useDispatch, useSelector } from "react-redux";
import { addCommentReducer } from "@/redux/commentsSlice";
import { useMutation } from "react-query";

interface AddCommentProps {
    bookPlaceId: string;
}

interface User {
    uniqueId: string;
}

// @ts-ignore
export const useAddComment = ({bookPlaceId}): AddCommentProps => {
    const [comment, setComment] = useState('');
    const user = useSelector((state:any)=>state.user.value)
    const dispatch = useDispatch();
    

    

    const { mutate: newComment } = useMutation(
        () => addComment({ uniqueId: user.uniqueId, bookPlaceId, comment }),
        {
            onSuccess: (data: { comment: string }) => {
                if (data?.comment) {
                    dispatch(addCommentReducer(data.comment));
                    setComment('');
                } else {
                    console.warn('Received invalid data in handleSuccess');
                }
            },
            onError: (error: Error) => {
                console.error("Error adding comment:", error.message);
            }
        }
    );

    return { comment, setComment, newComment };
};
