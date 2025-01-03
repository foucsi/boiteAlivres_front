import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from './store';

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
  PHOTO_URL_REGEX: /^https?:\/\/.+\.(jpg|jpeg|png|gif|webp)$/i,
} as const;

// Validation functions
const isValidPhotoUrl = (url: string): boolean => {
  return USER_CONSTANTS.PHOTO_URL_REGEX.test(url);
};

const isValidEmail = (email: string | null): boolean => {
  if (!email) return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

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
      if (!isValidEmail(action.payload.email)) {
        console.error('Invalid email format');
        return;
      }
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
      if (!isValidPhotoUrl(action.payload)) {
        console.error('Invalid photo URL format');
        return;
      }
      state.value.photo = action.payload;
    },
    changePremium: (state, action: PayloadAction<boolean>) => {
      state.value.premium = action.payload;
    },
  },
});

// Selectors
export const selectUser = (state: RootState) => state.user.value;
export const selectIsAuthenticated = (state: RootState) => state.user.value.token !== null;
export const selectIsPremium = (state: RootState) => state.user.value.premium === true;
export const selectUserPhoto = (state: RootState) => state.user.value.photo;

// Exports
export const { loginReducer, logout, addPhoto, changePremium } = userSlice.actions;
export default userSlice.reducer;
