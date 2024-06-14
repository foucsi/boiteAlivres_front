import {serverConfig} from "@/functions/serverConfig";

/* ---------------- URL ROUTES USERS ---------------- */
const baseUrl = serverConfig()

// URL for LOGIN and REGISTER Users
export const URL_LOGIN :string = `${baseUrl}/users/login`
export const URL_REGISTER:string = `${baseUrl}/users/register`

// URL for get AllBookPlaces
export const URL_GET_ALL_BOOK_PLACES:string = `${baseUrl}/bookPlaces/getAllBookPlaces`

//URL add Comment
export const URL_ADD_COMMENT =(uniqueId:string):string=>`${baseUrl}/comments/addComment/${uniqueId}`

//URL ADD marker in db
export const URL_ADD_MARKER_IN_DB=(uniqueId:string):string =>`${baseUrl}/bookPlaces/addBookPlace${uniqueId}`