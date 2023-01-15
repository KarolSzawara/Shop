import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Category } from 'src/app/Main-Side/interfaces/category';
import { CategoryService } from 'src/app/Main-Side/services/category/category.service';
import { idText } from 'typescript';
import { ProductInfo } from '../../admin-panel/interface/ProductInfo';
import { AdminServiceService } from '../../admin-panel/service/admin-service.service';
import { imageUrlValidator } from '../../validator/url.validator';

@Component({
  selector: 'app-dialog-edit-produkt',
  templateUrl: './dialog-edit-produkt.component.html',
  styleUrls: ['./dialog-edit-produkt.component.scss']
})
export class DialogEditProduktComponent implements OnInit {
  imageUrlValidator = (control: FormControl) => {
    const file = control.value;
    return new Promise((resolve) => {
      if(!file) {
        resolve(null);
      }
      const reader = new FileReader();
      reader.addEventListener('loadend', (e) => {
        const img = new Image();
        if(e.target!=null)
        img.src = e.target.result as string;
        img.onload = () => {
          resolve(null);
        };
        img.onerror = (err) => {
          resolve({ imageUrl: true });
        };
      });
      reader.readAsDataURL(file);
    });
  }

  erroMessage=false;
  public nameEmpty = false;
  isEdit=false;
  categoryList: Category[] = [];
  urlFromInput: string = '';
  urlInvalid = false;
  urlListEmpty = false;
  addForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    descrption: new FormControl('',[Validators.required]),
    details: new FormControl('',[Validators.required]),
    category: new FormControl('', [Validators.required]),
    vat: new FormControl('', [Validators.required, Validators.pattern("2[0-9]")]),
    buyingPrice: new FormControl('', [Validators.required, Validators.pattern("^[0-9]+([.][0-9]{1,2})?$")]),
    sellingPrice: new FormControl('', [Validators.required, Validators.pattern("^[0-9]+([.][0-9]{1,2})?$")]),
    amount: new FormControl('', [Validators.required,Validators.pattern("^[1-9][0-9]*$")]),
    width: new FormControl('', [Validators.required]),
    height: new FormControl('', [Validators.required]),
    depth: new FormControl('', [Validators.required]),
    weight: new FormControl('', [Validators.required]),
    url: new FormControl(null, [Validators.required, Validators.pattern("^http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/.*\.jpg|\.jpeg|\.png|\.webp$")])
  }); 

  constructor(private dialogRef: MatDialogRef<DialogEditProduktComponent>,
    private categoryService: CategoryService,
    @Inject(MAT_DIALOG_DATA) public data: any,private adminService:AdminServiceService) {
      
      if(this.data) {
        console.log(data);
        
        this.addForm.controls['name'].setValue(this.data.product.product.productName);
        this.addForm.controls['descrption'].setValue(this.data.product.product.productDescription)
        this.addForm.controls['details'].setValue(this.data.product.product.productDetails)
        this.addForm.controls['height'].setValue(this.data.product.product.productHeight)
        this.addForm.controls['sellingPrice'].setValue(this.data.product.product.productPrize)
        this.addForm.controls['vat'].setValue(this.data.product.product.productVat)
        this.addForm.controls['weight'].setValue(this.data.product.product.productWeight)
        this.addForm.controls['width'].setValue(this.data.product.product.productWidth)
        this.addForm.controls['depth'].setValue(this.data.product.product.productcolDepth)
        if(this.data.product.photo){
          this.addForm.controls['url'].setValue(this.data.product.photo.srcPhoto)
        }
        if(this.data.product.categoryId){
          
          
          this.addForm.controls['category'].setValue(this.categoryList[this.data.product.categoryId])
        }
        if(this.data.product.warehouse){
          this.addForm.controls['buyingPrice'].setValue(this.data.product.warehouse.prizeWarehouse)
        this.addForm.controls['amount'].setValue(this.data.product.warehouse.quantityProduct)
        }
        
        
        this.isEdit=true
        
        
      }else this.isEdit=false
     }

  ngOnInit(): void {
    
    this.categoryService.getCategories().subscribe((response:Category[]): void=>{
      this.categoryList=response
      if(this.isEdit){
        if(this.data.product.categoryId){
        this.addForm.controls['category'].setValue(this.categoryList[this.data.product.categoryId-1])
      }
      }
      
  })
  }
  edit() {
    
    for (const controlName in this.addForm.controls) {
      const control = this.addForm.get(controlName);
      if(control)
      if (control.invalid) {
        console.log(`Pole ${controlName} jest niepoprawne`);
      }
    }
   if(this.addForm.controls['sellingPrice'].value<=this.addForm.controls['buyingPrice'].value){
    
    
    this.erroMessage=true
    console.log(this.erroMessage);
    return
   }
    console.log(this.addForm.getRawValue());
    if(this.addForm.invalid) {
      this.nameEmpty = true;
      return;
    }

    else{
      if(this.isEdit){
        let prod:ProductInfo=this.data.product
        
        
        prod.product.productName=this.addForm.controls['name'].value;
        prod.product.productDescription=this.addForm.controls['descrption'].value;
        prod.product.productDetails=this.addForm.controls['details'].value;
        prod.product.productHeight=this.addForm.controls['height'].value;
        prod.product.productPrize=this.addForm.controls['sellingPrice'].value;
        prod.product.productVat=this.addForm.controls['vat'].value;
        prod.product.productWeight=this.addForm.controls['weight'].value;
        prod.product.productWidth=this.addForm.controls['width'].value;
        prod.product.productcolDepth=this.addForm.controls['depth'].value;
        prod.photo.srcPhoto=this.addForm.controls['url'].value;
        prod.warehouse.prizeWarehouse=this.addForm.controls['buyingPrice'].value;
        prod.warehouse.quantityProduct=this.addForm.controls['amount'].value;
        
        
        prod.categoryId=this.addForm.controls['category'].value.id
        this.adminService.edit(prod).subscribe(()=>{
          this.dialogRef.close()
        })
        console.log(prod);
        
      }
      else{

        
        let prod:ProductInfo={
          product : {
            id:null,
            productNumber:null,
            productName:this.addForm.controls['name'].value,
            productDescription: this.addForm.controls['descrption'].value,
            productDetails:this.addForm.controls['details'].value,
            productHeight:this.addForm.controls['height'].value,
            productPrize:this.addForm.controls['sellingPrice'].value,
            productVat:this.addForm.controls['vat'].value,
            productWeight:this.addForm.controls['weight'].value,
            productWidth:this.addForm.controls['width'].value,
            productcolDepth:this.addForm.controls['depth'].value,
          },
          photo:{
            id:null,
            srcPhoto:this.addForm.controls['url'].value
          }
          ,
          warehouse:{
            id:null,
            prizeWarehouse:this.addForm.controls['buyingPrice'].value,
            quantityProduct:this.addForm.controls['amount'].value
          },
          categoryId:this.addForm.controls['category'].value.id


        }
        this.adminService.add(prod).subscribe(()=>{
          this.dialogRef.close()
        })
        
        
      }
    }
   
  }

  isValidUrl(input: string): boolean {
    let url_string;
    try {
      url_string = new URL(input);
    } catch (e) {
      return false;
    }
    return url_string.protocol === "http:" || url_string.protocol === "https:" ;
  }
  add(){}
  get url() {
    return this.addForm.get('url');
  }
}
