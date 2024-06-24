import {URL_GET_ALL_FEATURES} from "@/constants/Url";

export const getAllFeatures = async() => {
    try{
        const response = await fetch(URL_GET_ALL_FEATURES)
        if(!response.ok){
            throw new Error(`HTTP error! status: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        if(data.result){
            return {success: true, data: data.features}
        }else {
            return {success: false, error: data.error}
        }
    }catch(err){
        return {success: false, error: err}
    }
}