import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TokenServiceService } from 'src/app/Login-Side/loginservices/token-service.service';
import { LogoutDialogComponent } from 'src/app/Login-Side/logout-dialog/logout-dialog.component';
import { SidenavServiceService } from '../services/side-nav/sidenav-service.service';

@Component({
  selector: 'app-navibar',
  templateUrl: './navibar.component.html',
  styleUrls: ['./navibar.component.scss']
})
export class NavibarComponent implements OnInit {

  constructor(private sideNavService: SidenavServiceService,private router: Router,public tokenservice:TokenServiceService,private dialog:MatDialog) { 

  }

  ngOnInit() {

  }
  clickMenu() { 
    this.sideNavService.toggle();
  }
  goToCart(){
    this.router.navigate(['cart']);
  }
  returnToMainPage(){
    this.router.navigate(['']);
  }
  goToLogin(){
    this.router.navigate(['login']);
  }
  isLogged(){
    return this.tokenservice.isLoggedin$
  }
  logout(){
    this.tokenservice.logout();
    this.dialog.open(LogoutDialogComponent)
  }
}
