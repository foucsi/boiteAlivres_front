import AsyncStorage from "@react-native-async-storage/async-storage";
import {logout} from "@/redux/usersSlice";
import {removeBookSpace} from "@/redux/bookSpacesSlice";

export const handleLogout = async (dispatch:any, router:any, path:any)=>{
    await dispatch(logout())
    await dispatch(removeBookSpace())
    await AsyncStorage.removeItem('token')
    await router.navigate(path)
}