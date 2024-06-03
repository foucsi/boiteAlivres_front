import {useState} from "react";
import {addMarkerInDb} from "@/functions/addMarkerInDb";
import {useSelector} from "react-redux";

export const useAddMarkerInDb = () => {
    const [markerDb, setMarkerDb] = useState([]);

    // @ts-ignore
    const user = useSelector((state) => state.user.value);
    const addMarker = async(e:any)=>{
        const {latitude, longitude} = e.nativeEvent.coordinate
        e.persist()
        const result = await addMarkerInDb(user.uniqueId, latitude, longitude, "test")
        console.log("NativeEvent: ", e.nativeEvent.coordinate)
         if(result.success){
             console.log("Add marker successfully: ", result.data)
              setMarkerDb(result.data)
         }else{
                console.log("error add marker: ", result)
         }
    }

    return {addMarker, markerDb};
}