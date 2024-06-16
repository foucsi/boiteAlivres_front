import {URL_ADD_MARKER_IN_DB} from "@/constants/Url";

export const addMarkerInDb = async(uniqueId:string, latitude:number, longitude:number, description:string)=>{
    const testAdress = {
        name: 'test',
        street: 'test',
        region: 'test',
        postalCode: 'test',
    }
    const url = `http://localhost:3000/bookPlaces/addBookPlace/${uniqueId}`;
    // const url = URL_ADD_MARKER_IN_DB(uniqueId);
    try{
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                latitude: latitude,
                longitude: longitude,
                description: description,
                adress: testAdress,
            }),
        });
        if(!response.ok){
            throw new Error(`HTTP error! status: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        if (data.result){
            return {success: true, data: data.bookPlace}
        }else {
            return {success: false, error: data.error}
        }

    }catch(err){
        return {success: false, error:err}
    }
}