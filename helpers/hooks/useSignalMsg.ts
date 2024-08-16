import {useMutation} from "react-query";
import {signalMsg} from "@/helpers/functions/signalMsg";
import {useSelector} from "react-redux";

export const useSignalMsg = (message:string, email:string,bookPlaceId:string, setShowModal: (value: boolean | ((prevState: boolean) => boolean)) => void,
                             setMessage: (value: string) => void) => {

    const handleError = (error:unknown) => {
        console.error("Error signal message :", error)
    }
    const {mutate: sendSignalMsg,error, data}=useMutation(()=>signalMsg({message, email, bookPlaceId}), {
        onError: handleError,
        onSuccess: (data)=>{
            if(data.result){
                setMessage('')
                setShowModal((prev)=> !prev)
            }
        }
    })
    return {sendSignalMsg, data}
}