import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PaymentComponent } from './payment/payment.component';
import { HomeComponent } from './home/home.component';
import { PaymentSuccessComponent } from './payment-success/payment-success.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { InventoryService } from './inventory.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PaymentComponent,
    HomeComponent,
    PaymentSuccessComponent,
    ItemDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [InventoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }







// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';

// import { AppComponent } from './app.component';
// import { FooterComponent } from './footer/footer.component';
// import { HeaderComponent } from './header/header.component';
// import { HomeComponent } from './home/home.component';
// import { ItemDetailsComponent } from './item-details/item-details.component';
// import { PaymentComponent } from './payment/payment.component';
// import { PaymentSuccessComponent } from './payment-success/payment-success.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     FooterComponent,
//     HeaderComponent,
//     HomeComponent,
//     ItemDetailsComponent,
//     PaymentComponent,
//     PaymentSuccessComponent
//   ],
//   imports: [
//     BrowserModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
