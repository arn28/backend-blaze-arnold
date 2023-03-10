"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validPhotoType = void 0;
const type_photo_enum_1 = require("../enums/type-photo.enum");
const validPhotoType = (photoType) => {
    if (!(Object.values(type_photo_enum_1.TypePhoto).includes(photoType))) {
        throw new Error("photoType only accepts 'Photo', 'Document' or 'Kml'");
    }
    return true;
};
exports.validPhotoType = validPhotoType;
//# sourceMappingURL=valid-phototype.js.map