import * as ImagePicker from "expo-image-picker";

export const uploadPhoto = async (uniqueId: string) => {
    const url = `http://localhost:3000/photos/uploadPhoto/${uniqueId}`
    try{
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

            const response = await fetch(
                url,
                {
                    method: "PUT",
                    body: formData,
                }
            );
            // Vérifiez d'abord si la réponse est OK
            // if (!response.ok) {
            //     const text = await response.text();
            //     throw new Error(`Response not OK: ${text}`);
            // }
            const data = await response.json();
            if (data.result) {
                console.log("Photo uploaded");
            }
        }
    }catch(err){
        console.log(err)
    }
}