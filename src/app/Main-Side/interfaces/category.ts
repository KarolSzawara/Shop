import { Product } from "./product";

export interface Category {
    id: number|null;
    categoryName: string;
    products: Product[]|null;
}