"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.genProducts = void 0;
const product_1 = require("../data/product");
const type_active_enum_1 = require("../enums/type-active.enum");
const tools_1 = require("./tools");
const genProductName = (productNameArray, productArray) => {
    let productName;
    do {
        productName = (0, tools_1.getRandomElement)(productNameArray);
    } while (productArray.find(p => p.productName === productName));
    return productName;
};
const genProductWeight = () => {
    let productWeight = (0, tools_1.randomFloatUpTo)(30);
    return productWeight;
};
const genCannabisWeight = (productWeight) => {
    let CannabisWeigh = productWeight * ((0, tools_1.randomIntUpTo)(101) / 100);
    return CannabisWeigh;
};
const genPrice = () => {
    let productWeight = (0, tools_1.randomFloatUpTo)(30);
    return productWeight;
};
const genFee = (productPrice) => {
    let CannabisWeigh = productPrice * ((0, tools_1.randomIntUpTo)(16) / 100);
    return CannabisWeigh;
};
const genSku = (productName) => {
    let productSku = productName.slice(0, 3) + (0, tools_1.randomIntUpTo)(1000) + productName.slice(-4, -1);
    return productSku.toUpperCase();
};
const genImageURL = (productName) => {
    let productSku = `https://productImage.com/${productName.split(' ')[0]}`;
    return productSku;
};
const genBarcode = () => {
    let productSku = '|| ||| | ||| |';
    return productSku;
};
const genDescription = (productName, productWeight) => {
    let productDescr = `${productName} is a popular product for its leveling effects.  ${productName} with  ${productWeight}oz energizes the mind while offering full-body relaxation, making it the perfect choice for both new and veteran patients.`;
    return productDescr;
};
const genCannabisVolume = () => {
    let cannabisVolume = (0, tools_1.randomFloatUpTo)(21);
    return cannabisVolume;
};
const genIsActive = () => {
    let isActive;
    switch ((0, tools_1.randomIntUpTo)(2)) {
        case 0:
            isActive = type_active_enum_1.TypeIsActive.no;
            break;
        default:
            isActive = type_active_enum_1.TypeIsActive.yes;
            break;
    }
    return isActive;
};
const genCreateDate = () => {
    let createDate = new Date();
    return createDate;
};
const genUpdateDate = () => {
    let createDate = new Date();
    return createDate;
};
const genFullProductName = (productName, cannabisVolume, productSku) => {
    let fullProductName = `${productName} ${cannabisVolume} | ${productSku}`;
    return fullProductName;
};
const genProductSlug = (productName) => {
    let productNameArray = productName.toLowerCase().split(' ');
    let productSlug = `${productNameArray[0]}-${productNameArray[1]}`;
    return productSlug;
};
const genInventory = () => {
    let productInventory = (0, tools_1.randomIntUpTo)(100);
    return productInventory;
};
const genDiscountAmount = () => {
    let productInventory = (0, tools_1.randomIntUpTo)(20);
    return productInventory;
};
const genProductcategories_id = () => {
    let productcategories_id = (0, tools_1.randomIntUpTo)(15);
    return productcategories_id;
};
const genProductsupplier_id = () => {
    let productsupplier_id = (0, tools_1.randomIntUpTo)(15);
    return productsupplier_id;
};
const genOneProduct = (productNameArray, productArray) => {
    let productName = genProductName(productNameArray, productArray);
    let productWeight = genProductWeight();
    let productPrice = genPrice();
    let productFee = genFee(productPrice);
    let productSku = genSku(productName);
    let cannabisVolume = genCannabisVolume();
    const PRODUCT = {
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
};
const genProducts = (n) => {
    let products = [];
    for (let i = 0; i < n; i++) {
        switch ((0, tools_1.randomIntUpTo)(3)) {
            case 0:
                genOneProduct(product_1.FLOWERS, products);
                break;
            case 1:
                genOneProduct(product_1.SEEDS, products);
                break;
            default:
                genOneProduct(product_1.PREROLLS, products);
                break;
        }
    }
    return products;
};
exports.genProducts = genProducts;
//# sourceMappingURL=genProducts.js.map