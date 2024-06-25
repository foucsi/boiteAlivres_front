import {useEffect, useState} from "react";
import {getAllFeatures} from "@/helpers/functions/getAllFeatures";

export const useGetAllFeatures = () => {
    const [features, setFeatures] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(()=>{
        const fetchFeatures = async()=>{
            setIsLoading(true)
            const result = await getAllFeatures()
            if(result.success){
                setFeatures(result.data)
                setIsLoading(false)
            }else {
                console.log(result.error)
                setError(result.error)
            }
        }
         fetchFeatures()
    }, [])

    return {features, isLoading, error}
}