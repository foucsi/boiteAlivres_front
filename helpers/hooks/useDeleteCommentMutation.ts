import {useDispatch} from "react-redux";
import {useMutation} from "react-query";
import {removeCommentReducer} from "@/redux/commentsSlice";
import {deleteComment} from "@/helpers/functions/deleteComment";

export const useDeleteCommentMutation = (uniqueId:string, commentId:string) => {
    const dispatch = useDispatch();

    const handleError = (error: unknown) => {
        console.error("Error deleting comment:", error);
    }

    const handleSuccess = ()=>{
        console.log("Comment deleted");
        dispatch(removeCommentReducer());
    }
    const { mutate: delComment} = useMutation(()=>deleteComment({uniqueId, commentId}), {
        onSuccess: handleSuccess,
        onError: handleError
    });

    // @ts-ignore
    return { delComment};
};