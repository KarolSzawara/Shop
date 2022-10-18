import { Component, OnInit } from '@angular/core';
import { SidenavServiceService } from '../services/side-nav/sidenav-service.service';

@Component({
  selector: 'app-navibar',
  templateUrl: './navibar.component.html',
  styleUrls: ['./navibar.component.scss']
})
export class NavibarComponent implements OnInit {

  constructor(private sideNavService: SidenavServiceService) { }

  ngOnInit() {
  }
  clickMenu() { 
    this.sideNavService.toggle();
  }
}
