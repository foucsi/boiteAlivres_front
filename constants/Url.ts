import {serverConfig} from "@/functions/serverConfig";

/* ---------------- URL ROUTES USERS ---------------- */
const baseUrl = serverConfig()

// URL for LOGIN and REGISTER Users
export const URL_LOGIN :string = `${baseUrl}/users/login`
export const URL_REGISTER:string = `${baseUrl}/users/register`

// URL for get AllBookPlaces
export const URL_GET_ALL_BOOK_PLACES:string = `${baseUrl}/bookPlaces/getAllBookPlaces`

//URL add Comment and delete
export const URL_ADD_COMMENT =(uniqueId:string):string=>`${baseUrl}/comments/addComment/${uniqueId}`
export const URL_DELETE_COMMENT =(uniqueId:string):string=>`${baseUrl}/comments/removeComment/${uniqueId}`
export const URL_GET_ALL_COMMENTS_BY_BOOK_PLACE =(bookPlaceId:string):string=>`${baseUrl}/comments/getAllCommentsByBookPlace/${bookPlaceId}`

//URL ADD marker in db
export const URL_ADD_MARKER_IN_DB=(uniqueId:string):string =>`${baseUrl}/bookPlaces/addBookPlace${uniqueId}`

//URL update description bookPlace
export const URL_UPDATE_DESCRIPTION_BOOK_PLACE =(bookPlaceId:string):string=>`${baseUrl}/bookPlaces/updateDescriptionBookPlace/${bookPlaceId}`