import { Request, Response } from "express";
import { resStatus } from "../helpers/tools";
import { ProductsService } from "../services/products.service";

const productsService = new ProductsService();

export class ProductsController {
    async create(req: Request, res: Response) {
        try {
            const {
                productName,
                weight,
                cannabisWeight,
                price,
                fee,
                sku,
                imageURL,
                barcode,
                description,
                cannabisVolume,
                isActive,
                createDate,
                updateDate,
                fullProductName,
                productSlug,
                salesPrice,
                inventory,
                discountAmount,
                categories_id,
                supplier_id
            } = req.body;
            const product = await productsService.create({
                productName,
                weight,
                cannabisWeight,
                price,
                fee,
                sku,
                imageURL,
                barcode,
                description,
                cannabisVolume,
                isActive,
                createDate,
                updateDate,
                fullProductName,
                productSlug,
                salesPrice,
                inventory,
                discountAmount,
                categories_id,
                supplier_id
            })
            res.json(product);
            
        } catch (error) {
            res.json(resStatus(400, error));            
        }
    }

    async getAll(req: Request, res: Response) {
        try {
            const products = await productsService.getAll();
            res.json(products);

        } catch (error) {
            res.status(400).json(resStatus(400, error)); 

        }
    }

    async getOne(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const product = await productsService.getOneById(+id);
            res.json(product);
    
        } catch (error) {
            res.status(400).json(resStatus(400, error)); 
    
        }
    }
    
    async update(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const {
                productName,
                weight,
                cannabisWeight,
                price,
                fee,
                sku,
                imageURL,
                barcode,
                description,
                cannabisVolume,
                isActive,
                createDate,
                updateDate,
                fullProductName,
                productSlug,
                salesPrice,
                inventory,
                discountAmount,
                categories_id,
                supplier_id
            } = req.body;
            const product = await productsService.update(+id,{
                productName,
                weight,
                cannabisWeight,
                price,
                fee,
                sku,
                imageURL,
                barcode,
                description,
                cannabisVolume,
                isActive,
                createDate,
                updateDate,
                fullProductName,
                productSlug,
                salesPrice,
                inventory,
                discountAmount,
                categories_id,
                supplier_id
            })
            res.json(product);
            
        } catch (error) {
            res.json(resStatus(400, error));            
        }
    }

    async remove(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const product = await productsService.revome(+id);
            res.json(product);
    
        } catch (error) {
            res.status(400).json(resStatus(400, error)); 
    
        }
    }
}