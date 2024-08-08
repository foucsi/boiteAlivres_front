import React from 'react';
import { Stack } from 'expo-router/stack';
import Toast from 'react-native-toast-message';

//PROVIDER
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistStore, persistReducer } from "redux-persist";
import { configureStore, combineReducers } from "@reduxjs/toolkit";

//REACT QUERY
import { QueryClient, QueryClientProvider } from "react-query";

//IMPORT REDUCERSLICES
import user from "../redux/usersSlice";
import bookSpace from "../redux/bookSpacesSlice";
import comment from "../redux/commentsSlice";
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

// Initialize QueryClient
const queryClient = new QueryClient();

export default function RootLayout() {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <QueryClientProvider client={queryClient}>
                <Stack>
                    <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                    <Stack.Screen name="login" options={{ headerShown: false }} />
                    <Stack.Screen name="register" options={{ headerShown: false }} />
                    <Stack.Screen name="index" options={{ headerShown: false }} />
                </Stack>
                <Toast/>
                </QueryClientProvider>
            </PersistGate>
        </Provider>
    );
}
