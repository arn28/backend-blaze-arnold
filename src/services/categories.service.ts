import { ICategory } from '../interfaces/category.interface';
import { ModelData } from '../models/ModelData';
import { genCategories } from '../helpers/genCategories';
import { Category } from '../models/category';

export class CategoriesService {
    private categoryModel: ModelData<ICategory> = new ModelData();

    constructor() {
        // this.categoryModel.loadData(genCategories());
    }

    async create(data: ICategory) {
        // try {
        //     return await this.categoryModel.create(data);
        // } catch (error) {
        //     console.log(error);
        // }
        // return await this.categoryModel.create(data);

        //with mysql db :
        return await Category.create({ ...data });
    }

    
    async getAll() {
        // try {
        //     return await this.categoryModel.find();
        // } catch (error) {
        //     console.log(error);
        // }
        // return await Category.create({...data});

        //with mysql db :
        return await Category.findAll();
    }

    async getOneById(id: number) {
        // try {
        //     return await this.categoryModel.findById(id);
        // } catch (error) {
        //     console.log(error);
        // }
        // return await this.categoryModel.findById(id);

        //with mysql db :
        const category = await Category.findByPk(id);
        if (!category) {
            throw new Error(`Category with id: ${id} not found`);
        }

        return await category;
    }

    async update(id: number, data: ICategory) {
        // try {
        //     return await this.categoryModel.updateOneById(id, data);
        // } catch (error) {
        //     console.log(error);
        // }
        // return await this.categoryModel.updateOneById(id, data);

        //with mysql db :
        const category = await this.getOneById(id);
        return await category.update({ ...data });
    }

    async remove(id: number) {
        // try {
        //     return await this.categoryModel.deleteOneById(id);
        // } catch (error) {
        //     console.log(error);
        // }
        // return await this.categoryModel.deleteOneById(id);

        //with mysql db :
        const category = await this.getOneById(id);
        return await category.destroy();

    }
}