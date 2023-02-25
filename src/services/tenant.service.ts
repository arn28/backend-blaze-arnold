import { ITenant } from '../interfaces/person.interface';
import { Tenant } from '../models/tenant';

export class TenantsService {
    constructor() {
    }

    async create(data: ITenant) {
        return await Tenant.create({ ...data });
    }

    async getAll() {
        return await Tenant.findAll();

    }

    async getOneById(id: number) {
        const tenant = await Tenant.findByPk(id);
        if (!tenant) {
            throw new Error(`Tenant with id: ${id} not found`);
        }
        return await tenant;
    }

    async update(id: number, data: ITenant) {
        const tenant = await this.getOneById(id)
        return await tenant.update({...data});
    }
    
    async remove(id: number) {
        const tenant = await this.getOneById(id)
        return await tenant.destroy();
    }
}