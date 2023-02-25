import { TypePhoto } from "../enums/type-photo.enum"

export const validPhotoType = (photoType:TypePhoto) => {
    if (!(Object.values(TypePhoto).includes(photoType))) {
        throw new Error("photoType only accepts 'Photo', 'Document' or 'Kml'");
        
    }
    return true;
}