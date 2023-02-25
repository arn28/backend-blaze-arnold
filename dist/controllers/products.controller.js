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
exports.ProductsController = void 0;
const tools_1 = require("../helpers/tools");
const products_service_1 = require("../services/products.service");
const productsService = new products_service_1.ProductsService();
class ProductsController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { productName, weight, cannabisWeight, price, fee, sku, imageURL, barcode, description, cannabisVolume, isActive, createDate, updateDate, fullProductName, productSlug, salesPrice, inventory, discountAmount, categories_id, supplier_id } = req.body;
                const product = yield productsService.create({
                    productName,
                    weight,
                    cannabisWeight,
                    price,
                    fee,
                    sku,
                    imageURL,
                    barcode,
                    description,
                    cannabisVolume,
                    isActive,
                    createDate,
                    updateDate,
                    fullProductName,
                    productSlug,
                    salesPrice,
                    inventory,
                    discountAmount,
                    categories_id,
                    supplier_id
                });
                res.json(product);
            }
            catch (error) {
                res.json((0, tools_1.resStatus)(400, error));
            }
        });
    }
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const products = yield productsService.getAll();
                res.json(products);
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
                const product = yield productsService.getOneById(+id);
                res.json(product);
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
                const { productName, weight, cannabisWeight, price, fee, sku, imageURL, barcode, description, cannabisVolume, isActive, createDate, updateDate, fullProductName, productSlug, salesPrice, inventory, discountAmount, categories_id, supplier_id } = req.body;
                const product = yield productsService.update(+id, {
                    productName,
                    weight,
                    cannabisWeight,
                    price,
                    fee,
                    sku,
                    imageURL,
                    barcode,
                    description,
                    cannabisVolume,
                    isActive,
                    createDate,
                    updateDate,
                    fullProductName,
                    productSlug,
                    salesPrice,
                    inventory,
                    discountAmount,
                    categories_id,
                    supplier_id
                });
                res.json(product);
            }
            catch (error) {
                res.json((0, tools_1.resStatus)(400, error));
            }
        });
    }
    remove(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const product = yield productsService.revome(+id);
                res.json(product);
            }
            catch (error) {
                res.status(400).json((0, tools_1.resStatus)(400, error));
            }
        });
    }
}
exports.ProductsController = ProductsController;
//# sourceMappingURL=products.controller.js.map