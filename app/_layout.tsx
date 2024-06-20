import { Stack } from "expo-router";

//----------------- REDUX -----------------//
import AsyncStorage from "@react-native-async-storage/async-storage";
import {persistStore, persistReducer} from "redux-persist";
import {PersistGate} from "redux-persist/integration/react";
import {Provider} from "react-redux";
import {configureStore, combineReducers} from "@reduxjs/toolkit";

import { composeWithDevTools } from "redux-devtools-extension";

import user from "../redux/users";
import bookSpace from "../redux/bookSpaces";
import comment from "../redux/comments";

const reducers = combineReducers({user, bookSpace, comment});

const persistConfig = {
    key: "boiteAlivres",
    storage: AsyncStorage,
};

const store = configureStore({
    reducer: persistReducer(persistConfig, reducers),
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({serializableCheck: false}),
    // enhancers: [composeWithDevTools()],
});

const persistor = persistStore(store);

export default function RootLayout() {
  return (
      <Provider store={store}>
          <PersistGate persistor={persistor}>
            <Stack
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#294C60',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    headerShown: false,
                }}>
                <Stack.Screen name="index" />
                <Stack.Screen name="login"/>
                <Stack.Screen name="register" />
                <Stack.Screen name="welcome" />
                <Stack.Screen name="mapScreen" />
                <Stack.Screen name="stripePremiumAccount" />
            </Stack>
          </PersistGate>
      </Provider>
  );
}
