import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    value:{
        bookSpaces:[],
        description:null
    }
}

export const bookSpaceSlice = createSlice({
    name: "bookSpace",
    initialState,
    reducers:{
        addBookSpace: (state, action) => {
            // @ts-ignore
            state.value.bookSpaces.push(action.payload);
        },
        removeBookSpace: (state) => {
            state.value.bookSpaces = []
        },
        updateDescriptionReducer: (state, action) => {
            state.value.description = action.payload;
        }
    }
})

export const {addBookSpace, removeBookSpace, updateDescriptionReducer} = bookSpaceSlice.actions;
export default bookSpaceSlice.reducer;