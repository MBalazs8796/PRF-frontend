import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddItemComponent } from './add-item/add-item.component';
import { ErrorComponent } from './error/error.component';
import { AdminGuard } from './guards/admin.guard';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { MainPageComponent } from './main-page/main-page.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { RegisterComponent } from './register/register.component';
import { StockUpdatePageComponent } from './stock-update-page/stock-update-page.component';
import { UpdateItemComponent } from './update-item/update-item.component';
import { UserInfoComponent } from './user-info/user-info.component';

const routes: Routes = [
  {path: '', redirectTo: 'mainPage', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'mainPage', component: MainPageComponent, canActivate: [AuthGuard]},
  {path: 'purchase', component: PurchaseComponent, canActivate: [AuthGuard]},
  {path: 'userInfo', component: UserInfoComponent, canActivate: [AuthGuard]},
  {path: 'stockUpdater', component: StockUpdatePageComponent, canActivate: [AdminGuard]},
  {path: 'updateItem', component: UpdateItemComponent, canActivate: [AdminGuard]},
  {path: 'addItem', component: AddItemComponent, canActivate: [AdminGuard]},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
