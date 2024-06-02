import {useState} from "react";
import {register} from "@/functions/register";
import {router} from "expo-router"

export const useRegister = ()=>{
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')
    const handleRegister = async()=> {
        const result = await register({username, password, email})
        if (result.success) {
            setError('')
            setEmail('')
            setPassword('')
            setUsername('')
            router.navigate("/mapScreen")
        }else {
            setError(result.message)
        }
    }

    return {username, password, email, setUsername, setPassword, setEmail, handleRegister, error}
}