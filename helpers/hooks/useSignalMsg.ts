import {useMutation} from "react-query";
import {signalMsg} from "@/helpers/functions/signalMsg";
import {useSelector} from "react-redux";

export const useSignalMsg = (message:string, email:string) => {
    const user = useSelector((state:any) => state.user.value)
    const {mutate: sendSignalMsg}=useMutation(()=>signalMsg({message:message, email : user.email}), {
        onError: (error:unknown) => {
            console.error("Error signal message :", error)
        },
        onSuccess: ()=>console.log('Signal message')

    })
    return {sendSignalMsg}
}