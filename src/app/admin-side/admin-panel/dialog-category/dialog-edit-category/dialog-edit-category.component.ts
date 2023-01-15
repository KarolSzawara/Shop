import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Category } from 'src/app/Main-Side/interfaces/category';
import { CategoryService } from 'src/app/Main-Side/services/category/category.service';

@Component({
  selector: 'app-dialog-edit-category',
  templateUrl: './dialog-edit-category.component.html',
  styleUrls: ['./dialog-edit-category.component.scss']
})
export class DialogEditCategoryComponent implements OnInit {
  public nameEmpty = false;
  isEdit=false;
  editForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required])
  });
  cat:Category={
    id:null,
    categoryName:"",
    products:null
  };

  constructor(private dialogRef: MatDialogRef<DialogEditCategoryComponent>,
    private categoryService: CategoryService,
    @Inject(MAT_DIALOG_DATA) public data:any) {
      if(this.data) {
        
        this.editForm.controls['name'].setValue(this.data.element.categoryName);
        this.isEdit=true
      }
      else{
        this.isEdit
      }
      
     }

  ngOnInit(): void {
  }
  edit() {
    if(this.editForm.invalid) {
      this.nameEmpty = true;
      return;
    }
    else{
      if(this.isEdit){
       
        this.data.element.categoryName = this.editForm.controls['name'].value;
        this.categoryService.edit(this.data.element).subscribe(()=>{
          this.dialogRef.close()
        })

      }
      else{
        this.cat.categoryName=this.editForm.controls['name'].value;
        
        this.categoryService.add(this.cat).subscribe(()=>{
          this.dialogRef.close()
        })
      }
    }

   
  }
}
