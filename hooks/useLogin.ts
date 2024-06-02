import {useState} from "react";
import {login} from "@/functions/login";
import {router} from "expo-router"
import {useDispatch} from "react-redux";
import {loginReducer} from "@/redux/users";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useLogin = ()=>{
    const [email,setEmail] = useState<string>('')
    const [password,setPassword] = useState<string>('')
    const [error,setError] = useState<string>('')

    const dispatch = useDispatch()

    const handleLogin = async()=>{
        const result = await login({email,password})
        if(result.success) {
            const {username,email,uniqueId,token,created_at,premium} = result.user
            // @ts-ignore
            await AsyncStorage.setItem('token',result.token)
            dispatch(loginReducer({
                username,
                email,
                uniqueId,
                token,
                created_at,
                premium
            }))
            setError('')
            setEmail('')
            setPassword('')
            router.navigate("/mapScreen")
        }else {
            setError(result.message)
        }
    }

    return {email,setEmail,password,setPassword,handleLogin, error}
}