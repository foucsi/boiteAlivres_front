import {useState} from "react";
import {addMarkerInDb} from "@/functions/addMarkerInDb";
import {useDispatch, useSelector} from "react-redux";
import {addBookSpace} from "@/redux/bookSpaces"

export const useAddMarkerInDb = () => {
    const [markerDb, setMarkerDb] = useState([]);
    const dispatch = useDispatch();
    // @ts-ignore
    const user = useSelector((state) => state.user.value);
    const addMarker = async(e:any)=>{
        const {latitude, longitude} = e.nativeEvent.coordinate
        e.persist()
        const result = await addMarkerInDb(user.uniqueId, latitude, longitude, "Boite A Livres")
        console.log("NativeEvent: ", e.nativeEvent.coordinate)
         if(result.success){
             // console.log("Add marker successfully: ", result.data)
              setMarkerDb(result.data)
              dispatch(addBookSpace(result.data))
         }else{
                console.log("error add marker: ", result)
         }
    }

    return {addMarker, markerDb};
}