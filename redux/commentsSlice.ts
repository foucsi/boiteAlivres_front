import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    value:{
        comments:[],
    }
}

export const commentsSlice = createSlice({
    name: "comment",
    initialState,
    reducers:{
        addCommentReducer: (state, action) => {
            // @ts-ignore
            state.value.comments.push(action.payload);
        },
        removeCommentReducer: (state) => {
            state.value.comments = []
        }
    }
})

export const {addCommentReducer, removeCommentReducer} = commentsSlice.actions;
export default commentsSlice.reducer;