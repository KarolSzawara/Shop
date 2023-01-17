import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginUser } from 'src/app/Login-Side/interface/login-user';

import { ReturnToken } from 'src/app/Login-Side/interface/return-token';

import { TokenServiceService } from 'src/app/Login-Side/loginservices/token-service.service';
import { TempCartService } from '../Cart-Side/services/temp-cart.service';

@Component({
  selector: 'app-login-side',
  templateUrl: './login-side.component.html',
  styleUrls: ['./login-side.component.scss']
})
export class LoginSideComponent implements OnInit {

  tokens!:ReturnToken
  public loginForm :FormGroup
  errorMessage!:string


  constructor(private router: Router,private loginService:TokenServiceService,public fb: FormBuilder,private tempCart:TempCartService) {
    this.loginForm=fb.group({
      loginEmail: new FormControl('', [Validators.required, Validators.email]),
      loginPassword: new FormControl('', [Validators.required])
    })
   }

  ngOnInit(): void {
    this.loginService.isLoggedin$.subscribe(info=>{
      if(info==true){
        this.router.navigate([''])
      }
    })
  }

  goRegister(){
    this.router.navigate(['register'])
  }
 
  loginUser(){
    let user =new LoginUser()
    user.email=this.loginForm.get("loginEmail")!.value
    user.password=this.loginForm.get("loginPassword")!.value
    this.loginService.login(user).subscribe((response)=>{
       
       
    },(error)=>{
      this.errorMessage=error.error.message
    },()=>{
     let a=this.loginService.isAdmin$.subscribe(res=>{
      if(res){
        
        
        this.router.navigate(['admin'])
      }else{
       
        this.router.navigate([''])
        location.reload()
      }
      if(this.tempCart.getList().length>0){
          this.tempCart.addToCartAll(this.loginService.getJwtToken())
        }
     })
     
     a.unsubscribe(); 
     console.log(this.tempCart.getList());
      
      
    })
  }
}
