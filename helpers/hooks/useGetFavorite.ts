import {getFavorite} from "@/helpers/functions/getFavorite";
import {useSelector} from "react-redux";
import {useQuery} from "react-query";

export const useGetFavorite = (uniqueId:string, bookPlaceId:string) => {
    // const [isFavorite, setIsFavorite] = useState<boolean>(false)
    // @ts-ignore
    const favo = useSelector((state: RootState) => state.favorite.value)
    // const fetchIsFavorite = useCallback(async() => {
    //     if(!bookPlaceId || bookPlaceId === null){
    //         return
    //     }
    //     const response = await getFavorite(uniqueId, bookPlaceId)
    //     if(response.success){
    //         setIsFavorite(true)
    //     }else{
    //         setIsFavorite(false)
    //     }
    // }, [uniqueId, bookPlaceId])
    //
    //
    // useEffect(()=>{
    //         fetchIsFavorite()
    // }, [fetchIsFavorite, favo])
    //
    // return {isFavorite}

    const {data} = useQuery(["getFavorite", favo], () => getFavorite({uniqueId, bookPlaceId}), {
        enabled: !!uniqueId && !!bookPlaceId
    })

    return {
        isFavorite : data?.result,
    }
}