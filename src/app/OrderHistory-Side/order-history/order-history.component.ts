import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  public orderHistory!:any[]
  end=false;
  displayedColumns: string[] = ['idOrder', 'orderDate','price','actions'];
  selected="ostatnie 6 miesięcy"
  options=["ostatnie 6 miesięcy","2023","2022"]
  constructor(private orderHistoryService:OrderhistoryService,private router: Router) {
    this.refreshDates(0)
    
   }

  ngOnInit(): void {
    
  }
  select(option:string){
    console.log(this.selected);
    
     if(option=="ostatnie 6 miesięcy"){
      this.refreshDates(1)
     }
     if(option=="2023"){
      this.refreshDates(2)
     }
     if(option=="2022"){
      this.refreshDates(3)
     }
  }
refreshDates(type:number) {
  
  this.orderHistoryService.getOrderHistory(type).subscribe(res=>{
    this.orderHistory=res
    
    
  })
  
}
openDetails(element:any){
  this.router.navigate(['order/'+element.idOrder]);
}
}
