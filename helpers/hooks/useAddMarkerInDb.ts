import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { addMarkerInDb } from "@/helpers/functions/addMarkerInDb";
import { useDispatch, useSelector } from "react-redux";
import { addBookSpace } from "@/redux/bookSpacesSlice";

export const useAddMarkerInDb = () => {
    const [modalIsVisible, setModalIsVisible] = useState(false);
    const [modalPremiumIsVisible, setModalPremiumIsVisible] = useState(false);
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.value);

    const { mutate: addMarker } = useMutation(
        async ({ latitude, longitude }) => {
            return await addMarkerInDb(
                user.uniqueId,
                latitude,
                longitude,
                "Découvrez et partagez des livres gratuitement dans cette boîte à livres conviviale."
            );
        },
        {
            onSuccess: (data) => {
                if (data.result) {
                    setModalIsVisible(true);
                    dispatch(addBookSpace(data.bookPlace));
                } else {
                    console.log("Erreur lors de l'ajout du marqueur :", result);
                }
            },
            onError: (error) => {
                console.error("Erreur lors de la mutation :", error);
            },
        }
    );

    const handleAddMarker = (e) => {
        const { latitude, longitude } = e.nativeEvent.coordinate;

        if (user.premium) {
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
