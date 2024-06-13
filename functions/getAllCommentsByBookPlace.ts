export const getAllCommentsByBookPlace = async(bookPlaceId:string)=>{
    const url = `http://localhost:3000/comments/getAllCommentsByBookPlace/${bookPlaceId}`
    try{
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status} ${response.statusText}`);
        }
        const data = await response.json()
        if(data.result){
            return {success:true, comments:data.comments}
        }else {
            return {success:false, error:data.error}
        }
    }catch(err){
        return {success:false, error:err}
    }
}