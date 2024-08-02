import { useState } from "react";
import { addComment } from "@/helpers/functions/addComment";
import { useDispatch, useSelector } from "react-redux";
import { addCommentReducer } from "@/redux/comments";
import { useMutation } from "react-query";

// @ts-ignore
export const useAddComment = (bookPlaceId) => {
    const [comment, setComment] = useState('');
    const user = useSelector((state: any) => state.user.value);
    const dispatch = useDispatch();

    const { mutate: newComment } = useMutation(
        async () => await addComment({ uniqueId: user.uniqueId, bookPlaceId, comment }),
        {
            onSuccess: (data) => {
                dispatch(addCommentReducer(data.comment));
                setComment('');
            },
            onError: (err) => {
                console.log("Erreur lors de l'ajout du commentaire : ", err);
            }
        }
    );

    return { comment, setComment, newComment };
};
