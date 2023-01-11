import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatMenuTrigger } from '@angular/material/menu';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, filter, map, Observable, startWith, switchMap } from 'rxjs';
import { ProductView } from '../interfaces/productView';
import { ProductListService } from '../services/product-offer/product-list.service';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.scss']
})
export class SearchComponentComponent implements OnInit {
  productCtrl = new FormControl();
  filteredProducts!: Observable<ProductView[]>;
  products: ProductView[] = [];
  selectedProduct!: string;
  query!: string;
  ngOnInit(): void {
    this.productCtrl.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        filter(value => value && value.length >= 1),
        switchMap(() => this.productService.search(this.query))
      )
      .subscribe(products => {
        this.products = products;
        this.filteredProducts = this.productCtrl.valueChanges.pipe(
          startWith(''),
          map(product => product ? this._filterProducts(product) : this.products.slice())
        );
      });
  }

  constructor(private productService:ProductListService,private router: Router) {}

  private _filterProducts(value: string): ProductView[] {
    
    const filterValue = value.toLowerCase();
    return this.products.filter(product => product.productName.toLowerCase().includes(filterValue));
  }

  displayFn(product: ProductView): string {
    return product ? product.productName : '';
  }

  selectProduct(product: ProductView): void {
    this.router.navigate(['product/'+product.idProduct]);
  }
}
