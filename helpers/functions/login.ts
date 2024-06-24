import {URL_LOGIN} from "@/constants/Url";

interface User {
    email: string;
    password: string;
}

interface LoginResponse {
    success: boolean;
    user?: any;
    token?: string;
    message?: any;
    error?: any;
}

export const login = async(user:User):Promise<LoginResponse>=>{
    // const url = "http://192.168.1.38:3000/users/login"
    try{
        const response = await fetch(URL_LOGIN, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        const data = await response.json()
        if(data.result){
            return {success:true, user:data.user, token:data.token}
        }else{
            return {success:false, message:data.error }
        }
    }catch(err){
        console.log(err)
        return {success:false, error:err}
    }
}