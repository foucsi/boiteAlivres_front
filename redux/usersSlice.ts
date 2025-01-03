import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Types
interface UserState {
  username: string | null;
  created_at: string | null;
  uniqueId: string | null;
  email: string | null;
  token: string | null;
  photo: string;
  premium: boolean | null;
}

interface UserPayload {
  uniqueId: string;
  username: string;
  email: string;
  token: string;
  created_at: string;
  premium: boolean;
}

// Constants
const DEFAULT_PHOTO = "https://media.istockphoto.com/id/1300845620/fr/vectoriel/appartement-dic%C3%B4ne-dutilisateur-isol%C3%A9-sur-le-fond-blanc-symbole-utilisateur.jpg?b=1&s=170667a&w=0&k=20&c=HEO2nP4_uEAn0_JzVTU6_Y5hyn-qHxyCrWWTirBvScs=";

const initialState: { value: UserState } = {
  value: {
    username: null,
    created_at: null,
    uniqueId: null,
    email: null,
    token: null,
    photo: DEFAULT_PHOTO,
    premium: null,
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginReducer: (state, action: PayloadAction<UserPayload>) => {
      state.value = {
        ...state.value,
        ...action.payload,
        photo: state.value.photo, // Preserve existing photo
      };
    },
    logout: (state) => {
      state.value = {
        ...initialState.value,
        photo: DEFAULT_PHOTO,
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

export const { loginReducer, logout, addPhoto, changePremium } = userSlice.actions;
export default userSlice.reducer;
