import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { CartComponent } from './cart/cart.component';
import { DetailsComponent } from './details/details.component';
const routes: Routes = [
  {path:"menu",pathMatch:"full",component:MenuComponent},
  {path:"cart",pathMatch:"full",component:CartComponent},
  {path:"details",pathMatch:"full",component:DetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
