// @ts-ignore
import {AsyncStorage} from 'react-native';

export const firstConnection =async () => {
    const firstConnection = await AsyncStorage.getItem('firstConnection');
    if (firstConnection === null) {
        await AsyncStorage.setItem('firstConnection', 'true');
        return {success: true,}
    } else {
        return {success: false,}
    }
}