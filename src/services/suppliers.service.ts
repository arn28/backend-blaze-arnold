import { ISupplier } from '../interfaces/person.interface';
import { Supplier } from '../models/supplier';

export class SuppliersService {
    constructor() {
    }

    async create(data: ISupplier) {
        return await Supplier.create({ ...data });
    }

    async getAll() {
        return await Supplier.findAll();

    }

    async getOneById(id: number) {
        const supplier = await Supplier.findByPk(id);
        if (!supplier) {
            throw new Error(`Supplier with id: ${id} not found`);
        }
        return await supplier;
    }

    async update(id: number, data: ISupplier) {
        const supplier = await this.getOneById(id)
        return await supplier.update({...data});
    }
    
    async remove(id: number) {
        const supplier = await this.getOneById(id)
        return await supplier.destroy();
    }
}