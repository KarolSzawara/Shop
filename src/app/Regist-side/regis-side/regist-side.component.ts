import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterProfile } from 'src/app/Login-Side/interface/register-profile';
import { LoginService } from 'src/app/Login-Side/loginservices/login-service';
import { TokenServiceService } from 'src/app/Login-Side/loginservices/token-service.service';

import { ConfirmedValidator } from './confirmed.validator';
@Component({
  selector: 'app-regist-side',
  templateUrl: './regist-side.component.html',
  styleUrls: ['./regist-side.component.scss']
})
export class RegistSideComponent implements OnInit {

  registerUser!:RegisterProfile;
  errorMessage!:string
  public registerForm=new FormGroup({
    

  })

  constructor(public fb: FormBuilder,private loginService:LoginService,private tokenservice:TokenServiceService,private router: Router) {
    this.registerForm=fb.group({
      registerFirstName:new FormControl('', [Validators.required,Validators.maxLength(50)]),
      registerLastName:new FormControl('', [Validators.required,Validators.maxLength(50)]),
      registerEmail: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+[.][a-z]{2,4}$")]),
      registerPassword: new FormControl('', [Validators.required,Validators.maxLength(50),Validators.minLength(8)]),
      registerConfirmPassword: new FormControl('', [Validators.required,Validators.maxLength(50),Validators.minLength(8)]),
     
      registerNip:new FormControl('',[ Validators.pattern("[0-9]{10}")]) ,    
      registerCompanyName:new FormControl('', [Validators.maxLength(50)]),    
      registerStreet:new FormControl('', [Validators.required,Validators.maxLength(50)]),
      registerStreetNumber:new FormControl('', [Validators.required,Validators.pattern("^[0-9]*$"),Validators.maxLength(10)]) , 
      registerFlatNumber:new FormControl('', [Validators.required,Validators.pattern("^[0-9]*$"),Validators.maxLength(10)])  ,
      registerPostNumber:new FormControl('', [Validators.required,Validators.pattern("[0-9]{6}||[0-9]{2}\-[0-9]{3}")]),        
      registerPostTown: new FormControl('', [Validators.required,Validators.maxLength(50)]),
      registerPhoneNumber:new FormControl('', [Validators.required,Validators.maxLength(9)])
    },{validator:ConfirmedValidator('registerPassword','registerConfirmPassword')})
   }

  ngOnInit(): void {
    this.tokenservice.isLoggedin$.subscribe(info=>{
      if(info==true){
        this.router.navigate([''])
      }
    })
  }

 public submitRegister() {
  for (const controlName in this.registerForm.controls) {
    const control = this.registerForm.get(controlName);
    if(control)
    if (control.invalid) {
      console.log(`Pole ${controlName} jest niepoprawne`);
    }
  }
  let tempUser:RegisterProfile=new RegisterProfile();
  if(!this.registerForm.invalid){
    tempUser.companyName=this.registerForm.get("registerCompanyName")!.value;
    tempUser.nip=this.registerForm.get("registerNip")!.value
    tempUser.firstName=this.registerForm.get("registerFirstName")!.value
    tempUser.lastName=this.registerForm.get("registerLastName")!.value
    tempUser.street=this.registerForm.get("registerStreet")!.value
    tempUser.streetNumber=this.registerForm.get("registerStreetNumber")!.value
    tempUser.flatNumber=this.registerForm.get("registerFlatNumber")!.value
    tempUser.postCode=this.registerForm.get("registerPostNumber")!.value
    tempUser.postTown=this.registerForm.get("registerPostTown")!.value
    tempUser.phonNumber=this.registerForm.get("registerPhoneNumber")!.value
    tempUser.email=this.registerForm.get("registerEmail")!.value
    tempUser.password=this.registerForm.get("registerPassword")!.value
    console.log(tempUser.companyName!='');
    console.log(tempUser.nip!='');
    
    if(tempUser.companyName!='' && tempUser.nip!=''){
      tempUser.companyOrPerson='T';
    }
    else tempUser.companyOrPerson='F';
    console.log(tempUser);
    console.log(this.registerForm.get("registerPostNumber")!.value)
    
    this.loginService.registerUser(tempUser).subscribe((response)=>{
        
    },(error)=>{
      this.errorMessage=error.error.message
    },()=>{
      this.router.navigate(['login'])
    })

  }
  

}
}
