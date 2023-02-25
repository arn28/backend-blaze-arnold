"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.suppliersRoutes = void 0;
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const suppliers_controller_1 = require("../controllers/suppliers.controller");
const valid_fields_middleware_1 = require("../middlewares/valid-fields.middleware");
exports.suppliersRoutes = (0, express_1.Router)();
const suppliersController = new suppliers_controller_1.SuppliersController();
exports.suppliersRoutes.get('/', suppliersController.getAll);
exports.suppliersRoutes.get('/:id', [
    (0, express_validator_1.check)('id', 'Id param must be a number value').isNumeric(),
    valid_fields_middleware_1.ValidFields
], suppliersController.getOne);
exports.suppliersRoutes.post('/', [
    (0, express_validator_1.check)('supplierName', 'supplierName is required').not().isEmpty(),
    (0, express_validator_1.check)('supplierName', 'supplierName is string').isString(),
    (0, express_validator_1.check)('supplierName', 'supplierName must be up to 45 characters').isLength({ max: 45 }),
    (0, express_validator_1.check)('address', 'address is string').optional().isString(),
    (0, express_validator_1.check)('address', 'address must be up to 100 characters').optional().isLength({ max: 100 }),
    (0, express_validator_1.check)('email', 'email is required').not().isEmpty(),
    (0, express_validator_1.check)('email', 'email must be a correct email').isEmail(),
    (0, express_validator_1.check)('email', 'email must be up to 100 characters').isLength({ max: 100 }),
    (0, express_validator_1.check)('phone', 'phone must be a correct email').optional().isString(),
    (0, express_validator_1.check)('phone', 'phone must be up to 20 characters').optional().isLength({ max: 20 }),
    valid_fields_middleware_1.ValidFields
], suppliersController.create);
exports.suppliersRoutes.put('/:id', [
    (0, express_validator_1.check)('id', 'Id param must be a number value').isNumeric(),
    (0, express_validator_1.check)('supplierName', 'supplierName is string').optional().isString(),
    (0, express_validator_1.check)('supplierName', 'supplierName must be up to 45 characters').isLength({ max: 45 }),
    (0, express_validator_1.check)('address', 'address is string').optional().isString(),
    (0, express_validator_1.check)('address', 'address must be up to 100 characters').optional().isLength({ max: 100 }),
    (0, express_validator_1.check)('email', 'email must be a correct email').optional().isEmail(),
    (0, express_validator_1.check)('email', 'email must be up to 100 characters').isLength({ max: 100 }),
    (0, express_validator_1.check)('phone', 'phone must be a correct email').optional().isString(),
    (0, express_validator_1.check)('phone', 'phone must be up to 20 characters').optional().isLength({ max: 20 }),
    valid_fields_middleware_1.ValidFields
], suppliersController.update);
exports.suppliersRoutes.delete('/:id', [
    (0, express_validator_1.check)('id', 'Id param must be a number value').isNumeric(),
    valid_fields_middleware_1.ValidFields
], suppliersController.remove);
//# sourceMappingURL=suppliers.routes.js.map