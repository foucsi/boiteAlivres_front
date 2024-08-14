import {useMutation} from "react-query";
import {signalMsg} from "@/helpers/functions/signalMsg";
import {useSelector} from "react-redux";

export const useSignalMsg = (message:string, email:string, setShowModal:void) => {
    const {mutate: sendSignalMsg,error}=useMutation(()=>signalMsg({message, email}), {
        onError: (error:unknown) => {
            console.error("Error signal message :", error)
        },
        onSuccess: (data)=>{
            // @ts-ignore
            setShowModal(false)
            console.log("Result: ",data?.result)
        }

    })
    return {sendSignalMsg, error}
}