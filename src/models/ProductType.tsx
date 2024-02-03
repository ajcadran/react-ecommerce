export enum ProductType {
    PRINT = "Print",
    BADGE = "Badge",
    CARD = "Business Card",
    DIE_STICKER = "Die-Cut Sticker"
}

const ProductTypes = Object.keys(ProductType).map(key => ({
    id: ProductType[key],
    name: ProductType[key],
}));
