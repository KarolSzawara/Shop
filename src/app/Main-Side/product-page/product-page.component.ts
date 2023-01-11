import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  cols=6;
  categoryId!:number
  errorMessage!:string
  isMobile=false;
  constructor(private productListService:ProductListService,private route:ActivatedRoute,private router: Router,private responsive: BreakpointObserver) { 
    this.cols=6
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }
  productList!:ProductView[]
  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.categoryId=params['id']
    })
    if(this.categoryId==null)this.categoryId=0;
    
    this.productListService.getCategories(this.categoryId).subscribe((response)=>{
      
      
      this.productList=response;
    },(error)=>{
      this.errorMessage=error.error.message
    },()=>{
      this.responeComplete=true
    })
    this.responsive.observe(Breakpoints.HandsetPortrait).subscribe(result=>{
      this.isMobile=false
      this.cols=6
      if(result.matches){
        this.isMobile=true
        console.log("mobile");
        
        this.cols=1
      }
    })
  }
  ngOnChanges(): void {
    
  }
}
