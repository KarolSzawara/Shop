import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import {ImageItem} from "ng-gallery"
import { CartItem } from 'src/app/Main-Side/interfaces/cartitem';
import { CartService } from 'src/app/Cart-Side/services/cart/cart.service';
import { DetailsService } from 'src/app/Main-Side/services/product-details/details.service';
import { CartDialogComponent } from '../cart-dialog/cart-dialog.component';
import { ProductDetails } from './interfacesProductSide/productDetails';
import { TabElement } from './interfacesProductSide/tab-element';
import { TokenServiceService } from 'src/app/Login-Side/loginservices/token-service.service';
import { TempCartService } from 'src/app/Cart-Side/services/temp-cart.service';
import { Cartlist } from 'src/app/Cart-Side/interfeces/cartlist';
@Component({
  selector: 'app-product-side',
  templateUrl: './product-side.component.html',
  styleUrls: ['./product-side.component.scss']
})
export class ProductSideComponent implements OnInit {
productId!:number;
amount!:number;
rows=2;
  public comlete:boolean=false
  public productDetails!:ProductDetails;
  public errorMessage!:string
  images: Array<ImageItem>=[];
  public dataSource!:TabElement[];
  displayedColumns: string[] = ['name', 'value'];
  constructor(private detailsService:DetailsService,private route:ActivatedRoute,private cartService:CartService,private dialog:MatDialog,private tokenservice:TokenServiceService,private tempCart:TempCartService) {
   }
   cols=2;
  ngOnInit() {
    this.onResize()
    this.route.params.subscribe(params=>{
      this.productId=params['id']
    })
    this.detailsService.getProduct(this.productId).subscribe((response)=>{
      
      this.productDetails=response
      this.images.push(new ImageItem({src:this.productDetails.srcPhoto.toString(),thumb:this.productDetails.srcPhoto.toString()}))
    }
    ,
    (error)=>{
      
      
    },()=>{
        this.comlete=true;
        this.dataSource=[
          {name:'Szerokość',value:this.productDetails.productWidth},
          {name:'Wysokość',value:this.productDetails.productHeight},
          {name:'Głębokość',value:this.productDetails.productcolDepth},
          {name:'Waga',value:this.productDetails.productcolDepth}
    
        ] 
    })
    
  }
  addToCart(){
      let cartItem=new CartItem()
      cartItem.productID=this.productDetails.idProduct
      cartItem.productQuantity=this.amount
      
      
      if(this.tokenservice.isLogin())
      {
        this.cartService.addToCart(cartItem).subscribe((response)=>
        {
          this.errorMessage=""
        },(error)=>
        {
          this.errorMessage=error.error.message
        },
        ()=>{
          this.dialog.open(CartDialogComponent)
        })
      }
      else{
        let tempItem:Cartlist={
            idCart:null,
            orderItemQuantity:this.amount,
            idUse:null,
            idProduct:this.productDetails.idProduct,
            productName:this.productDetails.productName,
            productDescription:this.productDetails.productDescription,
            productPrize:this.productDetails.productPrize,
            srcPhoto:this.productDetails.srcPhoto
        }
        if(this.amount<this.productDetails.quantityProduct){
            if(this.tempCart.addToCart(tempItem)>this.productDetails.quantityProduct){
              this.tempCart.cutAmountItem(tempItem.idProduct,tempItem.orderItemQuantity);
              this.errorMessage="Brak takiej ilość produktu";
            }
            else{
              this.dialog.open(CartDialogComponent)
            }
        }
        else this.errorMessage="Brak takiej ilość produktu";
          
          
          
          
      }
      
  }
  @HostListener('window:resize', ['$event'])
  onResize() {
    console.log(window.innerWidth);
    
    if(window.innerWidth<1700){
        this.cols=1
    }
    else{
      this.cols=2
    }
    if(window.innerWidth<900){
      if(window.innerWidth<400)
      this.rows=5
    }
  else{
    this.rows=2
  }

  }

}
