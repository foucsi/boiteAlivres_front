import {URL_REGISTER} from "@/constants/Url";

interface UserData{
    username: string;
    password: string;
    email: string;
}

export const register = async (user : UserData) => {
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
            return {success: true, message: data.error || data.message}
        }else{
            return {success: false, message: data.error || data.message}
        }
    }catch(err){
        console.log(err)
        return {success: false, error: err}
    }

}