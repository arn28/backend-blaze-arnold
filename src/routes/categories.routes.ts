import { Router } from "express";
import { check } from "express-validator";
import { CategoriesController } from "../controllers/categories.controller";
import { validPhotoType } from "../helpers/valid-phototype";
import { ValidFields } from "../middlewares/valid-fields.middleware";

export const categoriesRoutes: Router = Router();

const categoriesController = new CategoriesController();

categoriesRoutes.get('/', categoriesController.getAll);

categoriesRoutes.get('/:id', [
    check('id', 'Id param must be a number value').isNumeric(),
    check('id', 'Id param must be a number from 1 to 32').isInt({ min: 1, max: 32 }),
    ValidFields
], categoriesController.getOne);

categoriesRoutes.post('/', [
    check('categoryName', 'categoryName is required').not().isEmpty(),
    check('categoryName', 'categoryName must be up to 45 characters').isLength({ max: 45 }),
    check('photoType', "photoType only accepts 'Photo', 'Document' or 'Kml'").custom(validPhotoType),
    check('photoType', 'photoType is required').not().isEmpty(),
    check('photoType', 'photoType must be up to 45 characters').isLength({ max: 45 }),
    check('categoryParent_id', 'categoryParent_id must be numeric').optional().isNumeric(),
    ValidFields
],
    categoriesController.create);

categoriesRoutes.put('/:id', [
    check('id', 'Id param must be a number value').isNumeric(),
    check('id', 'Id param must be a number from 1 to 32').isInt({ min: 1, max: 32 }),
    check('categoryName', 'categoryName must be up to 45 characters').isLength({ max: 45 }),
    check('photoType', "photoType only accepts 'Photo', 'Document' or 'Kml'").optional().custom(validPhotoType),
    check('photoType', 'photoType must be up to 45 characters').isLength({ max: 45 }),
    check('categoryParent_id', 'categoryParent_id must be numeric').optional().isNumeric(),
    ValidFields
], categoriesController.update);
categoriesRoutes.delete('/:id', [
    check('id', 'Id param must be a number value').isNumeric(),
    check('id', 'Id param must be a number from 1 to 32').isInt({ min: 1, max: 32 }),
    ValidFields
], categoriesController.remove);