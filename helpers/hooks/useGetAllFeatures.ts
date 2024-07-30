import {useQuery} from "react-query";
import {getAllFeatures} from "@/helpers/functions/getAllFeatures";

export const useGetAllFeatures = () => {
    const {data, isLoading, error} = useQuery('features', getAllFeatures)
    return {
        features: data?.data || [],
        isLoading,
        error
    }
}