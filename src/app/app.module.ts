import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { PaymentTypeComponent } from './payment-type/payment-type.component';
import { AdditemComponent } from './additem/additem.component';
import { HeaderComponent } from './header/header.component';
import { TotalComponent } from './total/total.component';
import { Serviceitem } from './auto.service';
@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    PaymentTypeComponent,
    AdditemComponent,
    HeaderComponent,
    TotalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [Serviceitem],
  bootstrap: [AppComponent]
})
export class AppModule { }
