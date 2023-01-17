import { Injectable } from '@angular/core';
import { CartItem } from 'src/app/Main-Side/interfaces/cartitem';
import { Cartlist } from '../interfeces/cartlist';
import { CartService } from './cart/cart.service';

@Injectable({
  providedIn: 'root'
})
export class TempCartService {
  actualCartList: Array<Cartlist> = new Array<Cartlist>();
constructor(private cartService:CartService) { }
addToCart(cartItem:Cartlist){

  
  
  const i = this.actualCartList.findIndex(data=>data.idProduct==cartItem.idProduct)
  if(i>=0){
    this.actualCartList[i].orderItemQuantity+=cartItem.orderItemQuantity;
    return this.actualCartList[i].orderItemQuantity
  }
  else{
    this.actualCartList.push(cartItem);
    return cartItem.orderItemQuantity
  } 
  
}
deleteCartItemUnLog(id: number) {
  const cartItemIndex = this.actualCartList.findIndex(e => e.idProduct == id);

  this.actualCartList.splice(cartItemIndex, 1);
}
getList(){
  return this.actualCartList;
}
editCartItem(id:number,amount:number){
  const cartItemIndex = this.actualCartList.findIndex(e => e.idProduct == id);
  this.actualCartList[cartItemIndex].orderItemQuantity=amount;
}
cutAmountItem(id:number,amount:number){
  const cartItemIndex = this.actualCartList.findIndex(e => e.idProduct == id);
  this.actualCartList[cartItemIndex].orderItemQuantity-=amount;
}
addToCartAll(token:string|null){
  
  if(token)
  this.actualCartList.forEach(item=>{
    let temp=new CartItem()
    temp.productID=item.idProduct
    temp.productQuantity=item.orderItemQuantity
    this.cartService.addToCartWithToken(temp,token).subscribe()
  })
}
}
