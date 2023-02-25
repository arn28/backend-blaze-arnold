"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tenant = void 0;
const sequelize_1 = require("sequelize");
const connectiondb_1 = require("../database/connectiondb");
exports.Tenant = connectiondb_1.db.define("tenant", {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    tenantName: {
        type: sequelize_1.DataTypes.STRING(45),
        allowNull: true
    },
    address: {
        type: sequelize_1.DataTypes.STRING(45),
        allowNull: true
    }
});
//# sourceMappingURL=tenant.js.map