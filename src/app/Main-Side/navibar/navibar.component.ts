import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
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
  isSearch=true;
  constructor(private sideNavService: SidenavServiceService,private router: Router,public tokenservice:TokenServiceService,private dialog:MatDialog,private responsive: BreakpointObserver) { 

  }

  ngOnInit() {
    this.responsive.observe(Breakpoints.HandsetPortrait).subscribe(result=>{
      this.isSearch=true
      if(result.matches){
        this.isSearch=false
      }
    })
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
    location.reload()
    this.dialog.open(LogoutDialogComponent)
  }
}
