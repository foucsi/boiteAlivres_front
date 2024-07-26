import {useEffect, useState} from "react";
import {getAllBookPlaceByUser} from "@/helpers/functions/getAllBookPlaceByUser";

export const useGetAllBookPlaceByUserId = (uniqueId: string) => {
    const [bookPlacesLength, setBookPlacesLength] = useState<number>(0)

    const fetchAllBookPlacesByUserId = async()=>{
        const result = await getAllBookPlaceByUser(uniqueId)
        if(result.success) {
            setBookPlacesLength(result.data)
        }else {
            console.log(result.error)
        }
    }

    useEffect(() => {
        fetchAllBookPlacesByUserId()
    }, [uniqueId]);

    return {bookPlacesLength}
}