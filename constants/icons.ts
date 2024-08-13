import {handleLinking} from "@/helpers/functions/navigationMap";

export const iconsMaterial=[
    {
        name: "directions",
        size: 48,
        color: "#294C60",
        text: "Direction",
        // @ts-ignore
        onPress: () => console.log("Direction")
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
    },
    {
        name: "exclamation-circle",
        size: 48,
        color: "#294C60",
        text: "Signaler",
        onPress: true
    }
]