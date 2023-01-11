import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TabElement } from 'src/app/Product-side/product-side/interfacesProductSide/tab-element';
import { Orderhistory } from '../interface/Orderhistory';
import { OrderhistoryService } from '../service/orderhistory.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.scss']
})
export class OrderHistoryComponent implements OnInit {
  
  public dataSource!:TabElement[];
  public orderHistory:Observable<any>
  end=false;
  displayedColumns: string[] = ['idOrder', 'orderDate','price','actions'];
  selected="ostatnie 6 miesięcy"
  options=["ostatnie 6 miesięcy","2022","2021"]
  constructor(private orderHistoryService:OrderhistoryService) {
    this.selected=this.options[0]
    this.orderHistory=this.orderHistoryService.getOrderHistory()
   }

  ngOnInit(): void {
    
  }

}
