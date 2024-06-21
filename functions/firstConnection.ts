import {AsyncStorage} from 'react-native';

export const firstConnection = () => {
    const firstConnection = localStorage.setItem('firstConnection', 'true')
}