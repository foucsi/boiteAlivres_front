export const updateDescriptionBookPlace = async (bookPlaceId:any, description:string) => {
    const url = `http://localhost:3000/bookPlaces/updateDescriptionBookPlace/${bookPlaceId}`
    try{
        const response = await fetch(url,{
            method: 'PUT',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({description:description})
        })
        const data = await response.json()
        if(data.result){
            return {success:true}
        }else {
            return {success:false, error: data.error}
        }
    }catch(err){
        return {success:false, error: err}
    }
}