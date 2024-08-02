import {URL_ADD_FAVORITE} from "@/constants/Url";

export const addFavorites = async (uniqueId:string, bookPlaceId:string)=>{
        const response = await fetch(URL_ADD_FAVORITE(uniqueId, bookPlaceId), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json();
        if(data.result){
            return {success:true, favorite:data.favorite}
        }else {
            return {success:false, error:data.error}
        }
}