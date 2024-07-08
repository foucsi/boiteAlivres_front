import Toast from 'react-native-toast-message'

export const showModal = ()=>{
    Toast.show({
        type: 'success',
        text1: 'Suppression réussie',
        text2: 'La boîte à livres a été retirée de vos favoris',
        position: 'bottom',
        visibilityTime: 2000,
        autoHide: true,
        bottomOffset: 50,
        topOffset: 0,
    });
}