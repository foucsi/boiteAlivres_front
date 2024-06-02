import AsyncStorage from "@react-native-async-storage/async-storage";
import {logout} from "@/redux/users";

export const handleLogout = async (dispatch:any, router:any)=>{
    dispatch(logout())
    await AsyncStorage.removeItem('token')
    router.navigate("/")
}