import Toast from 'react-native-toast-message'

export const showModal = ()=>{
    Toast.show({
        type: 'success',
        text1: 'Hello',
        text2: 'This is some something 👋'
    });
}