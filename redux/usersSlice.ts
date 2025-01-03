import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// User related types
export interface User {
  username: string | null;
  created_at: string | null;
  uniqueId: string | null;
  email: string | null;
  token: string | null;
  photo: string;
  premium: boolean | null;
}

export interface UserState {
  value: User;
}

export interface UserPayload extends Omit<User, 'photo'> {}

// Constants
export const USER_CONSTANTS = {
  DEFAULT_PHOTO: "https://media.istockphoto.com/id/1300845620/fr/vectoriel/appartement-dic%C3%B4ne-dutilisateur-isol%C3%A9-sur-le-fond-blanc-symbole-utilisateur.jpg?b=1&s=170667a&w=0&k=20&c=HEO2nP4_uEAn0_JzVTU6_Y5hyn-qHxyCrWWTirBvScs=",
  SLICE_NAME: "user",
} as const;

// Initial state configuration
const initialState: UserState = {
  value: {
    username: null,
    created_at: null,
    uniqueId: null,
    email: null,
    token: null,
    photo: USER_CONSTANTS.DEFAULT_PHOTO,
    premium: null,
  },
};

// Slice configuration
export const userSlice = createSlice({
  name: USER_CONSTANTS.SLICE_NAME,
  initialState,
  reducers: {
    loginReducer: (state, action: PayloadAction<UserPayload>) => {
      state.value = {
        ...state.value,
        ...action.payload,
      };
    },
    logout: (state) => {
      state.value = {
        ...initialState.value,
      };
    },
    addPhoto: (state, action: PayloadAction<string>) => {
      state.value.photo = action.payload;
    },
    changePremium: (state, action: PayloadAction<boolean>) => {
      state.value.premium = action.payload;
    },
  },
});

// Exports
export const { loginReducer, logout, addPhoto, changePremium } = userSlice.actions;
export default userSlice.reducer;
