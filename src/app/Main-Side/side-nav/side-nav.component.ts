import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { Category } from '../interfaces/category';
import { CategoryService } from '../services/category/category.service';
import { SidenavServiceService } from '../services/side-nav/sidenav-service.service';
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {


  @ViewChild('sidenav') public sidenav?: MatSidenav;
  mobileQuery!: MediaQueryList;

  constructor(private sideNavService:SidenavServiceService,private categoryService:CategoryService,private router: Router) { }
  categoryId:number=0;
  categories!:Category[];
  categoryDownload:boolean=false;
  ngOnInit() {
    this.sideNavService.sideNavToggleSubject.subscribe(()=> {
      if(this.sidenav)
      this.sidenav.toggle();

    });
    this.getCategories();
  }
  getCategories(){
    this.categoryService.getCategories().subscribe((response:Category[]): void=>{
        this.categories=response
    },(error)=>{
      
    },()=>{
      this.categoryDownload=true;
      
    })
  }
  onCategory(cat: Category) {
    
      this.router.navigate(['category/'+cat.id]);
    }

}
