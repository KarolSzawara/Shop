import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NavibarComponent } from './Main-Side/navibar/navibar.component';
import { MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {MatInputModule} from '@angular/material/input';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SideNavComponent } from './Main-Side/side-nav/side-nav.component';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import { ProductPageComponent } from './Main-Side/product-page/product-page.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { ProductOfferComponent } from './Main-Side/product-offer/product-offer.component';
import { ProductSideComponent } from './Product-side/product-side/product-side.component';
import {MatSelectModule} from '@angular/material/select';
import {GalleryModule} from "ng-gallery";
import { CartSideComponent } from './Cart-Side/cart-side/cart-side.component';
import { CartItemComponent } from './Cart-Side/cart-item/cart-item.component';
import { LoginSideComponent } from './Login-Side/login-side.component';
import { RegistSideComponent } from './Regist-side/regis-side/regist-side.component';
import {MatTabsModule} from '@angular/material/tabs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VerficationComponent } from './Login-Side/verfication/verfication.component';
import {MatDialogModule} from '@angular/material/dialog';
import { CartDialogComponent } from './Product-side/cart-dialog/cart-dialog.component';
import { LogoutDialogComponent } from './Login-Side/logout-dialog/logout-dialog.component';
import { MatTableModule } from '@angular/material/table';
import { OrderHistoryComponent } from './OrderHistory-Side/order-history/order-history.component' 
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SearchComponentComponent } from './Main-Side/search-component/search-component.component';
import { MatMenuModule} from '@angular/material/menu';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { AdminPanelComponent } from './admin-side/admin-panel/admin-panel.component';
import { ProductAdminComponent } from './admin-side/admin-panel/view/product-admin/product-admin.component';
import { CategoryAdminComponent } from './admin-side/admin-panel/view2/category-admin/category-admin.component';
import { DialogEditCategoryComponent } from './admin-side/admin-panel/dialog-category/dialog-edit-category/dialog-edit-category.component';
import { DialogEditProduktComponent } from './admin-side/dialog-produkt/dialog-edit-produkt/dialog-edit-produkt.component';
import { OrderDetailsComponent } from './OrderHistory-Side/order-details/order-details/order-details.component';
@NgModule({
  declarations: [
    AppComponent,
    NavibarComponent,
    SideNavComponent,
    ProductPageComponent,
    ProductOfferComponent,
    ProductSideComponent,
    CartSideComponent,
    CartItemComponent,
    LoginSideComponent,
    RegistSideComponent,
    VerficationComponent,
    CartDialogComponent,
    LogoutDialogComponent,
    OrderHistoryComponent,
    SearchComponentComponent,
    AdminPanelComponent,
    ProductAdminComponent,
    CategoryAdminComponent,
    DialogEditCategoryComponent,
    DialogEditProduktComponent,
    OrderDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MDBBootstrapModule.forRoot(),
    MatInputModule,
    MatSidenavModule,
    MatCardModule,
    MatListModule,
    MatGridListModule,
    MatSelectModule,
    GalleryModule,
    MatTabsModule,
    HttpClientModule,MatProgressSpinnerModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatTableModule,
    MatSnackBarModule,
    MatMenuModule,
    MatAutocompleteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
