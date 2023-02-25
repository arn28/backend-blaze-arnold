import { Router } from "express";
import { check } from "express-validator";
import { TenantsController } from "../controllers/tenants.controller";
import { ValidFields } from "../middlewares/valid-fields.middleware";

export const tenantsRoutes: Router = Router();

const tenantsController = new TenantsController();

tenantsRoutes.get('/', tenantsController.getAll);

tenantsRoutes.get('/:id', [
    check('id', 'Id param must be a number value').isNumeric(),
    ValidFields
], tenantsController.getOne);

tenantsRoutes.post('/', [
    check('tenantName', 'tenantName is string').optional().isString(),
    check('tenantName', 'tenantName must be up to 45 characters').isLength({ max: 45 }),
    check('address', 'address is string').optional().isString(),
    check('address', 'address must be up to 100 characters').optional().isLength({ max: 100 }),
    ValidFields
],tenantsController.create);

tenantsRoutes.put('/:id', [
    check('id', 'Id param must be a number value').isNumeric(),
    check('tenantName', 'tenantName is string').optional().isString(),
    check('tenantName', 'tenantName must be up to 45 characters').isLength({ max: 45 }),
    check('address', 'address is string').optional().isString(),
    check('address', 'address must be up to 100 characters').optional().isLength({ max: 100 }),
    ValidFields
], tenantsController.update);

tenantsRoutes.delete('/:id', [
    check('id', 'Id param must be a number value').isNumeric(),
    ValidFields
], tenantsController.remove);
