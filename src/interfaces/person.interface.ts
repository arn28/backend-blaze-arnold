export interface IPerson{
    // id: number,
    fullName: string,
    address?: string,
    email: string,
    phone?: string
}

export interface ISupplier extends Pick<IPerson, 'address' | 'email' | 'phone'> {
    supplierName: string
}

export interface ITenant extends Pick<IPerson, 'address'> {
    tenantName?: string
}