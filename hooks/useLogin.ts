import {useState} from "react";

export const useLogin = ()=>{
    const [email,setEmail] = useState<string>('')
    const [password,setPassword] = useState<string>('')
}