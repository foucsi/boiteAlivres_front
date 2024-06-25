import {useEffect, useState} from "react";
import {firstConnection} from "@/helpers/functions/firstConnection";

export const getFirstConnection =  () => {
    const [firstLogin, setFirstLogin] = useState(null)
    useEffect(()=>{
        const getIsFirstConnection = async()=>{
            const result = await firstConnection()
            // console.log("result", result)
            if(result.success){
                // @ts-ignore
                setFirstLogin(true)
            }else{
                // @ts-ignore
                setFirstLogin(false)
            }
        }
        getIsFirstConnection()
    }, [])
    return {firstLogin, setFirstLogin}
}