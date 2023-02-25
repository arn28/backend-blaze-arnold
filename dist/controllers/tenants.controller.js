"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenantsController = void 0;
const tools_1 = require("../helpers/tools");
const tenant_service_1 = require("../services/tenant.service");
const tenantsService = new tenant_service_1.TenantsService();
class TenantsController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { tenantName, address } = req.body;
                const tenant = yield tenantsService.create({
                    tenantName,
                    address
                });
                res.json(tenant);
            }
            catch (error) {
                res.status(400).json((0, tools_1.resStatus)(400, error));
            }
        });
    }
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const tenants = yield tenantsService.getAll();
                res.json(tenants);
            }
            catch (error) {
                res.status(400).json((0, tools_1.resStatus)(400, error));
            }
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const tenant = yield tenantsService.getOneById(+id);
                res.json(tenant);
            }
            catch (error) {
                res.status(400).json((0, tools_1.resStatus)(400, error));
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const { tenantName, address, } = req.body;
                const tenant = yield tenantsService.update(+id, {
                    tenantName,
                    address,
                });
                res.json(tenant);
            }
            catch (error) {
                res.status(400).json((0, tools_1.resStatus)(400, error));
            }
        });
    }
    remove(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const tenant = yield tenantsService.remove(+id);
                res.json(tenant);
            }
            catch (error) {
                res.status(400).json((0, tools_1.resStatus)(400, error));
            }
        });
    }
}
exports.TenantsController = TenantsController;
//# sourceMappingURL=tenants.controller.js.map