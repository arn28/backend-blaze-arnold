import { QueryTypes } from "sequelize";
import { db } from "../database/connectiondb";
import { genCategories } from "../helpers/genCategories";
import { genProducts } from "../helpers/genProducts";
import { genSuppliers } from "../helpers/genSuppliers";
import { genTenants } from "../helpers/genTenants";
import { CategoriesService } from "./categories.service";
import { ProductsService } from "./products.service";
import { SuppliersService } from "./suppliers.service";
import { TenantsService } from "./tenant.service";

const categoriesService = new CategoriesService();
const productsService = new ProductsService();
const suppliersService = new SuppliersService();
const tenantsService = new TenantsService();

export class SeedService{
    public async createSeed() {
        await this.deleteDB();
        await this.createCategories();
        await this.createProducts(30);
        await this.createSuppliers(30);
        await this.createTenants(30);
    }
    public async deleteDB() {
        await this.deleteCategories();
        await this.deleteProducts();
        await this.deleteSuppliers();
        await this.deleteTenants();
    }

    public async deleteCategories() {
        await db.query(
            `DELETE FROM categories;`,
            { type: QueryTypes.DELETE}
        )

        await db.query(
            `ALTER TABLE categories AUTO_INCREMENT=0;
            `,
            { type: QueryTypes.RAW}
        )
    }
    public async createCategories() {
        const categories = genCategories();
        for (const category of categories) {
            await categoriesService.create({ ...category})
        }
    }

    public async deleteProducts() {
        await db.query(
            `DELETE FROM products;`,
            { type: QueryTypes.DELETE}
        )

        await db.query(
            `ALTER TABLE products AUTO_INCREMENT=0;
            `,
            { type: QueryTypes.RAW}
        )
    }
    public async createProducts(n:number) {
        const products = genProducts(n);
        for (const product of products) {
            await productsService.create({ ...product})
        }
    }
    
    public async deleteSuppliers() {
        await db.query(
            `DELETE FROM suppliers;`,
            { type: QueryTypes.DELETE}
        )

        await db.query(
            `ALTER TABLE suppliers AUTO_INCREMENT=0;
            `,
            { type: QueryTypes.RAW}
        )
    }
    public async createSuppliers(n:number) {
        const suppliers = genSuppliers(n);
        for (const supplier of suppliers) {
            await suppliersService.create({ ...supplier})
        }
    }

    public async deleteTenants() {
        await db.query(
            `DELETE FROM tenants;`,
            { type: QueryTypes.DELETE}
        )

        await db.query(
            `ALTER TABLE tenants AUTO_INCREMENT=0;
            `,
            { type: QueryTypes.RAW}
        )
    }
    public async createTenants(n:number) {
        const tenants = genTenants(n);
        for (const tenant of tenants) {
            await tenantsService.create({ ...tenant})
        }
    }
}