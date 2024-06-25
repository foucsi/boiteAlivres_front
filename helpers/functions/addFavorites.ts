export const addFavorites = async (uniqueId:string, bookPlaceId:string)=>{
    const url = `http://localhost:3000/favorites/addFavorite/${uniqueId}/${bookPlaceId}`
    try{
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
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