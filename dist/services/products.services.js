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
exports.ProductsService = void 0;
const ModelData_1 = require("../models/ModelData");
const genProducts_1 = require("../helpers/genProducts");
class ProductsService {
    constructor() {
        this.productModel = new ModelData_1.ModelData();
        this.productModel.loadData((0, genProducts_1.genProducts)(20));
    }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.productModel.create(data);
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.productModel.find();
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    getOneById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.productModel.findById(id);
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.productModel.updateOneById(id, data);
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    revome(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.productModel.deleteOneById(id);
            }
            catch (error) {
                console.log(error);
            }
        });
    }
}
exports.ProductsService = ProductsService;
//# sourceMappingURL=products.services.js.map