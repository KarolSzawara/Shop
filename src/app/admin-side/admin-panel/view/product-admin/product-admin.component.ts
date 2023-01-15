import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogEditProduktComponent } from 'src/app/admin-side/dialog-produkt/dialog-edit-produkt/dialog-edit-produkt.component';
import { ProductInfo } from '../../interface/ProductInfo';
import { AdminServiceService } from '../../service/admin-service.service';

@Component({
  selector: 'app-product-admin',
  templateUrl: './product-admin.component.html',
  styleUrls: ['./product-admin.component.scss']
})
export class ProductAdminComponent implements OnInit {

  displayedColumns: string[] = ['productNumber', 'productName','action'];
  constructor(private adminService:AdminServiceService,public matDialog:MatDialog) { }
  errorMessage!:string;
  product!:ProductInfo[]
  isLoad=false;

  ngOnInit(): void {
   this.refreshProduct()
      
  }
  edit(product:ProductInfo){
    const matRef=this.matDialog.open(DialogEditProduktComponent,{data:{
      product
    }})
    matRef.afterClosed().subscribe(()=>{
      this.refreshProduct();
    })
  }
  add(){
    const matRef=this.matDialog.open(DialogEditProduktComponent)
    matRef.afterClosed().subscribe(()=>{
      this.refreshProduct();
    })
  }
  refreshProduct(){
    this.adminService.getAllProduct().subscribe((res)=>{
      this.product=res
      
    },(error)=>{
        this.errorMessage=error.error.message
        this.isLoad=false;
    },()=>{
        this.isLoad=true
    })
  }
}

