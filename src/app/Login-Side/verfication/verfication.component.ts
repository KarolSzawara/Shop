import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginService } from '../loginservices/login-service';
@Component({
  selector: 'app-verfication',
  templateUrl: './verfication.component.html',
  styleUrls: ['./verfication.component.scss']
})
export class VerficationComponent implements OnInit {
  token!:string;
  event!:boolean
  serviceDone!:boolean
  constructor(private route:ActivatedRoute,private loginService:LoginService,private routerSides: Router) { 
    this.routeSub=this.route.params.subscribe(params=>{
     this.token=params['id']
      
    })
    
    this.loginService.verficationUser(this.token).subscribe(response=>{
      this.event=true;
    },(error)=>{
      this.event=false
      this.serviceDone=true
    },()=>{
      this.serviceDone=true
    })
    
  }
  private routeSub!: Subscription;
  ngOnInit(): void {
    
  }
  ngOnDestroy(): void {
   this.routeSub.unsubscribe();  
  }
  verficationDone(){
    this.routerSides.navigate(['login']);
  }
}
