"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = void 0;
const sequelize_1 = require("sequelize");
const connectiondb_1 = require("../database/connectiondb");
exports.Category = connectiondb_1.db.define("category", {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    categoryName: {
        type: sequelize_1.DataTypes.STRING(45),
        allowNull: false
    },
    photoType: {
        type: sequelize_1.DataTypes.STRING(45),
        allowNull: false
    },
    categoryParent_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true
    }
});
//# sourceMappingURL=category.js.map