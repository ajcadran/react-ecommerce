import { ProductType } from "./ProductType";

export class ProductModel {
    constructor(item: any) {
        this.name = item.name;
        this.description = item.description;
        this.price = item.price;
        this.category = item.category as ProductType;
        this.tags = item.tags;
    }

    name: string;
    description: string;
    price: number;
    category: ProductType;
    tags: Array<string>;
}

export const arrayToProductModels = (items: []) => {
    return items.map(item => new ProductModel(item));
}