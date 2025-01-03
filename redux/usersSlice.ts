/**
 * User Slice Module
 * 
 * This module manages the user state in the Redux store.
 * It handles user authentication, profile management, and premium status.
 */

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from './store';

// User related types
export interface User {
  /** Username of the user */
  username: string | null;
  /** Timestamp when the user account was created */
  created_at: string | null;
  /** Unique identifier for the user */
  uniqueId: string | null;
  /** Email address of the user */
  email: string | null;
  /** Authentication token */
  token: string | null;
  /** URL to the user's profile photo */
  photo: string;
  /** Premium subscription status */
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
/**
 * Validates if the given URL is a valid image URL
 * @param url - The URL to validate
 * @returns boolean indicating if the URL is valid
 */
const isValidPhotoUrl = (url: string): boolean => {
  return USER_CONSTANTS.PHOTO_URL_REGEX.test(url);
};

/**
 * Validates if the given email has a valid format
 * @param email - The email to validate
 * @returns boolean indicating if the email is valid
 */
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
    /**
     * Updates the user state with login information
     * @param state - Current state
     * @param action - Action containing user data
     */
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

    /**
     * Resets the user state to initial values
     */
    logout: (state) => {
      state.value = {
        ...initialState.value,
      };
    },

    /**
     * Updates the user's profile photo
     * @param action - Action containing the new photo URL
     */
    addPhoto: (state, action: PayloadAction<string>) => {
      if (!isValidPhotoUrl(action.payload)) {
        console.error('Invalid photo URL format');
        return;
      }
      state.value.photo = action.payload;
    },

    /**
     * Updates the user's premium status
     * @param action - Action containing the new premium status
     */
    changePremium: (state, action: PayloadAction<boolean>) => {
      state.value.premium = action.payload;
    },
  },
});

// Selectors
/**
 * Selects the entire user object from state
 */
export const selectUser = (state: RootState) => state.user.value;

/**
 * Determines if the user is currently authenticated
 */
export const selectIsAuthenticated = (state: RootState) => state.user.value.token !== null;

/**
 * Determines if the user has premium status
 */
export const selectIsPremium = (state: RootState) => state.user.value.premium === true;

/**
 * Selects the user's profile photo URL
 */
export const selectUserPhoto = (state: RootState) => state.user.value.photo;

// Exports
export const { loginReducer, logout, addPhoto, changePremium } = userSlice.actions;
export default userSlice.reducer;
