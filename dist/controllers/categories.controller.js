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
exports.CategoriesController = void 0;
const tools_1 = require("../helpers/tools");
const categories_service_1 = require("../services/categories.service");
const categoriesService = new categories_service_1.CategoriesService();
class CategoriesController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { categoryName, photoType, categoryParent_id, } = req.body;
                const category = yield categoriesService.create({
                    categoryName,
                    photoType,
                    categoryParent_id
                });
                // res.json(resStatus(200, category));
                res.json(category);
            }
            catch (error) {
                res.status(400).json((0, tools_1.resStatus)(400, error));
            }
        });
    }
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const categories = yield categoriesService.getAll();
                // res.json(resStatus(200, categories));
                res.json(categories);
            }
            catch (error) {
                res.status(400).json((0, tools_1.resStatus)(400, error));
            }
            // const categories = await categoriesService.getAll();
            // res.json(categories.map((category: IData<ICategory>) => {
            //     const { _id, data } = category;
            //     return { _id, ...data };
            // }));
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const category = yield categoriesService.getOneById(+id);
                // res.json(resStatus(200, category));
                res.json(category);
            }
            catch (error) {
                res.status(400).json((0, tools_1.resStatus)(400, error));
                // res.status(400).json(error.message);
                // console.log(error.message);
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const { categoryName, photoType, categoryParent_id } = req.body;
                const category = yield categoriesService.update(+id, {
                    categoryName,
                    photoType,
                    categoryParent_id
                });
                // res.json(resStatus(200, category));
                res.json(category);
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
                const category = yield categoriesService.remove(+id);
                // res.json(resStatus(200, category));
                res.json(category);
            }
            catch (error) {
                res.status(400).json((0, tools_1.resStatus)(400, error));
            }
        });
    }
}
exports.CategoriesController = CategoriesController;
//# sourceMappingURL=categories.controller.js.map