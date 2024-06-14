import {serverConfig} from "@/functions/serverConfig";

/* ---------------- URL ROUTES USERS ---------------- */
const baseUrl = serverConfig()

// URL for LOGIN and REGISTER Users
export const URL_LOGIN :string = `${baseUrl}/users/login`
export const URL_REGISTER:string = `${baseUrl}/users/register`

// URL for get AllBookPlaces
export const URL_GET_ALL_BOOK_PLACES:string = "http://localhost:3000/bookPlaces/getAllBookPlaces"