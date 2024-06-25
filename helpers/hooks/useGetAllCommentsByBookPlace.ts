import { useEffect, useState } from "react";
import { getAllCommentsByBookPlace } from "@/helpers/functions/getAllCommentsByBookPlace";
import { useSelector } from "react-redux";

export const useGetAllCommentsByBookPlace = (bookPlaceId:string) => {
    const [comments, setComments] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    // @ts-ignore
    const commentReducer = useSelector((state) => state.comment.value);

    useEffect(() => {
        const fetchAllComments = async () => {
            setLoading(true);
            if (!bookPlaceId) return;
                const result = await getAllCommentsByBookPlace(bookPlaceId);
                if (result.success) {
                    setComments(result.comments);
                    setLoading(false);
                } else {
                    // @ts-ignore
                    setError("Impossible de charger les commentaires");
                }
        };

        fetchAllComments();
    }, [bookPlaceId, commentReducer.comments]);

    return { comments, error, loading };
};
