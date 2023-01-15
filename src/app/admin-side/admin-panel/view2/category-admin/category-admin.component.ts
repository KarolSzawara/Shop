import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Category } from 'src/app/Main-Side/interfaces/category';
import { CategoryService } from 'src/app/Main-Side/services/category/category.service';
import { DialogEditCategoryComponent } from '../../dialog-category/dialog-edit-category/dialog-edit-category.component';

@Component({
  selector: 'app-category-admin',
  templateUrl: './category-admin.component.html',
  styleUrls: ['./category-admin.component.scss']
})
export class CategoryAdminComponent implements OnInit {

  constructor(private categoryService:CategoryService, public dialog: MatDialog) { }
  displayedColumns: string[] = ['id', 'categoryName','action'];
  categories!:Category[]
  ngOnInit(): void {
    this.refreshCategory()
  }
  changeCategory(element:Category){
      const dialogRef=this.dialog.open(DialogEditCategoryComponent,{data:{
        element
      }})
      dialogRef.afterClosed().subscribe(()=>{
        this.refreshCategory();
      })
  } 
  refreshCategory(){
    this.categoryService.getCategories().subscribe((response:Category[]): void=>{
      this.categories=response
  },(error)=>{
    
  },()=>{
    
    
  })
  }
  addCat(){
    const dialogRef=this.dialog.open(DialogEditCategoryComponent)
    dialogRef.afterClosed().subscribe(()=>{
      this.refreshCategory();
    })
  }
}
