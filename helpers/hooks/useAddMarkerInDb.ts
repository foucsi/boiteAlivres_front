import { useState } from "react";
import {useMutation} from "react-query";
import { addMarkerInDb } from "@/helpers/functions/addMarkerInDb";
import { useDispatch, useSelector } from "react-redux";
import { addBookSpace } from "@/redux/bookSpacesSlice";

export const useAddMarkerInDb = () => {
    const [modalIsVisible, setModalIsVisible] = useState(false);
    const [modalPremiumIsVisible, setModalPremiumIsVisible] = useState(false);
    const dispatch = useDispatch();
    // @ts-ignore
    const user = useSelector((state) => state.user.value);

    const handleError = (error: unknown) => {
        console.error("Erreur lors de la mutation :", error);
    }

    const handleSuccess = (data:any) => {
        if (data.result) {
            setModalIsVisible(true);
            dispatch(addBookSpace(data.bookPlace));
        } else {
            console.log("Erreur lors de l'ajout du marqueur ");
        }
    }

    const { mutate: addMarker } = useMutation(
        // @ts-ignore
        async ({ latitude, longitude }) => {
            return await addMarkerInDb(
                user.uniqueId,
                latitude,
                longitude,
                "Découvrez et partagez des livres gratuitement dans cette boîte à livres conviviale."
            );
        },
        {
            onSuccess: handleSuccess,
            onError: handleError,
        }
    );

    const handleAddMarker = (e:any) => {
        const { latitude, longitude } = e.nativeEvent.coordinate;

        if (user.premium) {
            // @ts-ignore
            addMarker({ latitude, longitude });
        } else {
            setModalPremiumIsVisible(true);
            console.log("Vous devez être premium pour ajouter un marqueur");
        }
    };

    return {
        handleAddMarker,
        modalIsVisible,
        setModalIsVisible,
        modalPremiumIsVisible,
        setModalPremiumIsVisible,
    };
};
