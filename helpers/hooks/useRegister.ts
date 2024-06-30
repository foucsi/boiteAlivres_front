import {useState} from "react";
import {register} from "@/helpers/functions/register";
import {router} from "expo-router"
import {useDispatch} from "react-redux";
import {loginReducer} from "@/redux/users";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useRegister = ()=>{
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')

    const dispatch = useDispatch()

    const handleRegister = async()=> {
        const result = await register({username, password, email})
        if (result.success) {
            // @ts-ignore
            await AsyncStorage.setItem('token', result.token)
            const {username, email, uniqueId, token, created_at, premium} = result.user
            dispatch(loginReducer({
                username,
                email,
                uniqueId,
                token,
                created_at,
                premium,
            }))
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