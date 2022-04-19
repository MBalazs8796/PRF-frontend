import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { RegisterComponent } from './register/register.component';
import { MainPageComponent } from './main-page/main-page.component';
import { StockUpdatePageComponent } from './stock-update-page/stock-update-page.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { UpdateItemComponent } from './update-item/update-item.component';
import { AddItemComponent } from './add-item/add-item.component';
import { UserInfoComponent } from './user-info/user-info.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ErrorComponent,
    RegisterComponent,
    MainPageComponent,
    StockUpdatePageComponent,
    PurchaseComponent,
    UpdateItemComponent,
    AddItemComponent,
    UserInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
