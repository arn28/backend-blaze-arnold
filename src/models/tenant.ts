import { DataTypes } from "sequelize";
import { db } from "../database/connectiondb";

export const Tenant = db.define("tenant", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    tenantName: {
        type: DataTypes.STRING(45),
        allowNull: true
    },
    address: {
        type: DataTypes.STRING(45),
        allowNull: true
    }

})