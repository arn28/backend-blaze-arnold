import { IProduct } from "../interfaces/product.interface";
import { FLOWERS, SEEDS, PREROLLS } from '../data/product'
import { TypeIsActive } from '../enums/type-active.enum'
import { getRandomElement, randomFloatUpTo, randomIntUpTo } from "./tools";
import { genCategories } from "./genCategories";
import { genPeople } from "./genPeople";


const genProductName = (productNameArray: string[], productArray: IProduct[]): string => {
    let productName: string;
    do {
        productName = getRandomElement(productNameArray);
    } while (productArray.find(p => p.productName === productName));
    return productName;
}

const genProductWeight = (): number => {
    let productWeight: number = randomFloatUpTo(30);
    return productWeight;
}

const genCannabisWeight = (productWeight: number): number => {
    let CannabisWeigh: number = productWeight * (randomIntUpTo(101) / 100);
    return CannabisWeigh;
}
const genPrice = (): number => {
    let productWeight: number = randomFloatUpTo(30);
    return productWeight;
}

const genFee = (productPrice: number): number => {
    let CannabisWeigh: number = productPrice * (randomIntUpTo(16) / 100);
    return CannabisWeigh;
}

const genSku = (productName: string): string => {
    let productSku: string = productName.slice(0, 3) + randomIntUpTo(1000) + productName.slice(-4, -1);
    return productSku.toUpperCase();
}

const genImageURL = (productName: string): string => {
    let productSku: string = `https://productImage.com/${productName.split(' ')[0]}`;
    return productSku;
}

const genBarcode = (): string => {
    let productSku: string = '|| ||| | ||| |';
    return productSku;
}

const genDescription = (productName: string, productWeight: number): string => {
    let productDescr: string = `${productName} is a popular product for its leveling effects, energizes the mind while offering full-body relaxation, making it the perfect choice for both new and veteran patients.`;
    return productDescr;
}

const genCannabisVolume = (): number => {
    let cannabisVolume: number = randomFloatUpTo(21);
    return cannabisVolume;
}

const genIsActive = (): TypeIsActive => {
    let isActive;
    switch (randomIntUpTo(2)) {
        case 0:
            isActive = TypeIsActive.no;
            break;

        default:
            isActive = TypeIsActive.yes;
            break;
    }
    return isActive;
}

const genCreateDate = (): Date => {
    let createDate: Date = new Date();
    return createDate;
}

const genUpdateDate = (): Date => {
    let createDate: Date = new Date();
    return createDate;
}

const genFullProductName = (productName: string, cannabisVolume: number, productSku: string): string => {
    let fullProductName: string = `${productName} ${cannabisVolume} | ${productSku}`;
    return fullProductName;
}

const genProductSlug = (productName: string): string => {
    let productNameArray: string[] = productName.toLowerCase().split(' ');
    let productSlug: string = `${productNameArray[0]}-${productNameArray[1]}`;
    return productSlug;
}

const genInventory = (): number => {
    let productInventory: number = randomIntUpTo(100);
    return productInventory;
}

const genDiscountAmount = (): number => {
    let productInventory: number = randomIntUpTo(20);
    return productInventory;
}

const genProductcategories_id = (): number => {

    let productcategories_id: number = randomIntUpTo(15);

    return productcategories_id;

}

const genProductsupplier_id = (): number => {
    let productsupplier_id: number = randomIntUpTo(15);
    
    return productsupplier_id;
}

const genOneProduct = (productNameArray: string[], productArray: IProduct[]): void => {
    let productName: string = genProductName(productNameArray, productArray);
    let productWeight: number = genProductWeight();
    let productPrice: number = genPrice();
    let productFee: number = genFee(productPrice);
    let productSku: string = genSku(productName);
    let cannabisVolume: number = genCannabisVolume();


    const PRODUCT: IProduct = {
        productName,
        weight: productWeight,
        cannabisWeight: genCannabisWeight(productWeight),
        price: productPrice,
        fee: productFee,
        sku: productSku,
        imageURL: genImageURL(productName),
        barcode: genBarcode(),
        description: genDescription(productName, productWeight),
        cannabisVolume,
        isActive: genIsActive(),
        createDate: genCreateDate().toISOString(),
        updateDate: genUpdateDate().toISOString(),
        fullProductName: genFullProductName(productName, cannabisVolume, productSku),
        productSlug: genProductSlug(productName),
        salesPrice: productPrice + productFee,
        inventory: genInventory(),
        discountAmount: genDiscountAmount(),

    };
    productArray.push(PRODUCT);
}

export const genProducts = (n: number): IProduct[] => {
    let products: IProduct[] = [];

    for (let i: number = 0; i < n; i++) {

        switch (randomIntUpTo(3)) {
            case 0:
                genOneProduct(FLOWERS, products)
                break;
            case 1:
                genOneProduct(SEEDS, products)
                break;
            default:
                genOneProduct(PREROLLS, products)
                break;
        }

    }
    return products;
}