import {useState} from "react";
import {updateDescriptionBookPlace} from "@/functions/updateDescriptionBookPlace";

// @ts-ignore
export const useUpdateDescriptionBookPlace = (bookPlaceId) => {
    const [updated, setUpdated] = useState(false)
    const [description, setDescription] = useState("")

    // @ts-ignore
    const updateDescription = async () => {
        const result = await updateDescriptionBookPlace(bookPlaceId, description)
        if(result.success){
            setUpdated(true)
        }else {
            console.log("error")
        }
    }
    return {updated, description, setDescription, updateDescription}
}