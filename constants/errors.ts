export const errorResponse = (status:string, url:string)=>{
    return `HTTP error! status: ${status} ${url}`
}