import {URL_GET_ALL_FEATURES} from "@/constants/Url";
import {log} from "@/utils/logger";

export const getAllFeatures = async() => {
    try{
        log.info("fetch getAllFeatures")
        const response = await fetch(URL_GET_ALL_FEATURES)
        if(!response.ok){
            throw new Error(`HTTP error! status: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        if(data.result){
            log.info("getAllFeatures", data.features)
            return {success: true, data: data.features}
        }else {
            log.error("getAllFeatures", data.error || "Error")
            return {success: false, error: data.error}
        }
    }catch(err){
        log.error("getAllFeatures", err)
        return {success: false, error: err}
    }
}