"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tenantsRoutes = void 0;
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const tenants_controller_1 = require("../controllers/tenants.controller");
const valid_fields_middleware_1 = require("../middlewares/valid-fields.middleware");
exports.tenantsRoutes = (0, express_1.Router)();
const tenantsController = new tenants_controller_1.TenantsController();
exports.tenantsRoutes.get('/', tenantsController.getAll);
exports.tenantsRoutes.get('/:id', [
    (0, express_validator_1.check)('id', 'Id param must be a number value').isNumeric(),
    valid_fields_middleware_1.ValidFields
], tenantsController.getOne);
exports.tenantsRoutes.post('/', [
    (0, express_validator_1.check)('tenantName', 'tenantName is string').optional().isString(),
    (0, express_validator_1.check)('tenantName', 'tenantName must be up to 45 characters').isLength({ max: 45 }),
    (0, express_validator_1.check)('address', 'address is string').optional().isString(),
    (0, express_validator_1.check)('address', 'address must be up to 100 characters').optional().isLength({ max: 100 }),
    valid_fields_middleware_1.ValidFields
], tenantsController.create);
exports.tenantsRoutes.put('/:id', [
    (0, express_validator_1.check)('id', 'Id param must be a number value').isNumeric(),
    (0, express_validator_1.check)('tenantName', 'tenantName is string').optional().isString(),
    (0, express_validator_1.check)('tenantName', 'tenantName must be up to 45 characters').isLength({ max: 45 }),
    (0, express_validator_1.check)('address', 'address is string').optional().isString(),
    (0, express_validator_1.check)('address', 'address must be up to 100 characters').optional().isLength({ max: 100 }),
    valid_fields_middleware_1.ValidFields
], tenantsController.update);
exports.tenantsRoutes.delete('/:id', [
    (0, express_validator_1.check)('id', 'Id param must be a number value').isNumeric(),
    valid_fields_middleware_1.ValidFields
], tenantsController.remove);
//# sourceMappingURL=tenants.routes.js.map