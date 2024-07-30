// import {useEffect, useState} from "react";
import {useQuery} from "react-query";
import {getAllBookPlaces} from "@/helpers/functions/getAllBookPlaces";
import {useSelector} from "react-redux";
import {useEffect} from "react";

export const useGetAllBookPlaces = () => {
    // const [bookSpaces, setBookSpaces] = useState([]);
    const bookPlace = useSelector((state: any) => state.bookSpace.value)
    // useEffect(()=>{
    //     const fetchBookPlaces = async()=>{
    //         const result = await getAllBookPlaces()
    //         if(result.success){
    //             setBookSpaces(result.bookPlaces)
    //         }else {
    //             console.log(result.error)
    //         }
    //     }
    //    fetchBookPlaces()
    // }, [bookPlace.bookSpaces, bookPlace.description, bookPlace.photo])
    //
    // return {bookSpaces}

    const {data, isLoading, error, refetch} = useQuery("bookPlaces", getAllBookPlaces)

    useEffect(() => {
        if(isLoading){
            refetch()
        }
    }, [bookPlace.bookSpaces, bookPlace.description, bookPlace.photo]);


    return {
        bookSpaces: data?.bookPlaces || [],
        isLoading,
        // @ts-ignore
        error : error?.message || "error"
    }

}