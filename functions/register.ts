import {URL_REGISTER} from "@/constants/Url";

interface UserData{
    username: string;
    password: string;
    email: string;
}

interface RegisterResponse {
    success: boolean;
    user?: any;
    token?: string;
    message?: string;
    error?: any;
}

export const register = async (user : UserData):Promise<RegisterResponse> => {
    try{
        const response = await fetch(URL_REGISTER, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })
        const data = await response.json()
        if(data.result){
            return {success: true, message: data.error || data.message, token: data.token, user: data.user}
        }else{
            return {success: false, message: data.error || data.message}
        }
    }catch(err){
        console.log(err)
        return {success: false, error: err}
    }

}