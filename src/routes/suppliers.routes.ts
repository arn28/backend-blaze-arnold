import { Router } from "express";
import { check } from "express-validator";
import { SuppliersController } from "../controllers/suppliers.controller";
import { ValidFields } from "../middlewares/valid-fields.middleware";

export const suppliersRoutes: Router = Router();

const suppliersController = new SuppliersController();

suppliersRoutes.get('/', suppliersController.getAll);

suppliersRoutes.get('/:id', [
    check('id', 'Id param must be a number value').isNumeric(),
    ValidFields
], suppliersController.getOne);

suppliersRoutes.post('/', [
    check('supplierName', 'supplierName is required').not().isEmpty(),
    check('supplierName', 'supplierName is string').isString(),
    check('supplierName', 'supplierName must be up to 45 characters').isLength({ max: 45 }),
    check('address', 'address is string').optional().isString(),
    check('address', 'address must be up to 100 characters').optional().isLength({ max: 100 }),
    check('email', 'email is required').not().isEmpty(),
    check('email', 'email must be a correct email').isEmail(),
    check('email', 'email must be up to 100 characters').isLength({ max: 100 }),
    check('phone', 'phone must be a correct email').optional().isString(),
    check('phone', 'phone must be up to 20 characters').optional().isLength({ max: 20 }),
    ValidFields
],  suppliersController.create);

suppliersRoutes.put('/:id', [
    check('id', 'Id param must be a number value').isNumeric(),
    check('supplierName', 'supplierName is string').optional().isString(),
    check('supplierName', 'supplierName must be up to 45 characters').isLength({ max: 45 }),
    check('address', 'address is string').optional().isString(),
    check('address', 'address must be up to 100 characters').optional().isLength({ max: 100 }),
    check('email', 'email must be a correct email').optional().isEmail(),
    check('email', 'email must be up to 100 characters').isLength({ max: 100 }),
    check('phone', 'phone must be a correct email').optional().isString(),
    check('phone', 'phone must be up to 20 characters').optional().isLength({ max: 20 }),
    ValidFields
], suppliersController.update);

suppliersRoutes.delete('/:id', [
    check('id', 'Id param must be a number value').isNumeric(),
    ValidFields
], suppliersController.remove);
