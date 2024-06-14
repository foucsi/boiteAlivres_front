export const serverConfig= ()=>{
    // detect if we are in production or development
    const isProduction = process.env.NODE_ENV === 'production';
    if(isProduction){
        return "http://192.168.140.132:3000"
    }else {
        return "http://localhost:3000"
    }

}