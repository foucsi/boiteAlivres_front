import {Linking} from "react-native";

export const handleLinking = (latitude:number, longitude:number) => {
    // Linking.openURL("https://www.google.com/maps/dir/?api=1&destination=" + marker.latitude + "," + marker.longitude")
    Linking.openURL(`maps://app?daddr=${latitude},${longitude}&dirflg=d`);
};