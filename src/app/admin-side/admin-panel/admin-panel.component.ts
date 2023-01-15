import { Component, OnInit } from '@angular/core';
import { ProductInfo } from './interface/ProductInfo';
import { AdminServiceService } from './service/admin-service.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent implements OnInit {
  constructor(){}

  ngOnInit(): void {
  }

}
