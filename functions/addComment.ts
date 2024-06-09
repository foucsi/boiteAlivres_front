export const addComment = async(uniqueId:string, bookPlaceId:string, comment:string)=>{
    const url=`http://localhost:3000/comments/addComment/${uniqueId}`
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ bookPlaceId, comment}),
        })
    }
    catch(err){
    return {success:false, error:err}
}}