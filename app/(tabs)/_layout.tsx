import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { BlurView } from 'expo-blur'
import {StyleSheet } from "react-native";
import { AntDesign } from '@expo/vector-icons';

export default function TabLayout() {
    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: '#294C60', tabBarBackground: () => (
                <BlurView tint="light" intensity={100}  style={styles.tabBar}/>
            ), }}>
            <Tabs.Screen
                name="mapScreen"
                options={{
                    headerShown: false,
                    title: 'Carte',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="map" color={color} />,
                }}
            />
            <Tabs.Screen
                name="notification"
                options={{
                    headerShown: false,
                    title: 'Infos',
                    tabBarIcon: ({ color }) => <FontAwesome name="info-circle" size={28} color={color} />,
                }}
            />
            <Tabs.Screen
                name="favoris"
                options={{
                    headerShown: false,
                    title: 'Favoris',
                    tabBarIcon: ({ color }) => <FontAwesome name="heart" size={28} color={color} />,
                }}
            />
            <Tabs.Screen
                name="settings"
                options={{
                    headerShown: false,
                    title: 'Paramètres',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
                }}
            />
        </Tabs>
    );
}

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: 'rgba(255, 255, 255, 0.5)', // Fond de la tabBar semi-transparent
        borderTopWidth: 0, // Pour enlever la bordure supérieure par défaut
        elevation: 0, // Pour enlever l'ombre sur Android
        shadowOpacity: 0, // Pour enlever l'ombre sur iOS
    },
})