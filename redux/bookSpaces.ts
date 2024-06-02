import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    value:{
        bookSpaces:[],
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
        }
    }
})

export const {addBookSpace, removeBookSpace} = bookSpaceSlice.actions;
export default bookSpaceSlice.reducer;