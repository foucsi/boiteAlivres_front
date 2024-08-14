import {URL_SEND_SIGNAL} from "@/constants/Url";

export const signalMsg = async(msg: string, email:string) => {
    const response = await fetch(URL_SEND_SIGNAL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({msg, email})
    })

    if(!response.ok){
        throw new Error('Error while sending signal message')
    }
    return await response.json()
}