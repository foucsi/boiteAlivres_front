import {useDispatch} from "react-redux";
import {useMutation} from "react-query";
import {removeCommentReducer} from "@/redux/comments";
import {deleteComment} from "@/helpers/functions/deleteComment";

export const useDeleteCommentMutation = () => {
    const dispatch = useDispatch();
    const { mutate: delComment, isLoading, error } = useMutation(deleteComment, {
        onSuccess: () => {
            console.log("Comment deleted");
            dispatch(removeCommentReducer());
        },
        onError: (err) => {
            console.log("Error deleting comment:", err);
        }
    });

    // @ts-ignore
    return { delComment, isLoading, error : error?.message || "error" };
};