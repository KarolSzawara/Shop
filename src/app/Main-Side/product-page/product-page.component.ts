import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { MatGridList } from '@angular/material/grid-list';
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
    this.setCols()
    
  }
  ngOnChanges(): void {
    
  }
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.setCols();
  }
  setCols() {
    this.responsive.observe(Breakpoints.HandsetPortrait).subscribe(result=>{
      
      if(result.matches){
        this.isMobile=true
      
        this.cols=1
       
      }
    })
    this.responsive.observe(Breakpoints.Small).subscribe(result=>{
      
      if(result.matches){
      
        this.cols=2
      }
    })
    this.responsive.observe(Breakpoints.Medium).subscribe(result=>{
      
      if(result.matches){
      
        this.cols=3
      }
    })
    
    this.responsive.observe(Breakpoints.Large).subscribe(result=>{
     
      if(result.matches){
        
        this.cols=4
      }
    })
    this.responsive.observe(Breakpoints.XLarge).subscribe(result=>{
     
      if(result.matches){
        
        this.cols=6
      }
    })
  
  }
  
}
