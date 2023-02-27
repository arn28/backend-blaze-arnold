"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoriesRoutes = void 0;
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const categories_controller_1 = require("../controllers/categories.controller");
const valid_phototype_1 = require("../helpers/valid-phototype");
const valid_fields_middleware_1 = require("../middlewares/valid-fields.middleware");
exports.categoriesRoutes = (0, express_1.Router)();
const categoriesController = new categories_controller_1.CategoriesController();
exports.categoriesRoutes.get('/', categoriesController.getAll);
exports.categoriesRoutes.get('/:id', [
    (0, express_validator_1.check)('id', 'Id param must be a number value').isNumeric(),
    valid_fields_middleware_1.ValidFields
], categoriesController.getOne);
exports.categoriesRoutes.post('/', [
    (0, express_validator_1.check)('categoryName', 'categoryName is required').not().isEmpty(),
    (0, express_validator_1.check)('categoryName', 'categoryName must be up to 45 characters').isLength({ max: 45 }),
    (0, express_validator_1.check)('photoType', "photoType only accepts 'Photo', 'Document' or 'Kml'").custom(valid_phototype_1.validPhotoType),
    (0, express_validator_1.check)('photoType', 'photoType is required').not().isEmpty(),
    (0, express_validator_1.check)('photoType', 'photoType must be up to 45 characters').isLength({ max: 45 }),
    (0, express_validator_1.check)('categoryParent_id', 'categoryParent_id must be numeric').optional().isNumeric(),
    valid_fields_middleware_1.ValidFields
], categoriesController.create);
exports.categoriesRoutes.put('/:id', [
    (0, express_validator_1.check)('id', 'Id param must be a number value').isNumeric(),
    (0, express_validator_1.check)('categoryName', 'categoryName must be up to 45 characters').isLength({ max: 45 }),
    (0, express_validator_1.check)('photoType', "photoType only accepts 'Photo', 'Document' or 'Kml'").optional().custom(valid_phototype_1.validPhotoType),
    (0, express_validator_1.check)('photoType', 'photoType must be up to 45 characters').isLength({ max: 45 }),
    (0, express_validator_1.check)('categoryParent_id', 'categoryParent_id must be numeric').optional().isNumeric(),
    valid_fields_middleware_1.ValidFields
], categoriesController.update);
exports.categoriesRoutes.delete('/:id', [
    (0, express_validator_1.check)('id', 'Id param must be a number value').isNumeric(),
    valid_fields_middleware_1.ValidFields
], categoriesController.remove);
//# sourceMappingURL=categories.routes.js.map