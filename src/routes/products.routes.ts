import { Router } from "express";
import { check } from "express-validator";
import { ProductsController } from "../controllers/products.controller";
import { ValidFields } from "../middlewares/valid-fields.middleware";

export const productsRoutes: Router = Router();

const productsController = new ProductsController();

productsRoutes.get('/', productsController.getAll);

productsRoutes.get('/:id', [
    check('id', 'Id param must be a number value').isNumeric(),
    ValidFields
], productsController.getOne);

productsRoutes.post('/', [
    check('productName', 'productName  is required').not().isEmpty(),
    check('productName', 'productName must be up to 100 characters').isLength({ max: 100 }),
    check('weight', 'weight  is required').not().isEmpty(),
    check('weight', 'weight must be a number').isNumeric(),
    check('cannabisWeight', 'cannabisWeight  is required').not().isEmpty(),
    check('cannabisWeight', 'cannabisWeight must be a number').isNumeric(),
    check('price', 'price  is required').not().isEmpty(),
    check('price', 'price must be a number').isNumeric(),
    check('fee', 'fee  is required').not().isEmpty(),
    check('fee', 'fee must be a number').isNumeric(),
    check('sku', 'sku must be a string').optional().isString(),
    check('sku', 'sku must be up to 45 characters').optional().isLength({ max: 45 }),
    check('imageURL', 'imageURL must be a string').optional().isString(),
    check('imageURL', 'imageURL must be up to 255 characters').optional().isLength({ max: 255 }),
    check('barcode', 'barcode must be a string').optional().isString(),
    check('barcode', 'barcode must be up to 100 characters').optional().isLength({ max: 100 }),
    check('description', 'description must be a string').optional().isString(),
    check('description', 'description must be up to 255 characters').optional().isLength({ max: 255 }),
    check('cannabisVolume', 'cannabisVolume must be a number').optional().isNumeric(),
    check('isActive', 'isActive must be 0:inactive or 1:active').optional().isInt({ min: 0, max: 1 }),
    check('createDate', 'createDate must be a date').optional().isISO8601(),
    check('updateDate', 'createDate must be a date').optional().isISO8601(),
    check('fullProductName', 'fullProductName must be a string').optional().isString(),
    check('fullProductName', 'fullProductName must be up to 100 characters').optional().isLength({ max: 100 }),
    check('productSlug', 'productSlug must be a string').optional().isString(),
    check('productSlug', 'productSlug must be up to 100 characters').optional().isLength({ max: 100 }),
    check('salesPrice', 'salesPrice  is required').not().isEmpty(),
    check('salesPrice', 'salesPrice must be a number').isNumeric(),
    check('inventory', 'inventory  is required').not().isEmpty(),
    check('inventory', 'inventory must be a number').isNumeric(),
    check('discountAmount', 'discountAmount  is required').not().isEmpty(),
    check('discountAmount', 'discountAmount must be a number').isNumeric(),
    check('productscol', 'productscol must be a string').optional().isString(),
    check('productscol', 'productscol must be up to 45 characters').optional().isLength({ max: 45 }),
    check('categories_id', 'categories_id must be a number').optional().isNumeric(),
    check('supplier_id', 'supplier_id must be a number').optional().isNumeric(),
    check('tenant_id', 'tenant_id must be a number').optional().isNumeric(),
    check('retailer_id', 'retailer_id must be a number').optional().isNumeric(),
    check('discount_id', 'discount_id must be a number').optional().isNumeric(),
    check('parentProduct_id', 'parentProduct_id must be a number').optional().isNumeric(),

    ValidFields
], productsController.create);

productsRoutes.put('/:id', [
    check('id', 'Id param must be a number value').isNumeric(),
    check('productName', 'productName must be up to 100 characters').isLength({ max: 100 }),
    check('weight', 'weight must be a number').optional().isNumeric(),
    check('cannabisWeight', 'cannabisWeight must be a number').optional().isNumeric(),
    check('price', 'price must be a number').optional().isNumeric(),
    check('fee', 'fee must be a number').optional().isNumeric(),
    check('sku')
        .optional()
        .if((value: string | null) => value !== null)
        .isString()
        .withMessage('sku must be a string'),
    check('sku', 'sku must be up to 45 characters').optional().isLength({ max: 45 }),
    check('imageURL')
        .optional()
        .if((value: string | null) => value !== null)
        .isString()
        .withMessage('imageURL must be a string'),
    check('imageURL', 'imageURL must be up to 255 characters').optional().isLength({ max: 255 }),
    check('barcode')
        .optional()
        .if((value: string | null) => value !== null)
        .isString()
        .withMessage('barcode must be a string'),
    check('barcode', 'barcode must be up to 100 characters').optional().isLength({ max: 100 }),
    check('description')
        .optional()
        .if((value: string | null) => value !== null)
        .isString()
        .withMessage('description must be a string'),
    check('description', 'description must be up to 255 characters').optional().isLength({ max: 255 }),
    check('cannabisVolume')
        .optional()
        .if((value: number | null) => value !== null)
        .isNumeric()
        .withMessage('cannabisVolume must be a number'),
    check('isActive')
        .optional()
        .if((value: number | null) => value !== null)
        .isInt({ min: 0, max: 1 })
        .withMessage('isActive must be 0:inactive or 1:active'),
    check('createDate')
        .optional()
        .if((value: string | null | Date) => value !== null)
        .isISO8601()
        .withMessage('createDate must be a date'),
    check('updateDate')
        .optional()
        .if((value: string | null | Date) => value !== null)
        .isISO8601()
        .withMessage('updateDate must be a date'),
    check('fullProductName')
        .optional()
        .if((value: string | null) => value !== null)
        .isString()
        .withMessage('fullProductName must be a string'),
    check('fullProductName', 'fullProductName must be up to 100 characters').optional().isLength({ max: 100 }),
    check('productSlug', 'productSlug must be up to 100 characters').optional().isLength({ max: 100 }),
    check('productSlug')
        .optional()
        .if((value: string | null) => value !== null)
        .isString()
        .withMessage('productSlug must be a string'),
    check('salesPrice', 'salesPrice must be a number').optional().isNumeric(),
    check('inventory', 'inventory must be a number').optional().isNumeric(),
    check('discountAmount', 'discountAmount must be a number').optional().isNumeric(),
    check('productscol')
        .optional()
        .if((value: string | null) => value !== null)
        .isString()
        .withMessage('productscol must be a string'),
    check('productscol', 'productscol must be up to 45 characters').optional().isLength({ max: 45 }),
    check('categories_id')
        .optional()
        .if((value: number | null) => value !== null)
        .isNumeric()
        .withMessage('categories_id must be a number'),
    check('supplier_id')
        .optional()
        .if((value: number | null) => value !== null)
        .isNumeric()
        .withMessage('supplier_id must be a number'),
    check('tenant_id')
        .optional()
        .if((value: number | null) => value !== null)
        .isNumeric()
        .withMessage('tenant_id must be a number'),
    check('retailer_id')
        .optional()
        .if((value: number | null) => value !== null)
        .isNumeric()
        .withMessage('retailer_id must be a number'),
    check('discount_id')
        .optional()
        .if((value: number | null) => value !== null)
        .isNumeric()
        .withMessage('discount_id must be a number'),
    check('parentProduct_id')
        .optional()
        .if((value: number | null) => value !== null)
        .isNumeric()
        .withMessage('parentProduct_id must be a number'),

    ValidFields
], productsController.update);

productsRoutes.delete('/:id', [
    check('id', 'Id param must be a number value').isNumeric(),
    ValidFields
], productsController.remove);
