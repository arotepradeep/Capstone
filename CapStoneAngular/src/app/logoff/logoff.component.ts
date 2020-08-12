import { Component, OnInit } from '@angular/core';
import { AppComponent } from './../app.component';
import { MyserviceService } from '../myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logoff',
  templateUrl: './logoff.component.html',
  styleUrls: ['./logoff.component.css']
})
export class LogoffComponent implements OnInit {

  constructor(private ser:MyserviceService,
              private appComponent: AppComponent,
              private router: Router) { }

  ngOnInit(): void {  
    //clear following variables which enable, disable respective tabs on app.comp.html
    this.appComponent.isMgt = false;
    this.appComponent.isHR = false;
    this.appComponent.isEmp = false;
    this.appComponent.isLogin = false;
    this.router.navigateByUrl('/home');
  }

  //This has no html page, but this will clear all the flags, so all menues will diappear and 
  //user will redirected to home page, only having login menu

}
