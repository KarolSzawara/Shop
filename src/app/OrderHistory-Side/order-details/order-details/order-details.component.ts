import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderDetails } from '../../interface/OrderDetails';
import { OrderhistoryService } from '../../service/orderhistory.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {

  orderId!:number
  orderList!:OrderDetails[]
  constructor(private orderHistoryService:OrderhistoryService,private route:ActivatedRoute) { }
  displayedColumns: string[] = ['productName', 'idOrder','orderItemQuantity','orderItemPrice'];
  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.orderId=params['id']
    })
    this.orderHistoryService.getOrderDetails(this.orderId).subscribe(res=>{
       this.orderList=res
        console.log(this.orderList);
        
    })
   }

}
