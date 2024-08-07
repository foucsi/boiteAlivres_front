import {getAllBookPlaceByUser} from "@/helpers/functions/getAllBookPlaceByUser";
import {useQuery} from "react-query";

export const useGetAllBookPlaceByUserId = (uniqueId: string) => {
    // const [bookPlacesLength, setBookPlacesLength] = useState<number>(0)
    //
    // const fetchAllBookPlacesByUserId = async()=>{
    //     const result = await getAllBookPlaceByUser(uniqueId)
    //     if(result.success) {
    //         setBookPlacesLength(result.data)
    //     }else {
    //         console.log(result.error)
    //     }
    // }
    //
    // useEffect(() => {
    //     fetchAllBookPlacesByUserId()
    // }, [uniqueId]);
    //
    // return {bookPlacesLength}
    const {data, isLoading , error} = useQuery(["bookPlaces", uniqueId], () => getAllBookPlaceByUser(uniqueId))

    return {bookPlacesLength: data?.bookPlaces.length || null, isLoading, error}
}