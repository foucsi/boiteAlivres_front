export const errorResponse = (status:number, url:string)=>{
    return `HTTP error! status: ${status} ${url}`
}