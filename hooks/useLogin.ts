import {useState} from "react";
import {login} from "@/functions/login";
import {router} from "expo-router"

export const useLogin = ()=>{
    const [email,setEmail] = useState<string>('')
    const [password,setPassword] = useState<string>('')
    const [error,setError] = useState<string>('')

    const handleLogin = async()=>{
        const result = await login({email,password})
        if(result.success) {
            console.log("Login success: ", result)
            setError('')
            setEmail('')
            setPassword('')
        }else {
            console.log("Login error: ", result)
            setError(result.message)
        }
    }

    return {email,setEmail,password,setPassword,handleLogin, error}
}