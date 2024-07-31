import {removeCommentReducer} from "@/redux/comments";
import {URL_DELETE_COMMENT} from "@/constants/Url";
import {useMutation} from "react-query";
import {useDispatch} from "react-redux";

export const deleteComment = async (uniqueId: string, commentId: string) => {
    const url = URL_DELETE_COMMENT(uniqueId);
    const response = await fetch(url, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ commentId })
    });
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status} ${response.statusText}`);
    }
    return await response.json();
};

export const deleteCommentMutation = ()=>{
    const dispatch = useDispatch();
    const { mutate: delComment, isLoading, error } = useMutation(
        ({ uniqueId, commentId }: { uniqueId: string; commentId: string }) =>
            deleteComment(uniqueId, commentId),
        {
            onSuccess: (data) => {
                console.log("Comment deleted");
                if (data.result) {
                    dispatch(removeCommentReducer());
                } else {
                    console.log(data.error);
                }
            },
            onError: (err) => {
                console.log(err);
            }
        }
    );
    return { delComment, isLoading };
}