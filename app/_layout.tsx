import { Stack } from "expo-router";

//----------------- REDUX -----------------//
import AsyncStorage from "@react-native-async-storage/async-storage";
import {persistStore, persistReducer} from "redux-persist";
import {PersistGate} from "redux-persist/integration/react";
import {Provider} from "react-redux";
import {configureStore, combineReducers} from "@reduxjs/toolkit";

export default function RootLayout() {
  return (
    <Stack
        screenOptions={{
            headerStyle: {
                backgroundColor: '#294C60',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="login"/>
        <Stack.Screen name="register" />
        <Stack.Screen name="welcome" />
        <Stack.Screen name="mapScreen" />
    </Stack>
  );
}
