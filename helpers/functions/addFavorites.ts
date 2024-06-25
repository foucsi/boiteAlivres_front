export const addFavorites = async (uniqueId:string, bookPlaceId:string)=>{
    const url = ""
    try{
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({uniqueId, bookPlaceId}),
        });
        const data = await response.json();
        if(data.result){
            return {success:true}
        }else {
            return {success:false, error:data.error}
        }
    }catch(err){
        return {success:false, error:err}
    }
}