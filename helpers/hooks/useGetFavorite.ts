import {getFavorite} from "@/helpers/functions/getFavorite";
import {useSelector} from "react-redux";
import {useQuery} from "react-query";

export const useGetFavorite = (uniqueId:string, bookPlaceId:string) => {
    // @ts-ignore
    const favo = useSelector((state: RootState) => state.favorite.value)
    const {data} = useQuery(["getFavorite", favo, uniqueId, bookPlaceId], () => getFavorite({uniqueId, bookPlaceId}), {
        enabled: !!uniqueId && !!bookPlaceId
    })

    return {
        isFavorite : data?.result,
    }
}