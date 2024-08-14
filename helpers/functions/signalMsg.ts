import {URL_SEND_SIGNAL} from "@/constants/Url";

interface SignalMsg {
    message: string,
    email: string
}

export const signalMsg = async({message, email}: SignalMsg) => {
    const response = await fetch(URL_SEND_SIGNAL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({message, email})
    })

    if(!response.ok){
        throw new Error('Error while sending signal message')
    }
    return await response.json()
}