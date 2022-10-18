import { Component, OnInit } from '@angular/core';
import {ImageItem} from "ng-gallery"
@Component({
  selector: 'app-product-side',
  templateUrl: './product-side.component.html',
  styleUrls: ['./product-side.component.scss']
})
export class ProductSideComponent implements OnInit {
  images: Array<ImageItem>=[new ImageItem({src:"https://imgv3.fotor.com/images/homepage-feature-card/Fotor-AI-photo-enhancement-tool.jpg",thumb:"https://imgv3.fotor.com/images/homepage-feature-card/Fotor-AI-photo-enhancement-tool.jpg"})];
  constructor() {
    
   }

  ngOnInit() {
  }

}
