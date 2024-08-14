import {useMutation} from "react-query";
import {signalMsg} from "@/helpers/functions/signalMsg";
import {useSelector} from "react-redux";

export const useSignalMsg = (message:string, email:string) => {
    const user = useSelector((state:any) => state.user.value)
    const {mutate: sendMsg}=useMutation(()=>signalMsg({message:message, email : user.email}))
    return {sendMsg}
}