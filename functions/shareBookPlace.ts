import * as Sharing from 'expo-sharing';
import * as FileSystem from 'expo-file-system';

export const shareBookPlace = async () => {
    const imageUrl = 'https://example.com/path/to/image.jpg';

    try {
        // Téléchargement de l'image localement
        const localUri = FileSystem.documentDirectory + 'image.jpg';
        await FileSystem.downloadAsync(imageUrl, localUri);

        // Vérification si le partage est disponible
        if (!(await Sharing.isAvailableAsync())) {
            alert(`Le partage n'est pas disponible sur cet appareil`);
            return;
        }

        // Partage de l'image
        await Sharing.shareAsync(localUri);
    } catch (error) {
        console.error('Erreur lors du partage de l\'image :', error);
    }
}