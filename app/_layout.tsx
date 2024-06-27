import React from 'react';
import { Stack } from 'expo-router/stack';

//PROVIDER
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistStore, persistReducer } from "redux-persist";
import { configureStore, combineReducers } from "@reduxjs/toolkit";

//IMPORT REDUCERSLICES
import user from "../redux/users";
import bookSpace from "../redux/bookSpaces";
import comment from "../redux/comments";
import favorite from "../redux/favoritesSlice";


const reducers = combineReducers({ user, bookSpace, comment, favorite });

const persistConfig = {
    key: "boiteAlivres",
    storage: AsyncStorage,
};

const store = configureStore({
    reducer: persistReducer(persistConfig, reducers),
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }),
});

const persistor = persistStore(store);

export default function RootLayout() {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <Stack>
                    <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                </Stack>
            </PersistGate>
        </Provider>
    );
}
