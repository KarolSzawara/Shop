import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenServiceService } from 'src/app/Login-Side/loginservices/token-service.service';
import { Cartlist } from '../interfeces/cartlist';
import { CartService } from '../services/cart/cart.service';
import { TempCartService } from '../services/temp-cart.service';

@Component({
  selector: 'app-cart-side',
  templateUrl: './cart-side.component.html',
  styleUrls: ['./cart-side.component.scss']
})
export class CartSideComponent implements OnInit {
  cartList!:Cartlist[]
  constructor(private cartService:CartService,private router: Router,public tokenservice:TokenServiceService,private tempCart:TempCartService) { }
  cartPrize=0;
  ngOnInit(): void {
    if(this.tokenservice.isLoggedin$){
      this.cartService.getCart().subscribe((response)=>{
        this.cartList=response
        
      },(error)=>{
      },()=>{
          this.cartList.forEach(item=>{
            this.cartPrize+=item.orderItemQuantity*item.productPrize
          })
      })
    }
    else this.cartList=this.tempCart.getList()
      
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
    if(this.tokenservice.isLoggedin$){
      let index=this.cartList.indexOf(item)
      if(index>-1){
        this.cartList.splice(index,1);
      }
    }
    else{
      this.tempCart.deleteCartItemUnLog(item.idProduct)
      this.cartList=this.tempCart.getList();
    }
      
  }

}
