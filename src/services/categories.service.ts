import { ICategory } from '../interfaces/category.interface';
import { ModelData } from '../models/ModelData';
import { genCategories } from '../helpers/genCategories';
import { Category } from '../models/category';

export class CategoriesService {
    private categoryModel: ModelData<ICategory> = new ModelData();

    constructor() {
    }

    async create(data: ICategory) {

        return await Category.create({ ...data });
    }

    
    async getAll() {

        return await Category.findAll();
    }

    async getOneById(id: number) {
        const category = await Category.findByPk(id);
        if (!category) {
            throw new Error(`Category with id: ${id} not found`);
        }

        return await category;
    }

    async update(id: number, data: ICategory) {
        const category = await this.getOneById(id);
        return await category.update({ ...data });
    }

    async remove(id: number) {
        const category = await this.getOneById(id);
        return await category.destroy();

    }
}