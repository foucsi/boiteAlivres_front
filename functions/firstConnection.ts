// @ts-ignore
import {AsyncStorage} from '@react-native-async-storage/async-storage';

export const firstConnection =async () => {
    const firstConnection = await AsyncStorage.getItem('firstConnection');
    if (firstConnection === null) {
        await AsyncStorage.setItem('firstConnection', 'true');
        return {success: true,}
    } else {
        return {success: false,}
    }
}