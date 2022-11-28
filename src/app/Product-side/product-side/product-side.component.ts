import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {ImageItem} from "ng-gallery"
import { DetailsService } from 'src/app/Main-Side/services/product-details/details.service';
import { ProductDetails } from './interfacesProductSide/productDetails';
@Component({
  selector: 'app-product-side',
  templateUrl: './product-side.component.html',
  styleUrls: ['./product-side.component.scss']
})
export class ProductSideComponent implements OnInit {
productId!:number;
  public comlete:boolean=false
  public productDetails!:ProductDetails;
  public errorMessage!:string
  images: Array<ImageItem>=[];
  constructor(private detailsService:DetailsService,private route:ActivatedRoute) {
    
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

}
