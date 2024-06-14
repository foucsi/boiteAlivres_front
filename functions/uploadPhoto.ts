import * as ImagePicker from "expo-image-picker";
import {addPhotoReducer} from "@/redux/bookSpaces";
import {URL_UPLOAD_PHOTO} from "@/constants/Url";

export const uploadPhoto = async (bookPlaceId: string, dispatch: any) => {
    const url = URL_UPLOAD_PHOTO(bookPlaceId);
    // const url = `http://localhost:3000/photos/uploadPhoto/${bookPlaceId}`;
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
                return null; // Exit the function if parsing fails
            }

            if (data.result) {
                dispatch(addPhotoReducer({photo: data.bookPlace.photo}));
                return data.bookPlace.photo; // Return the new photo URL
            } else {
                console.log("Photo not uploaded", data.error);
                return null;
            }
        }
    } catch (err) {
        console.log(err);
        return null;
    }
};
