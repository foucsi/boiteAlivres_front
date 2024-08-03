import {URL_DELETE_COMMENT} from "@/constants/Url";
import {errorResponse} from "@/constants/errors";

interface DeleteCommentParams{
    uniqueId: string;
    commentId: string;
}

export const deleteComment = async ({ uniqueId, commentId }: DeleteCommentParams) => {
    const url = URL_DELETE_COMMENT(uniqueId);
    const response = await fetch(url, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ commentId })
    });
    if (!response.ok) {
        throw new Error(errorResponse(response.status, response.url));
    }
    return response.json();
};
