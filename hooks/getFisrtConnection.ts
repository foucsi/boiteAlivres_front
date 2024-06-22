import {useEffect, useState} from "react";
import {firstConnection} from "@/functions/firstConnection";

export const getFirstConnection =  () => {
    const [firstLogin, setFirstLogin] = useState(false)
    useEffect(()=>{
        const getIsFirstConnection = async()=>{
            const result = await firstConnection()
            if(result.success){
                setFirstLogin(true)
            }else{
                setFirstLogin(false)
            }
        }
    }, [])
    return {firstLogin, setFirstLogin}
}