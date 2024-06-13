export const updateDescriptionBookPlace = async (bookPlaceId:string, description:string) => {
    const url = `http://localhost:3000/bookPlaces/updateDescriptionBookPlace/${bookPlaceId}`
    try{
        const response = await fetch(url,{
            method: 'PUT',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({description:description})
        })
        if(!response.ok) throw new Error(`HTTP error! status: ${response.status} ${response.statusText}`)
        const data = await response.json()
        if(data.result){
            console.log("result", data.bookPlace.description)
            return {success:true, description: data.bookPlace.description}
        }else {
            return {success:false, error: data.error}
        }
    }catch(err){
        return {success:false, error: err}
    }
}