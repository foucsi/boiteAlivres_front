import {useQuery} from "react-query";
import {getAllFeatures} from "@/helpers/functions/getAllFeatures";

export const useGetAllFeatures = () => {
    const {data, isLoading, error} = useQuery('features', getAllFeatures)
    console.log("hook data:", data)
    return {
        features: data?.features || [],
        isLoading,
        // @ts-ignore
        error : error?.message || error
    }
}