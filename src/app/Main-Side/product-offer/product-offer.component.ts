import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../interfaces/product';
import { ProductView } from '../interfaces/productView';

@Component({
  selector: 'app-product-offer',
  templateUrl: './product-offer.component.html',
  styleUrls: ['./product-offer.component.scss']
})
export class ProductOfferComponent implements OnInit {
  @Input()product!:ProductView
  constructor(private router: Router) { }

  ngOnInit() {
  }
  chooseProduct(){
    this.router.navigate(['product/'+this.product.idProduct]);
  }
}
