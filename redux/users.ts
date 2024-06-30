import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    value: {
        username: null,
        created_at: null,
        uniqueId: null,
        email: null,
        token: null,
        photo:
            "https://media.istockphoto.com/id/1300845620/fr/vectoriel/appartement-dic%C3%B4ne-dutilisateur-isol%C3%A9-sur-le-fond-blanc-symbole-utilisateur.jpg?b=1&s=170667a&w=0&k=20&c=HEO2nP4_uEAn0_JzVTU6_Y5hyn-qHxyCrWWTirBvScs=",
        premium:null,
        status:null,
    },
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loginReducer: (state, action) => {
            state.value.uniqueId = action.payload.uniqueId;
            state.value.username = action.payload.username;
            state.value.email = action.payload.email;
            state.value.token = action.payload.token;
            state.value.created_at = action.payload.created_at;
            state.value.premium = action.payload.premium;
            state.value.status = action.payload.status;
        },
        logout: (state) => {
            state.value.username = null;
            state.value.email = null;
            state.value.uniqueId = null;
            // state.value.premium = null;
            // state.value.photo =
            //   "https://media.istockphoto.com/id/1300845620/fr/vectoriel/appartement-dic%C3%B4ne-dutilisateur-isol%C3%A9-sur-le-fond-blanc-symbole-utilisateur.jpg?b=1&s=170667a&w=0&k=20&c=HEO2nP4_uEAn0_JzVTU6_Y5hyn-qHxyCrWWTirBvScs=";
        },
        addPhoto: (state, action) => {
            state.value.photo = action.payload;
        },
        changePremium: (state, action) => {
            state.value.premium = action.payload;
        }
    },
});

export const {loginReducer, logout, addPhoto,changePremium} = userSlice.actions;
export default userSlice.reducer;
