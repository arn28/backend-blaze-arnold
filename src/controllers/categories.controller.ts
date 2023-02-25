import { Request, Response } from "express";
import { resStatus } from "../helpers/tools";
import { ICategory } from "../interfaces/category.interface";
import { IData } from "../interfaces/datamodel.interface";
import { CategoriesService } from "../services/categories.service";

const categoriesService = new CategoriesService();

export class CategoriesController {
    async create(req: Request, res: Response) {
        try {
            const {
                categoryName,
                photoType,
                categoryParent_id,
            } = req.body;
            const category = await categoriesService.create({
                categoryName,
                photoType,
                categoryParent_id
            });
            res.json(category);

        } catch (error) {
            res.status(400).json(resStatus(400, error));
        }
    }

    async getAll(req: Request, res: Response) {
        try {
            const categories = await categoriesService.getAll();
            res.json(categories);

        } catch (error) {
            res.status(400).json(resStatus(400, error));            
        }
        


    }

    async getOne(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const category = await categoriesService.getOneById(+id);
            res.json(category);

        } catch (error) {
            res.status(400).json(resStatus(400, error));

            
        }

    }

    async update(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const {
                categoryName,
                photoType,
                categoryParent_id
            } = req.body;
            const category = await categoriesService.update(+id, {
                categoryName,
                photoType,
                categoryParent_id
            });
            res.json(category);

        } catch (error) {
            res.status(400).json(resStatus(400, error));
        }

    }

    async remove(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const category = await categoriesService.remove(+id);
            res.json(category);

        } catch (error) {
            res.status(400).json(resStatus(400, error));
        }
    }
}
