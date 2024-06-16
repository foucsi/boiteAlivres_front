import {useState} from "react";
import {addMarkerInDb} from "@/functions/addMarkerInDb";
import {useDispatch, useSelector} from "react-redux";
import {addBookSpace} from "@/redux/bookSpaces"

export const useAddMarkerInDb = () => {
    const [modalIsVisible, setModalIsVisible] = useState(false)
    const [modalPremiumIsVisible, setModalPremiumIsVisible] = useState(false)
    const dispatch = useDispatch();
    // @ts-ignore
    const user = useSelector((state) => state.user.value);
    const addMarker = async(e:any)=>{
        const {latitude, longitude} = e.nativeEvent.coordinate
        e.persist()
        if(user.premium){
            const result = await addMarkerInDb(user.uniqueId, latitude, longitude, "Découvrez et partagez des livres gratuitement dans cette boîte à livres conviviale.")
            // console.log("NativeEvent: ", e.nativeEvent.coordinate)
            if(result.success){
                setModalIsVisible(true)
                dispatch(addBookSpace(result.data))
            }else{
                console.log("error add marker: ", result)
            }
        }else{
            setModalPremiumIsVisible(true)
            console.log("Vous devez être premium pour ajouter un marqueur")
        }

    }
    return {addMarker, modalIsVisible, setModalIsVisible, modalPremiumIsVisible, setModalPremiumIsVisible};
}