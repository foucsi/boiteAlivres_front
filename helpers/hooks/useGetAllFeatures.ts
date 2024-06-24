import {useEffect, useState} from "react";
import {getAllFeatures} from "@/helpers/functions/getAllFeatures";

export const useGetAllFeatures = () => {
    const [features, setFeatures] = useState([]);

    useEffect(()=>{
        const fetchFeatures = async()=>{
            const result = await getAllFeatures()
            if(result.success){
                setFeatures(result.data)
            }else {
                console.log(result.error)
            }
        }
         fetchFeatures()
    }, [])

    return {features}
}