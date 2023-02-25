import { IProduct } from '../interfaces/product.interface';
import { ModelData } from '../models/ModelData';
import { genProducts } from '../helpers/genProducts';
import { Product } from '../models/product';


export class ProductsService {
    private productModel: ModelData<IProduct> = new ModelData();

    constructor() {
        // this.productModel.loadData(genProducts(20));
    }

    async create(data: IProduct) {
        return await Product.create({ ...data });
    }

    async getAll() {
        return await Product.findAll();

    }

    async getOneById(id: number) {
        const product = await Product.findByPk(id);
        if (!product) {
            throw new Error(`product with id: ${id} not found`);
        }
        return product;
    }

    async update(id: number, data: IProduct) {
        const product = await this.getOneById(id)
        return await product.update({...data});
    }
    
    async revome(id: number) {
        const product = await this.getOneById(id)
        return await product.destroy();
    }
}