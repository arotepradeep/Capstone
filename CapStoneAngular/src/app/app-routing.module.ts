
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AllusersComponent } from './allusers/allusers.component';
import { AddpolicyComponent } from './addpolicy/addpolicy.component';
import { EditpolicyComponent } from './editpolicy/editpolicy.component';
import { ViewpolicyComponent } from './viewpolicy/viewpolicy.component';
import { PolicylistComponent } from './policylist/policylist.component';
import { RegisterComponent } from './register/register.component';
import { LogoffComponent } from './logoff/logoff.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'login', component:LoginComponent},
  {path: 'allusers', component:AllusersComponent},
  {path: 'addpolicy', component:AddpolicyComponent},
  {path: 'editpolicy', component:EditpolicyComponent},
  {path: 'viewpolicy', component:ViewpolicyComponent},
  {path: 'policylist', component:PolicylistComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'logoff', component:LogoffComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
