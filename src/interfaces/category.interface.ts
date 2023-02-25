import { TypePhoto } from '../enums/type-photo.enum';
export interface ICategory {
    // id: number,
    categoryName: string,
    photoType: TypePhoto,
    categoryParent_id?: number
}