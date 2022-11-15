import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../interfaces/product';
import { ProductView } from '../interfaces/productView';
import { ProductListService } from '../services/product-offer/product-list.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
  responeComplete:boolean=false;
  @Input() categoryId!:number
  constructor(private productListService:ProductListService) { }
  productList!:ProductView[]
  ngOnInit(): void {
      
  }
  ngOnChanges(): void {
    console.log(this.categoryId);
    
    this.productListService.getCategories(this.categoryId).subscribe((response)=>{
      this.productList=response;
      console.log(response);
      
    },(error)=>{

    },()=>{
      this.responeComplete=true
    })
    
  }

}
