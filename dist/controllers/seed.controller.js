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
exports.SeedController = void 0;
const seed_service_1 = require("../services/seed.service");
const seedService = new seed_service_1.SeedService();
class SeedController {
    createSeed(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield seedService.createSeed();
                res.json('Seed Successfully!');
            }
            catch (error) {
                res.status(500).json(error);
            }
        });
    }
}
exports.SeedController = SeedController;
//# sourceMappingURL=seed.controller.js.map