import { Request, Response } from "express";
import { resStatus } from "../helpers/tools";
import { SuppliersService } from "../services/suppliers.service";

const suppliersService = new SuppliersService();

export class SuppliersController {
    async create(req: Request, res: Response) {
        try {
            const {
                supplierName,
                address,
                email,
                phone
            } = req.body;
            const supplier = await suppliersService.create({
                supplierName,
                address,
                email,
                phone
            });
            res.json(supplier);
            
        } catch (error) {
            res.status(400).json(resStatus(400, error));            
        }
    }

    async getAll(req: Request, res: Response) {
        try {
            const suppliers = await suppliersService.getAll();
            res.json(suppliers);
        } catch (error) {
            res.status(400).json(resStatus(400, error));
        }
    }

    async getOne(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const supplier = await suppliersService.getOneById(+id);
            res.json(supplier);
        } catch (error) {
            res.status(400).json(resStatus(400, error));
        }
    }

    async update(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const {
                supplierName,
                address,
                email,
                phone
            } = req.body;
            const supplier = await suppliersService.update(+id, {
                supplierName,
                address,
                email,
                phone
            });
            res.json(supplier);

        } catch (error) {
            res.status(400).json(resStatus(400, error));
        }

    }

    async remove(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const supplier = await suppliersService.remove(+id);
            res.json(supplier);

        } catch (error) {
            res.status(400).json(resStatus(400, error));
        }
    }
}
