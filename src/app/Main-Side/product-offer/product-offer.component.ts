import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../interfaces/product';
import { ProductView } from '../interfaces/productView';

@Component({
  selector: 'app-product-offer',
  templateUrl: './product-offer.component.html',
  styleUrls: ['./product-offer.component.scss']
})
export class ProductOfferComponent implements OnInit {
  @Input()product!:ProductView
  constructor() { }

  ngOnInit() {
  }

}
