"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.genCategories = void 0;
const category_1 = require("../data/category");
const type_photo_enum_1 = require("../enums/type-photo.enum");
const tools_1 = require("./tools");
const genPhotoType = () => {
    const n = (0, tools_1.randomIntUpTo)(3);
    let photoType;
    switch (n) {
        case 0:
            photoType = type_photo_enum_1.TypePhoto.document;
            break;
        case 1:
            photoType = type_photo_enum_1.TypePhoto.photo;
            break;
        default:
            photoType = type_photo_enum_1.TypePhoto.kml;
            break;
    }
    return photoType;
};
const genCategories = () => {
    let categories = [];
    for (let i = 0; i < category_1.CATEGORIES.length; i++) {
        const category = {
            categoryName: category_1.CATEGORIES[i],
            photoType: genPhotoType()
        };
        categories.push(category);
    }
    return categories;
};
exports.genCategories = genCategories;
//# sourceMappingURL=genCategories.js.map