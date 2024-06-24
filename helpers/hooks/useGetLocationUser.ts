import {useEffect, useState} from "react";
import * as Location from "expo-location";

export const useGetLocationUser = () => {
    const [location, setLocation] = useState(null);
    useEffect(() => {
        (async () => {
            const {status} = await Location.requestForegroundPermissionsAsync();
            if (status === "granted") {
                await Location.watchPositionAsync(
                    {distanceInterval: 10},
                    (locationData) => {
                        // @ts-ignore
                        setLocation(locationData);
                    }
                );
            }
        })();
    }, []);

    return {location};
}