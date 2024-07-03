const SERVER_URL_PRODUCTION = 'http://192.168.255.57:3000'; // Adresse de production
const SERVER_URL_DEVELOPMENT = 'http://localhost:3000'; // Adresse de développement local

export const serverConfig = () => {
    if(process.env.EXPO_PUBLIC_NODE_ENV === 'production'){
        return SERVER_URL_PRODUCTION
    }else{
        return SERVER_URL_DEVELOPMENT
    }
}