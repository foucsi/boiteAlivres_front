import {useDispatch} from "react-redux";
import {useMutation} from "react-query";
import {removeCommentReducer} from "@/redux/commentsSlice";
import {deleteComment} from "@/helpers/functions/deleteComment";

export const useDeleteCommentMutation = (uniqueId:string, commentId:string) => {
    const dispatch = useDispatch();
    const { mutate: delComment} = useMutation(()=>deleteComment({uniqueId, commentId}), {
        onSuccess: () => {
            console.log("Comment deleted");
            dispatch(removeCommentReducer());
        },
        onError: (err) => {
            console.log("Error deleting comment:", err);
        }
    });

    // @ts-ignore
    return { delComment};
};