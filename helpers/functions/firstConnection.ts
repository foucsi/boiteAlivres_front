// @ts-ignore
import AsyncStorage from '@react-native-async-storage/async-storage';

export const firstConnection =async () => {
    try {
        const firstConnection = await AsyncStorage.getItem("firstConnection");
        if (firstConnection === null) {
            await AsyncStorage.setItem("firstConnection", 'true');
            return { success: true };
        } else {
            return { success: false };
        }
    } catch (error) {
        console.error("Error accessing AsyncStorage: ", error);
        return { success: false, error: 'AsyncStorage error' };
    }
}