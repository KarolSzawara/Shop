import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-verfication',
  templateUrl: './verfication.component.html',
  styleUrls: ['./verfication.component.scss']
})
export class VerficationComponent implements OnInit {
  
  constructor(private route:ActivatedRoute) { 
    this.routeSub=this.route.params.subscribe(params=>{
      console.log(params);
      console.log(params['id'])
      
    })
  }
  private routeSub!: Subscription;
  ngOnInit(): void {
    
  }

}
