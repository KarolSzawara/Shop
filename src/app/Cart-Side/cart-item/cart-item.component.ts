import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TokenServiceService } from 'src/app/Login-Side/loginservices/token-service.service';
import { Cartlist } from '../interfeces/cartlist';
import { CartService } from '../services/cart/cart.service';
import { TempCartService } from '../services/temp-cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
  @Input()item!:Cartlist 
  @Output() deleteEvent = new EventEmitter();
  constructor(private cartService:CartService,private snackBar: MatSnackBar,public tokenservice:TokenServiceService,private tempCart:TempCartService) { }

  ngOnInit(): void {
  }
  deleteFromCart(deleteItem:Cartlist){
      this.cartService.deleteCart(deleteItem).subscribe((respones)=>{

      },(error)=>{
       this.snackBar.open(error.error.message,"Bład",{duration:2000,});
      },()=>{
          this.deleteEvent.emit(this.item);
      });
  }
  onBlur(){
    if(this.tokenservice.isLoggedin$){
      this.cartService.editAmount(this.item).subscribe(()=>{

      })
    }else{
      this.tempCart.editCartItem(this.item.idProduct,this.item.orderItemQuantity)
    }
    
    
  }
}
