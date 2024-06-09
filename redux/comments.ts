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
        addComment: (state, action) => {
            // @ts-ignore
            state.value.comments.push(action.payload);
        },
        removeComment: (state) => {
            state.value.comments = []
        }
    }
})

export const {addComment, removeComment} = commentsSlice.actions;
export default commentsSlice.reducer;