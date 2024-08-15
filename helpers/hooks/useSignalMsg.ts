import {useMutation} from "react-query";
import {signalMsg} from "@/helpers/functions/signalMsg";
import {useSelector} from "react-redux";

export const useSignalMsg = (message:string, email:string,bookPlaceId:string, setShowModal:void, setMessage:void) => {
    const {mutate: sendSignalMsg,error, data}=useMutation(()=>signalMsg({message, email, bookPlaceId}), {
        onError: (error:unknown) => {
            console.error("Error signal message :", error)
        },
        onSuccess: (data)=>{
            if(data.result){
                // @ts-ignore
                setShowModal((prev)=> !prev)
                setMessage('')
            }
        }
    })
    return {sendSignalMsg, data}
}