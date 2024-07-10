import Toast from 'react-native-toast-message'

export const showModal =(text1:string, text2:string, position:string, time:number)=>{
   Toast.show({
        type: 'success',
        text1: text1,
        text2: text2,
        // @ts-ignore
        position: position,
        visibilityTime: time,
        autoHide: true,
        bottomOffset: 50,
        topOffset: 0,
       containerStyle: {
            zIndex: 9999,
           elevation: 9999,
       }
    });
}

