import AsyncStorage from "@react-native-async-storage/async-storage";
import {logout} from "@/redux/users";
import {removeBookSpace} from "@/redux/bookSpaces";

export const handleLogout = async (dispatch:any, router:any, path:any)=>{
    dispatch(logout())
    dispatch(removeBookSpace())
    await AsyncStorage.removeItem('token')
    router.navigate(path)
}