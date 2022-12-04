import { Component, Input, OnInit } from '@angular/core';
import { Cartlist } from '../interfeces/cartlist';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
  @Input()item!:Cartlist 
  constructor() { }

  ngOnInit(): void {
  }

}
