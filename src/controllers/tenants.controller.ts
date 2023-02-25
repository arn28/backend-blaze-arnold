import { Request, Response } from "express";
import { resStatus } from "../helpers/tools";
import { TenantsService } from "../services/tenant.service";

const tenantsService = new TenantsService();

export class TenantsController {
    async create(req: Request, res: Response) {
        try {
            const {
                tenantName,
                address
            } = req.body;
            const tenant = await tenantsService.create({
                tenantName,
                address
            });
            res.json(tenant);
            
        } catch (error) {
            res.status(400).json(resStatus(400, error));            
        }
    }

    async getAll(req: Request, res: Response) {
        try {
            const tenants = await tenantsService.getAll();
            res.json(tenants);
        } catch (error) {
            res.status(400).json(resStatus(400, error));
        }
    }

    async getOne(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const tenant = await tenantsService.getOneById(+id);
            res.json(tenant);
        } catch (error) {
            res.status(400).json(resStatus(400, error));
        }
    }

    async update(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const {
                tenantName,
                address,
   
            } = req.body;
            const tenant = await tenantsService.update(+id, {
                tenantName,
                address,

            });
            res.json(tenant);

        } catch (error) {
            res.status(400).json(resStatus(400, error));
        }

    }

    async remove(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const tenant = await tenantsService.remove(+id);
            res.json(tenant);

        } catch (error) {
            res.status(400).json(resStatus(400, error));
        }
    }
}
