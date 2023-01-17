import { Component, HostListener, OnInit } from '@angular/core';
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
  errorMessage=""
  cartList!:Cartlist[]
  constructor(private cartService:CartService,private router: Router,public tokenservice:TokenServiceService,private tempCart:TempCartService) { }
  cartPrize=0;

  prizeCols=3;
  cartCols=6;
  prizeRows=3;
  cartRows=2;
  ngOnInit(): void {
    
    if(this.tokenservice.isLogin()){
      this.cartService.getCart().subscribe((response)=>{
        this.cartList=response
        
      },(error)=>{
        console.log(this.errorMessage);
        this.errorMessage=error.error.message
        
        
      },()=>{
          this.cartList.forEach(item=>{
            this.cartPrize+=item.orderItemQuantity*item.productPrize
            this.cartPrize=parseFloat(this.cartPrize.toFixed(2));
          })
          this.errorMessage=""
          this.cartRows=2*this.cartList.length
      })
    }
    else this.cartList=this.tempCart.getList()
    
      
  }
  goToCartHistory(){
    this.router.navigate(['history']);
  }
  buyCart(){
    this.cartService.buyCart().subscribe((response)=>{
      
    },(error)=>{
      
        this.errorMessage=error.error.message
    },()=>{
      this.cartPrize=0;
      this.cartService.getCart().subscribe((response)=>{
        this.cartList=response
        this.errorMessage=""
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
      
      this.cartList=this.tempCart.getList();
    }
      
  }
  editEvent(){
    this.cartPrize=0;
    this.cartList.forEach(item=>{
      this.cartPrize+=item.orderItemQuantity*item.productPrize
    })
    this.cartPrize=parseFloat(this.cartPrize.toFixed(2));
  }
  @HostListener('window:resize', ['$event'])
  onResize() {
    if(window.innerWidth<900){
      this.prizeCols=9;
      this.cartCols=9;
      this.prizeRows=8
      this.cartRows=20*this.cartList.length
    }
    else{
      this.prizeCols=3;
      this.cartCols=6;
      this.prizeRows=2
      this.cartRows=2*this.cartList.length
    }
    
  }
}
