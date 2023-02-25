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
exports.SeedService = void 0;
const sequelize_1 = require("sequelize");
const connectiondb_1 = require("../database/connectiondb");
const genCategories_1 = require("../helpers/genCategories");
const genProducts_1 = require("../helpers/genProducts");
const genSuppliers_1 = require("../helpers/genSuppliers");
const genTenants_1 = require("../helpers/genTenants");
const categories_service_1 = require("./categories.service");
const products_service_1 = require("./products.service");
const suppliers_service_1 = require("./suppliers.service");
const tenant_service_1 = require("./tenant.service");
const categoriesService = new categories_service_1.CategoriesService();
const productsService = new products_service_1.ProductsService();
const suppliersService = new suppliers_service_1.SuppliersService();
const tenantsService = new tenant_service_1.TenantsService();
class SeedService {
    createSeed() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.deleteDB();
            yield this.createCategories();
            yield this.createProducts(30);
            yield this.createSuppliers(30);
            yield this.createTenants(30);
        });
    }
    deleteDB() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.deleteCategories();
            yield this.deleteProducts();
            yield this.deleteSuppliers();
            yield this.deleteTenants();
        });
    }
    deleteCategories() {
        return __awaiter(this, void 0, void 0, function* () {
            yield connectiondb_1.db.query(`DELETE FROM categories;`, { type: sequelize_1.QueryTypes.DELETE });
            yield connectiondb_1.db.query(`ALTER TABLE categories AUTO_INCREMENT=0;
            `, { type: sequelize_1.QueryTypes.RAW });
        });
    }
    createCategories() {
        return __awaiter(this, void 0, void 0, function* () {
            const categories = (0, genCategories_1.genCategories)();
            for (const category of categories) {
                yield categoriesService.create(Object.assign({}, category));
            }
        });
    }
    deleteProducts() {
        return __awaiter(this, void 0, void 0, function* () {
            yield connectiondb_1.db.query(`DELETE FROM products;`, { type: sequelize_1.QueryTypes.DELETE });
            yield connectiondb_1.db.query(`ALTER TABLE products AUTO_INCREMENT=0;
            `, { type: sequelize_1.QueryTypes.RAW });
        });
    }
    createProducts(n) {
        return __awaiter(this, void 0, void 0, function* () {
            const products = (0, genProducts_1.genProducts)(n);
            for (const product of products) {
                yield productsService.create(Object.assign({}, product));
            }
        });
    }
    deleteSuppliers() {
        return __awaiter(this, void 0, void 0, function* () {
            yield connectiondb_1.db.query(`DELETE FROM suppliers;`, { type: sequelize_1.QueryTypes.DELETE });
            yield connectiondb_1.db.query(`ALTER TABLE suppliers AUTO_INCREMENT=0;
            `, { type: sequelize_1.QueryTypes.RAW });
        });
    }
    createSuppliers(n) {
        return __awaiter(this, void 0, void 0, function* () {
            const suppliers = (0, genSuppliers_1.genSuppliers)(n);
            for (const supplier of suppliers) {
                yield suppliersService.create(Object.assign({}, supplier));
            }
        });
    }
    deleteTenants() {
        return __awaiter(this, void 0, void 0, function* () {
            yield connectiondb_1.db.query(`DELETE FROM tenants;`, { type: sequelize_1.QueryTypes.DELETE });
            yield connectiondb_1.db.query(`ALTER TABLE tenants AUTO_INCREMENT=0;
            `, { type: sequelize_1.QueryTypes.RAW });
        });
    }
    createTenants(n) {
        return __awaiter(this, void 0, void 0, function* () {
            const tenants = (0, genTenants_1.genTenants)(n);
            for (const tenant of tenants) {
                yield tenantsService.create(Object.assign({}, tenant));
            }
        });
    }
}
exports.SeedService = SeedService;
//# sourceMappingURL=seed.service.js.map