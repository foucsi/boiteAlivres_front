import { Stack } from "expo-router";

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
    </Stack>
  );
}
