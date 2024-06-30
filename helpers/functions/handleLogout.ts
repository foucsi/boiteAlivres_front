import AsyncStorage from "@react-native-async-storage/async-storage";
import {logout} from "@/redux/users";
import {removeBookSpace} from "@/redux/bookSpaces";

export const handleLogout = async (dispatch:any, router:any, path:any)=>{
    await dispatch(logout())
    await dispatch(removeBookSpace())
    await AsyncStorage.removeItem('token')
    await router.navigate(path)
}