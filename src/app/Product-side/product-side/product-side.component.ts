import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import {ImageItem} from "ng-gallery"
import { CartItem } from 'src/app/Main-Side/interfaces/cartitem';
import { CartService } from 'src/app/Cart-Side/services/cart/cart.service';
import { DetailsService } from 'src/app/Main-Side/services/product-details/details.service';
import { CartDialogComponent } from '../cart-dialog/cart-dialog.component';
import { ProductDetails } from './interfacesProductSide/productDetails';
@Component({
  selector: 'app-product-side',
  templateUrl: './product-side.component.html',
  styleUrls: ['./product-side.component.scss']
})
export class ProductSideComponent implements OnInit {
productId!:number;
amount!:number;
  public comlete:boolean=false
  public productDetails!:ProductDetails;
  public errorMessage!:string
  images: Array<ImageItem>=[];
  constructor(private detailsService:DetailsService,private route:ActivatedRoute,private cartService:CartService,private dialog:MatDialog) {
    
   }

  ngOnInit() {
    this.route.params.subscribe(params=>{
      this.productId=params['id']
    })
    this.detailsService.getProduct(this.productId).subscribe((response)=>{
      this.productDetails=response
      this.images.push(new ImageItem({src:this.productDetails.srcPhoto.toString(),thumb:this.productDetails.srcPhoto.toString()}))
    },(error)=>{
        
    },()=>{
        this.comlete=true;
    })
    
  }
  addToCart(){
      let cartItem=new CartItem()
      console.log(this.productDetails.idProduct);
      
      cartItem.productID=this.productDetails.idProduct
      cartItem.productQuantity=this.amount
      this.cartService.addToCart(cartItem).subscribe((response)=>{
        this.errorMessage=""
        
      },(error)=>{
       
        this.errorMessage=error.error.message
        
      },
      ()=>{
          this.dialog.open(CartDialogComponent)
      })
  }

}
