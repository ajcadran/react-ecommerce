export enum ProductType {
    CARD = "Business Card",
    STICKER = "Sticker",
}

const ProductTypes = Object.keys(ProductType).map(key => ({
    id: ProductType[key],
    name: ProductType[key],
}));
