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
import { LoginSideComponent } from './login-side/login-side.component';
import { RegistSideComponent } from './Regist-side/regis-side/regist-side.component';
import {MatTabsModule} from '@angular/material/tabs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
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
    RegistSideComponent
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
    HttpClientModule,MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
