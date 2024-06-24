import {useState} from "react";
import {updateDescriptionBookPlace} from "@/helpers/functions/updateDescriptionBookPlace";
import {useDispatch} from "react-redux";
import {updateDescriptionReducer} from "@/redux/bookSpaces";

// @ts-ignore
export const useUpdateDescriptionBookPlace = (bookPlaceId) => {
    const [updated, setUpdated] = useState(false)
    const [description, setDescription] = useState("")

    const dispatch = useDispatch()

    // @ts-ignore
    const updateDescription = async () => {
        const result = await updateDescriptionBookPlace(bookPlaceId, description)
        if(result.success){
            dispatch(updateDescriptionReducer(result.description))
            setUpdated(true)
            setDescription(result.description)
        }else {
            console.log("error")
        }
    }
    return {updated, description, setDescription, updateDescription}
}