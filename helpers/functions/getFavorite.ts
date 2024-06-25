import {log} from "@/utils/logger"

export const getFavorite = async(uniqueId:string, bookPlaceId:string) => {
    const url = `http://localhost:3000/favorites/allFavoritesByUser/${uniqueId}/${bookPlaceId}`
    try{
        log.info(`getFavorite: Fetching data for user ${uniqueId} and bookPlace ${bookPlaceId}`);
        const response = await fetch(url, {
            method:"GET",
            headers: {
                "Accept":"application/json"
            }
        })
        if(!response.ok){
            throw new Error(`HTTP error! status: ${response.status} ${response.statusText}`)
        }
        const data = await response.json()
        if(data.result){
            log.info(`getFavorite: Successful`, data.result)
            return {success: true, data: data.result}
        }else {
            log.error(`getFavorite: Error`, data.error || "Error")
            return {success: false, error: data.error}
        }
    }catch(err){
        log.error(`getFavorite: Error`, err)
        return {success: false, error: err}
    }
}