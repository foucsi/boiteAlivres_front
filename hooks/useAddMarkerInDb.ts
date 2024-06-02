import {useState} from "react";
import {addMarkerInDb} from "@/functions/addMarkerInDb";
import {useSelector} from "react-redux";

export const useAddMarkerInDb = () => {
    const [markerDb, setMarkerDb] = useState([]);

    // @ts-ignore
    const user = useSelector((state) => state.user.value);
    const addMarker = async()=>{
        const result = await addMarkerInDb(user.uniqueId, 48.8566, 2.3522, "test")
         if(result.success){
              setMarkerDb(result.data)
         }else{
                console.log("error add marker: ", result)
         }
    }

    return {addMarker, markerDb};
}