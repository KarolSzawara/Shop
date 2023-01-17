import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
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
  @Output() editEvent = new EventEmitter();
  constructor(private cartService:CartService,private snackBar: MatSnackBar,public tokenservice:TokenServiceService,private tempCart:TempCartService) { }
  photCols=1
  textCols=3
  prizeCols=1
  ngOnInit(): void {
  }
  deleteFromCart(deleteItem:Cartlist){
    if(this.tokenservice.isLogin()){
      this.cartService.deleteCart(deleteItem).subscribe((respones)=>{

      },(error)=>{
       this.snackBar.open(error.error.message,"Bład",{duration:2000,});
      },()=>{
          this.deleteEvent.emit(this.item);
      });
    }
    else{
      this.tempCart.deleteCartItemUnLog(this.item.idProduct)
    }
      
      
  }
  onBlur(){
    if(this.item.orderItemQuantity==0){
      this.deleteFromCart(this.item)
    }
    if(this.tokenservice.isLogin()){
      this.cartService.editAmount(this.item).subscribe(()=>{

      })
    }else{
      this.tempCart.editCartItem(this.item.idProduct,this.item.orderItemQuantity)
    }
    this.editEvent.emit()
    
    
  }
  @HostListener('window:resize', ['$event'])
  onResize() {
    if(window.innerWidth<900){
      this.photCols=5
      this.textCols=5
      this.prizeCols=5
    }
    else{
      this.photCols=1
      this.textCols=3
      this.prizeCols=1
    }
    
  }
}
