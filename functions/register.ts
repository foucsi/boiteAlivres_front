import {URL_LOGIN} from "@/constants/Url";

interface UserData{
    username: string;
    password: string;
    email: string;
}

export const register = async (user : UserData) => {
    const response = await fetch(URL_LOGIN, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    })
    const data = await response.json()
    if(data.result){
        return {success: true, message: data.error || data.message}
    }else{
        return {success: false, message: data.error || data.message}
    }
}