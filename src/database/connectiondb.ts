import { Sequelize } from "sequelize";
export const db = new Sequelize('saleproductsdb_modified', 'root', '', {
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
})