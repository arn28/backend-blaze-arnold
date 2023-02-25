import express, { Application } from 'express';
import cors from 'cors';
import { join } from 'path';
import { corsOptions } from '../config/cors-options';
import { publicRoutes } from '../routes/public.routes';
import { categoriesRoutes } from '../routes/categories.routes';
import { suppliersRoutes } from '../routes/suppliers.routes';
import { productsRoutes } from '../routes/products.routes';
import { db } from '../database/connectiondb';
import { seedRoutes } from '../routes/seed.routes';
import { tenantsRoutes } from '../routes/tenants.routes';

export class Server {
    private app: Application;
    private port: number | string;
    private path = {
        public: '/',
        categories: '/api/categories',
        products: '/api/products',
        suppliers: '/api/suppliers',
        tenants: '/api/tenants',
        seed: '/api/seed'
    }
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3000;

        //connect to DB
        this.connectToDB();

        //Initialize Middleware
        this.setMiddlewares();

        //Initialize routes
        this.setRoutes();
    }

    private async connectToDB() {
        try {
            await db.authenticate();
            console.log('Database Connected');
        } catch (error) {
            // throw new Error(error as any);
            console.error('Unable to connect to the database:', error);
        }
    }

    private async setMiddlewares() {
        this.app.use(cors(corsOptions));
        this.app.use(express.static(join(__dirname, '../../public/')));
        this.app.use(express.json());
    }

    private async setRoutes() {
        if (process.env.STATE==='dev') {
            this.app.use(this.path.seed, seedRoutes);
        }
        this.app.use(this.path.categories, categoriesRoutes);
        this.app.use(this.path.products, productsRoutes);
        this.app.use(this.path.suppliers, suppliersRoutes);
        this.app.use(this.path.tenants, tenantsRoutes);
        this.app.use(this.path.public, publicRoutes);
    }


    public listen() {
        this.app.listen(this.port, () => {
            console.log('server is running on port: ', this.port);
        });
    }
}