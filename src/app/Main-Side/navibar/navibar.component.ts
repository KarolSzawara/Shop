import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SidenavServiceService } from '../services/side-nav/sidenav-service.service';

@Component({
  selector: 'app-navibar',
  templateUrl: './navibar.component.html',
  styleUrls: ['./navibar.component.scss']
})
export class NavibarComponent implements OnInit {

  constructor(private sideNavService: SidenavServiceService,private router: Router) { }

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
}
