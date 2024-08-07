import {getAllBookPlaceByUser} from "@/helpers/functions/getAllBookPlaceByUser";
import {useQuery} from "react-query";

export const useGetAllBookPlaceByUserId = (uniqueId: string) => {
    const {data, isLoading , error} = useQuery(["bookPlaces", uniqueId], () => getAllBookPlaceByUser({uniqueId}))
    return {bookPlacesLength: data?.bookPlaces.length || 0, isLoading, error}
}