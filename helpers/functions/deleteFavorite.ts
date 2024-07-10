import {log} from "@/utils/logger";
import {URL_DELETE_FAVORITE} from "@/constants/Url";
import {removeFavorite} from "@/redux/favoritesSlice";
import {Dispatch} from "react";
import {showModal} from "@/helpers/functions/showToast";


interface DeleteFavoriteResponse {
    result: boolean;
    message?: string;
}

export const deleteFavorite = async(favoriteId:string, dispatch:Dispatch<any>)=>{
    log.info(`Attempting to delete favorite with ID: ${favoriteId}`)
        try{
            const response = await fetch(URL_DELETE_FAVORITE(favoriteId),{
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",}
            })
            if(!response.ok){
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data : DeleteFavoriteResponse = await response.json()
            if(data.result){
                log.info(`Fetch route ${URL_DELETE_FAVORITE} success`)
                dispatch(removeFavorite(favoriteId))
                showModal('Suppression réussie','La boîte à livres a été retirée de vos favoris', 'bottom', 2000)
                return true
            }else {
                log.warn(`Fetch route ${URL_DELETE_FAVORITE} failed`)
                return false
            }
        }catch(err){
            log.error(err)
    }
}