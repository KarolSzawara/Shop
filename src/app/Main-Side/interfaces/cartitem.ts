export class CartItem {
    CartItem(productID:number,productQuantity:number){
        this.productID=productID
        this.productQuantity=productQuantity
    }
    productID!:number
    productQuantity!:number
}
