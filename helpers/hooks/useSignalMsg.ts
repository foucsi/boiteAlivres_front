import {useMutation} from "react-query";
import {signalMsg} from "@/helpers/functions/signalMsg";

export const useSignalMsg = (message:string, email:string) => {
    const {mutate: sendMsg}=useMutation(()=>signalMsg({message, email}))
    return {sendMsg}
}