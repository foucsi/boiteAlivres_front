import {URL_GET_FAVORITES_USER} from "@/constants/Url";

export const getFavoritesUser = async(uniqueId: string) => {
    try{
        // @ts-ignore
        const response = await fetch(URL_GET_FAVORITES_USER, {
            method: 'GET',
        })
    }catch(err){
        console.log(err)
    }
}