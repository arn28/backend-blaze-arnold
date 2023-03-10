"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const sequelize_1 = require("sequelize");
exports.db = new sequelize_1.Sequelize('saleproductsdb_modified', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    define: {
        scopes: {
            excludeCreatedAtUpdateAt: {
                attributes: { exclude: ['createAt', 'updateAt'] }
            }
        },
        timestamps: false
    }
});
//# sourceMappingURL=connectiondb.js.map