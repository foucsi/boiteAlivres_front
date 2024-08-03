import {URL_GET_ALL_FEATURES} from "@/constants/Url";
import {log} from "@/utils/logger";

export const getAllFeatures = async() => {
        log.info("fetch getAllFeatures")
        const response = await fetch(URL_GET_ALL_FEATURES)
        if(!response.ok){
            const errorResponse = `HTTP error! status: ${response.status} ${response.statusText}`
            throw new Error(errorResponse);
        }
        return response.json()
}