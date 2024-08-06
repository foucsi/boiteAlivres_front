import { getAllCommentsByBookPlace } from "@/helpers/functions/getAllCommentsByBookPlace";
import {useQuery} from "react-query";
import {useSelector} from "react-redux";
import {useEffect} from "react";

export const useGetAllCommentsByBookPlace = (bookPlaceId:string) => {
    // const [comments, setComments] = useState([]);
    // const [error, setError] = useState(null);
    // const [loading, setLoading] = useState(true);
    //
    // @ts-ignore
    const commentReducer = useSelector((state) => state.comment.value);
    //
    // useEffect(() => {
    //     const fetchAllComments = async () => {
    //         setLoading(true);
    //         if (!bookPlaceId) return;
    //             const result = await getAllCommentsByBookPlace(bookPlaceId);
    //             if (result.success) {
    //                 setComments(result.comments);
    //                 setLoading(false);
    //             } else {
    //                 // @ts-ignore
    //                 setError("Impossible de charger les commentaires");
    //             }
    //     };
    //
    //     fetchAllComments();
    // }, [bookPlaceId, commentReducer.comments]);
    //
    // return { comments, error, loading };

    const {data, isLoading, error, refetch} = useQuery("comments", ()=>getAllCommentsByBookPlace(bookPlaceId))
    useEffect(() => {
        refetch()
    }, [commentReducer.comments]);


    return {comments: data?.comments || [], error, isLoading};
};
