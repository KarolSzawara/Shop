import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cartlist } from '../interfeces/cartlist';
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-cart-side',
  templateUrl: './cart-side.component.html',
  styleUrls: ['./cart-side.component.scss']
})
export class CartSideComponent implements OnInit {
  cartList!:Cartlist[]
  constructor(private cartService:CartService,private router: Router) { }
  cartPrize=0;
  ngOnInit(): void {
      this.cartService.getCart().subscribe((response)=>{
        this.cartList=response
        
      },(error)=>{
      },()=>{
          this.cartList.forEach(item=>{
            this.cartPrize+=item.orderItemQuantity*item.productPrize
          })
      })
  }
  goToCartHistory(){
    this.router.navigate(['history']);
  }
  buyCart(){
    this.cartService.buyCart().subscribe((response)=>{
      console.log(response); 
    },(error)=>{
      console.log(error);
    },()=>{
      this.cartPrize=0;
      this.cartService.getCart().subscribe((response)=>{
        this.cartList=response
        
      })
    })
  }
  deleteEvent(item:Cartlist){
      let index=this.cartList.indexOf(item)
      if(index>-1){
        this.cartList.splice(index,1);
      }
  }

}
