"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsRoutes = void 0;
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const products_controller_1 = require("../controllers/products.controller");
const valid_fields_middleware_1 = require("../middlewares/valid-fields.middleware");
exports.productsRoutes = (0, express_1.Router)();
const productsController = new products_controller_1.ProductsController();
exports.productsRoutes.get('/', productsController.getAll);
exports.productsRoutes.get('/:id', [
    (0, express_validator_1.check)('id', 'Id param must be a number value').isNumeric(),
    valid_fields_middleware_1.ValidFields
], productsController.getOne);
exports.productsRoutes.post('/', [
    (0, express_validator_1.check)('productName', 'productName  is required').not().isEmpty(),
    (0, express_validator_1.check)('productName', 'productName must be up to 100 characters').isLength({ max: 100 }),
    (0, express_validator_1.check)('weight', 'weight  is required').not().isEmpty(),
    (0, express_validator_1.check)('weight', 'weight must be a number').isNumeric(),
    (0, express_validator_1.check)('cannabisWeight', 'cannabisWeight  is required').not().isEmpty(),
    (0, express_validator_1.check)('cannabisWeight', 'cannabisWeight must be a number').isNumeric(),
    (0, express_validator_1.check)('price', 'price  is required').not().isEmpty(),
    (0, express_validator_1.check)('price', 'price must be a number').isNumeric(),
    (0, express_validator_1.check)('fee', 'fee  is required').not().isEmpty(),
    (0, express_validator_1.check)('fee', 'fee must be a number').isNumeric(),
    (0, express_validator_1.check)('sku', 'sku must be a string').optional().isString(),
    (0, express_validator_1.check)('sku', 'sku must be up to 45 characters').optional().isLength({ max: 45 }),
    (0, express_validator_1.check)('imageURL', 'imageURL must be a string').optional().isString(),
    (0, express_validator_1.check)('imageURL', 'imageURL must be up to 255 characters').optional().isLength({ max: 255 }),
    (0, express_validator_1.check)('barcode', 'barcode must be a string').optional().isString(),
    (0, express_validator_1.check)('barcode', 'barcode must be up to 100 characters').optional().isLength({ max: 100 }),
    (0, express_validator_1.check)('description', 'description must be a string').optional().isString(),
    (0, express_validator_1.check)('description', 'description must be up to 255 characters').optional().isLength({ max: 255 }),
    (0, express_validator_1.check)('cannabisVolume', 'cannabisVolume must be a number').optional().isNumeric(),
    (0, express_validator_1.check)('isActive', 'isActive must be 0:inactive or 1:active').optional().isInt({ min: 0, max: 1 }),
    (0, express_validator_1.check)('createDate', 'createDate must be a date').optional().isISO8601(),
    (0, express_validator_1.check)('updateDate', 'createDate must be a date').optional().isISO8601(),
    (0, express_validator_1.check)('fullProductName', 'fullProductName must be a string').optional().isString(),
    (0, express_validator_1.check)('fullProductName', 'fullProductName must be up to 100 characters').optional().isLength({ max: 100 }),
    (0, express_validator_1.check)('productSlug', 'productSlug must be a string').optional().isString(),
    (0, express_validator_1.check)('productSlug', 'productSlug must be up to 100 characters').optional().isLength({ max: 100 }),
    (0, express_validator_1.check)('salesPrice', 'salesPrice  is required').not().isEmpty(),
    (0, express_validator_1.check)('salesPrice', 'salesPrice must be a number').isNumeric(),
    (0, express_validator_1.check)('inventory', 'inventory  is required').not().isEmpty(),
    (0, express_validator_1.check)('inventory', 'inventory must be a number').isNumeric(),
    (0, express_validator_1.check)('discountAmount', 'discountAmount  is required').not().isEmpty(),
    (0, express_validator_1.check)('discountAmount', 'discountAmount must be a number').isNumeric(),
    (0, express_validator_1.check)('productscol', 'productscol must be a string').optional().isString(),
    (0, express_validator_1.check)('productscol', 'productscol must be up to 45 characters').optional().isLength({ max: 45 }),
    (0, express_validator_1.check)('categories_id', 'categories_id must be a number').optional().isNumeric(),
    (0, express_validator_1.check)('supplier_id', 'supplier_id must be a number').optional().isNumeric(),
    (0, express_validator_1.check)('tenant_id', 'tenant_id must be a number').optional().isNumeric(),
    (0, express_validator_1.check)('retailer_id', 'retailer_id must be a number').optional().isNumeric(),
    (0, express_validator_1.check)('discount_id', 'discount_id must be a number').optional().isNumeric(),
    (0, express_validator_1.check)('parentProduct_id', 'parentProduct_id must be a number').optional().isNumeric(),
    valid_fields_middleware_1.ValidFields
], productsController.create);
exports.productsRoutes.put('/:id', [
    (0, express_validator_1.check)('id', 'Id param must be a number value').isNumeric(),
    (0, express_validator_1.check)('productName', 'productName must be up to 100 characters').isLength({ max: 100 }),
    (0, express_validator_1.check)('weight', 'weight must be a number').optional().isNumeric(),
    (0, express_validator_1.check)('cannabisWeight', 'cannabisWeight must be a number').optional().isNumeric(),
    (0, express_validator_1.check)('price', 'price must be a number').optional().isNumeric(),
    (0, express_validator_1.check)('fee', 'fee must be a number').optional().isNumeric(),
    (0, express_validator_1.check)('sku', 'sku must be a string').optional().isString(),
    (0, express_validator_1.check)('sku', 'sku must be up to 45 characters').optional().isLength({ max: 45 }),
    (0, express_validator_1.check)('imageURL', 'imageURL must be a string').optional().isString(),
    (0, express_validator_1.check)('imageURL', 'imageURL must be up to 255 characters').optional().isLength({ max: 255 }),
    (0, express_validator_1.check)('barcode', 'barcode must be a string').optional().isString(),
    (0, express_validator_1.check)('barcode', 'barcode must be up to 100 characters').optional().isLength({ max: 100 }),
    (0, express_validator_1.check)('description', 'description must be a string').optional().isString(),
    (0, express_validator_1.check)('description', 'description must be up to 255 characters').optional().isLength({ max: 255 }),
    (0, express_validator_1.check)('cannabisVolume', 'cannabisVolume must be a number').optional().isNumeric(),
    (0, express_validator_1.check)('isActive', 'isActive must be 0:inactive or 1:active').optional().isInt({ min: 0, max: 1 }),
    (0, express_validator_1.check)('createDate', 'createDate must be a date').optional().isISO8601(),
    (0, express_validator_1.check)('updateDate', 'createDate must be a date').optional().isISO8601(),
    (0, express_validator_1.check)('fullProductName', 'fullProductName must be a string').optional().isString(),
    (0, express_validator_1.check)('fullProductName', 'fullProductName must be up to 100 characters').optional().isLength({ max: 100 }),
    (0, express_validator_1.check)('productSlug', 'productSlug must be up to 100 characters').optional().isLength({ max: 100 }),
    (0, express_validator_1.check)('productSlug', 'productSlug must be a string').optional().isString(),
    (0, express_validator_1.check)('salesPrice', 'salesPrice must be a number').optional().isNumeric(),
    (0, express_validator_1.check)('inventory', 'inventory must be a number').optional().isNumeric(),
    (0, express_validator_1.check)('discountAmount', 'discountAmount must be a number').optional().isNumeric(),
    (0, express_validator_1.check)('productscol', 'productscol must be a string').optional().isString(),
    (0, express_validator_1.check)('productscol', 'productscol must be up to 45 characters').optional().isLength({ max: 45 }),
    (0, express_validator_1.check)('categories_id', 'categories_id must be a number').optional().isNumeric(),
    (0, express_validator_1.check)('supplier_id', 'supplier_id must be a number').optional().isNumeric(),
    (0, express_validator_1.check)('tenant_id', 'tenant_id must be a number').optional().isNumeric(),
    (0, express_validator_1.check)('retailer_id', 'retailer_id must be a number').optional().isNumeric(),
    (0, express_validator_1.check)('discount_id', 'discount_id must be a number').optional().isNumeric(),
    (0, express_validator_1.check)('parentProduct_id', 'parentProduct_id must be a number').optional().isNumeric(),
    valid_fields_middleware_1.ValidFields
], productsController.update);
exports.productsRoutes.delete('/:id', [
    (0, express_validator_1.check)('id', 'Id param must be a number value').isNumeric(),
    valid_fields_middleware_1.ValidFields
], productsController.remove);
//# sourceMappingURL=products.routes.js.map