import { Photo } from "./Photo";
import { Product } from "./Product";
import { Warehouse } from "./Warehouse";

export interface ProductInfo {
    product: Product;
    categoryId: number;
    photo: Photo;
    warehouse: Warehouse;
}
