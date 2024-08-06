import { getAllCommentsByBookPlace } from "@/helpers/functions/getAllCommentsByBookPlace";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import {RootState} from "@reduxjs/toolkit/query";

export const useGetAllCommentsByBookPlace = (bookPlaceId: string) => {
    // @ts-ignore
    const commentReducer = useSelector((state: RootState) => state.comment.value);

    const { data, isLoading, error } = useQuery(
        ["comments", bookPlaceId, commentReducer.comments],
        () => getAllCommentsByBookPlace({ bookPlaceId }),
        { enabled: !!bookPlaceId }
    );

    return {
        comments: data?.comments || [],
        error: error ? "Impossible de charger les commentaires" : null,
        isLoading
    };
};