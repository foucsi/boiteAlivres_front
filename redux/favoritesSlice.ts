import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    value: [],
}

export const favoritesSlice = createSlice({
    name: "favorite",
    initialState,
    reducers: {
        addFavoriteReducer: (state, action) => {
            // @ts-ignore
            state.value.push(action.payload)
        },
        removeFavorite: (state, action) => {
            state.value = state.value.filter((item) => item !== action.payload)
        }
    }
})

export const {addFavoriteReducer, removeFavorite} = favoritesSlice.actions
export default favoritesSlice.reducer