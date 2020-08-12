
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from'@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MyserviceService } from './myservice.service';
import { PolicylistComponent } from './policylist/policylist.component';
import { AllusersComponent } from './allusers/allusers.component';
import { AddpolicyComponent } from './addpolicy/addpolicy.component';
import { EditpolicyComponent } from './editpolicy/editpolicy.component';
import { ViewpolicyComponent } from './viewpolicy/viewpolicy.component';
import { LogoffComponent } from './logoff/logoff.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PolicylistComponent,
    AllusersComponent,
    AddpolicyComponent,
    EditpolicyComponent,
    ViewpolicyComponent,
    LogoffComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [MyserviceService, AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
