import { CATEGORIES } from '../data/category'
import { ICategory } from '../interfaces/category.interface';
import { TypePhoto } from '../enums/type-photo.enum';
import { randomIntUpTo } from './tools';

const genPhotoType = (): TypePhoto => {
    const n = randomIntUpTo(3);
    let photoType: TypePhoto;

    switch (n) {
        case 0:
            photoType = TypePhoto.document;
            break;
        case 1:
            photoType = TypePhoto.photo;
            break;

        default:
            photoType = TypePhoto.kml;
            break;
    }
    return photoType;
}

export const genCategories = (): ICategory[] => {
    let categories: ICategory[] = [];
    for (let i: number = 0; i < CATEGORIES.length; i++) {
        const category: ICategory = {
            // id: i + 1,
            categoryName: CATEGORIES[i],
            photoType: genPhotoType()
            // categoryParent_id: randomIntUpTo(i)
        }
        categories.push(category);
    }
    return categories;
}