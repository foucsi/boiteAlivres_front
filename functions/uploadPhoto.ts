import * as ImagePicker from "expo-image-picker";
import {addPhotoReducer} from "@/redux/bookSpaces";
import {getAllBookPlaces} from "@/functions/getAllBookPlaces";

export const uploadPhoto = async (bookPlaceId: string, dispatch:any) => {
    const url = `http://localhost:3000/photos/uploadPhoto/${bookPlaceId}`;
    try {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            const formData = new FormData();
            // @ts-ignore
            formData.append("userPhoto", {
                uri: result.assets[0].uri,
                name: "photo.jpg",
                type: "image/jpeg",
            });

            const response = await fetch(url, {
                method: "PUT",
                body: formData,
            });

            const text = await response.text(); // Get raw response text
            console.log("Raw response text:", text);

            let data;
            try {
                data = JSON.parse(text); // Attempt to parse JSON
            } catch (parseError) {
                console.error("Failed to parse JSON:", parseError);
                console.error("Server response was:", text);
                return; // Exit the function if parsing fails
            }

            if (data.result) {
                // console.log("Photo uploaded");
                // console.log("data.photo:", data.bookPlace.photo)
                dispatch(addPhotoReducer(data.bookPlace.photo));
                await getAllBookPlaces()
            } else {
                console.log("Photo not uploaded", data.error);
            }
        }
    } catch (err) {
        console.log(err);
    }
};
