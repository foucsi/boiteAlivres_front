import {URL_GET_ALL_FEATURES} from "@/constants/Url";

export const getAllFeatures = async() => {
    try{
        //logger.info("getAllFeatures")
        const response = await fetch(URL_GET_ALL_FEATURES)
        if(!response.ok){
            throw new Error(`HTTP error! status: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        if(data.result){
            //logger.info("getAllFeatures", data.features)
            return {success: true, data: data.features}
        }else {
            //logger.error("getAllFeatures", data.error)
            return {success: false, error: data.error}
        }
    }catch(err){
        return {success: false, error: err}
    }
}