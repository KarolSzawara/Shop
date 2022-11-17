import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginUser } from './interface/login-user';
import { LoginServiceService } from './login-service/login-service.service';

@Component({
  selector: 'app-login-side',
  templateUrl: './login-side.component.html',
  styleUrls: ['./login-side.component.scss']
})
export class LoginSideComponent implements OnInit {

  user!:LoginUser

  loginForm = new FormGroup({
    loginEmail: new FormControl('', [Validators.required, Validators.email]),
    loginPassword: new FormControl('', [Validators.required])
  });


  constructor(private router: Router,private loginService:LoginServiceService) { }

  ngOnInit(): void {
  }

  goRegister(){
    this.router.navigate(['register'])
  }
  get loginEmail() {
    return this.loginForm.get('loginEmail');
  }

  get loginPassword() {
    return this.loginForm.get('loginPassword');
  }
  loginUser(){
    this.user.email=this.loginForm.get("loginEmail")!.value
    this.user.password=this.loginForm.get("loginPassword")!.value
        
  }
}
