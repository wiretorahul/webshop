import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { PaymentComponent } from '../payment/payment.component';
import { PaymentSuccessComponent } from '../payment-success/payment-success.component';
import { ItemDetailsComponent } from '../item-details/item-details.component';



const routes: Routes = [
  // { path: '', redirectTo: '/contacts', pathMatch: 'full' }, 
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'checkout', component: PaymentComponent },
  { path: 'success', component: PaymentSuccessComponent },
  { path: 'item/:id', component: ItemDetailsComponent }
];



@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports : [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
