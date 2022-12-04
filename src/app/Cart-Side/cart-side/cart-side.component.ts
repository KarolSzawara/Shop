import { Component, OnInit } from '@angular/core';
import { Cartlist } from '../interfeces/cartlist';
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-cart-side',
  templateUrl: './cart-side.component.html',
  styleUrls: ['./cart-side.component.scss']
})
export class CartSideComponent implements OnInit {
  cartList!:Cartlist[]
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
      this.cartService.getCart().subscribe((response)=>{
        this.cartList=response
        
      },(error)=>{
        console.log(error);
      })
  }

}
