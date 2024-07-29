import {useEffect, useState} from "react";
import {useQuery} from "react-query";
import {getAllBookPlaces} from "@/helpers/functions/getAllBookPlaces";
import {useSelector} from "react-redux";

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

    return useQuery(
        ['bookPlaces', bookPlace.bookSpaces, bookPlace.description, bookPlace.photo],
        getAllBookPlaces,
        {
            onError: (error: Error) => {
                console.log(error.message);
            },
            refetchOnWindowFocus: false,
        }
    );
}