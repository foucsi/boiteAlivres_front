// import {useEffect, useState} from "react";
import {useQuery} from "react-query";
import {getAllBookPlaces} from "@/helpers/functions/getAllBookPlaces";
import {useSelector} from "react-redux";
import {useEffect} from "react";

export const useGetAllBookPlaces = () => {
    const bookPlace = useSelector((state: any) => state.bookSpace.value)
    const {data, isLoading, error, refetch} = useQuery("bookPlaces", getAllBookPlaces)

    useEffect(() => {
        refetch()
    }, [bookPlace.bookSpaces, bookPlace.description, bookPlace.photo]);

    return {
        bookSpaces: data?.bookPlaces || [],
        isLoading,
        // @ts-ignore
        error : error?.message || "error"
    }
}