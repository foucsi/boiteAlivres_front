import Toast from 'react-native-toast-message'

export const showModal = (text1:string, text2:string, position:string)=>{
    Toast.show({
        type: 'success',
        text1: text1,
        text2: text2,
        // @ts-ignore
        position: position,
        visibilityTime: 2000,
        autoHide: true,
        bottomOffset: 50,
        topOffset: 0,
    });
}

