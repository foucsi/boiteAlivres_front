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
            // @ts-ignore
            state.value = state.value.filter((item) => item._id !== action.payload)
        }
    }
})

export const {addFavoriteReducer, removeFavorite} = favoritesSlice.actions
export default favoritesSlice.reducer