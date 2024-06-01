import {useState} from "react";
import {login} from "@/functions/login";

export const useLogin = ()=>{
    const [email,setEmail] = useState<string>('')
    const [password,setPassword] = useState<string>('')
    const [error,setError] = useState<string>('')

    const handleLogin = async()=>{
        const result = await login({email,password})
        if(result.success) {
            setError('')
            setEmail('')
            setPassword('')
        }else {
            setError(result.message)
        }
    }

    return {email,setEmail,password,setPassword,handleLogin, error}
}