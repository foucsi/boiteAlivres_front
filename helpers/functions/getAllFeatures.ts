import {URL_GET_ALL_FEATURES} from "@/constants/Url";
import {log} from "@/utils/logger";
import {errorResponse} from "@/constants/errors";

export const getAllFeatures = async() => {
        log.info("fetch getAllFeatures")
        const response = await fetch(URL_GET_ALL_FEATURES)
        if(!response.ok){
            throw new Error(errorResponse(response.status, response.url));
        }
        return await response.json()
}