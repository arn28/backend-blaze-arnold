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
exports.TenantsService = void 0;
const tenant_1 = require("../models/tenant");
class TenantsService {
    constructor() {
    }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield tenant_1.Tenant.create(Object.assign({}, data));
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield tenant_1.Tenant.findAll();
        });
    }
    getOneById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const tenant = yield tenant_1.Tenant.findByPk(id);
            if (!tenant) {
                throw new Error(`Tenant with id: ${id} not found`);
            }
            return yield tenant;
        });
    }
    update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const tenant = yield this.getOneById(id);
            return yield tenant.update(Object.assign({}, data));
        });
    }
    remove(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const tenant = yield this.getOneById(id);
            return yield tenant.destroy();
        });
    }
}
exports.TenantsService = TenantsService;
//# sourceMappingURL=tenant.service.js.map