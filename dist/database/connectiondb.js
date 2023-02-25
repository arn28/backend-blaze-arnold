"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const sequelize_1 = require("sequelize");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.db = new sequelize_1.Sequelize(process.env.DB_NAME || '', process.env.DB_USERNAME || '', process.env.DB_PASSWORD || '', {
    host: process.env.DB_HOST || '',
    dialect: 'mysql',
    define: {
        scopes: {
            excludeCreatedAtUpdateAt: {
                attributes: { exclude: ['createAt', 'updateAt'] }
            }
        },
        timestamps: false
    },
    dialectOptions: {
        ssl: {
            rejectUnauthorized: true
        }
    }
});
//# sourceMappingURL=connectiondb.js.map