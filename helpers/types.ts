export interface Favorite {
    bookPlace: string;
    user: string;
}

export interface FavoriteResponse{
    favorite: Favorite;
}