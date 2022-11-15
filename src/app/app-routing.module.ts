import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerficationComponent } from './Login-Side/verfication/verfication.component';
import { RegistSideComponent } from './Regist-side/regis-side/regist-side.component';

const routes: Routes = [
  {path:'verfication/:id',component:VerficationComponent},
  {path:'registration',component:RegistSideComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
