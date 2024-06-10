import {handleLinking} from "@/functions/navigationMap";

export const iconsMaterial=[
    {
        name: "directions",
        size: 48,
        color: "#294C60",
        text: "Direction",
        // @ts-ignore
        onPress: () => handleLinking(latitude, longitude)
    },
    {
        name: "share-alt-square",
        size: 48,
        color: "#294C60",
        text: "Partager",
        onPress: () => console.log("Partager")
    },
    {
        name: "pen-square",
        size: 48,
        color: "#294C60",
        text: "Commenter",
        onPress: true
    }
]