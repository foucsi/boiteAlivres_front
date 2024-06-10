import {Linking} from "react-native";

export const handleLinking = (latitude:number, longitude:number) => {
    // Linking.openURL("https://www.google.com/maps/dir/?api=1&destination=" + marker.latitude + "," + marker.longitude")
    {/*
        dirflg : Spécifie le mode de transport pour l'itinéraire. Les options incluent :
            d pour la conduite (driving),
            w pour la marche (walking),
            r pour les transports en commun (transit).
    */}
    Linking.openURL(`maps://app?daddr=${latitude},${longitude}&dirflg=w`);
};