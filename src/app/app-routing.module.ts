import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from './admin-side/admin-panel/admin-panel.component';
import { CartSideComponent } from './Cart-Side/cart-side/cart-side.component';
import { LoginSideComponent } from './Login-Side/login-side.component';
import { VerficationComponent } from './Login-Side/verfication/verfication.component';
import { ProductPageComponent } from './Main-Side/product-page/product-page.component';
import { OrderDetailsComponent } from './OrderHistory-Side/order-details/order-details/order-details.component';
import { OrderHistoryComponent } from './OrderHistory-Side/order-history/order-history.component';
import { ProductSideComponent } from './Product-side/product-side/product-side.component';
import { RegistSideComponent } from './Regist-side/regis-side/regist-side.component';
const routes: Routes = [
  {path:'verfication/:id',component:VerficationComponent},
  {path:'registration',component:RegistSideComponent},
  {path:'',component:ProductPageComponent},
  {path:'category/:id',component:ProductPageComponent},
  {path:'login',component:LoginSideComponent},
  {path:'register',component:RegistSideComponent},
  {path:'cart',component:CartSideComponent},
  {path:'product/:id',component:ProductSideComponent},
  {path:'verfication',component:LoginSideComponent},
  {path:'history',component:OrderHistoryComponent},
  {path:'admin',component:AdminPanelComponent},
  {path:'order/:id',component:OrderDetailsComponent},
  {path:'**',component:ProductPageComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
