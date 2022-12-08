import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.scss']
})
export class OrderHistoryComponent implements OnInit {
  selected="ostatnie 6 miesięcy"
  options=["ostatnie 6 miesięcy","2022","2021"]
  constructor() {
    this.selected=this.options[0]
   }

  ngOnInit(): void {
    
  }

}
