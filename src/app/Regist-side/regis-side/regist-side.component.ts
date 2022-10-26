import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-regist-side',
  templateUrl: './regist-side.component.html',
  styleUrls: ['./regist-side.component.scss']
})
export class RegistSideComponent implements OnInit {

  registerForm=new FormGroup({
    registerName:new FormControl('', [Validators.required]),
    registerEmail: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+[.][a-z]{2,4}$")]),
    registerPassword: new FormControl('', [Validators.required]),
    registerAddress: new FormControl('', [Validators.required]),
    registerNip:new FormControl('',[Validators.required, Validators.pattern("[0-9]{10}")]) ,    
    registerCompanyName:new FormControl('', [Validators.required]),    
    registerStreet:new FormControl('', [Validators.required]),
    registerStreetNumber:new FormControl('', [Validators.required,Validators.pattern("[^[0-9]$]{10}")]) , 
    registerFlatNumber:new FormControl('', [Validators.required,Validators.pattern("[^[0-9]$]{10}")])  ,
    registerPostNumber:new FormControl('', [Validators.required,Validators.pattern("[0-9]{2}\-[0-9]{3}")]),        
    registerPostTown: new FormControl('', [Validators.required]),

  })

  constructor() { }

  ngOnInit(): void {
  }

}
