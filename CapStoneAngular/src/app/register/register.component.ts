
import { OrgUser } from './../org-user';
import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // Variable used on html page
  oU: OrgUser = new OrgUser();
  confPassword = "";

  constructor(private ser: MyserviceService) { }

  ngOnInit(): void {
  }

  doRegistration(): void {
    this.ser.doServeRegistration(this.oU).subscribe(res => {    
      if (res.toString() == "true") {
        //Once user is registered succefully, clear all the fields from page
        this.oU.fName = "";
        this.oU.lName = "";
        this.oU.password = "";        
        this.oU.role = "";
        this.oU.userID = 0;
        this.confPassword = "";
        document.getElementById('msg').innerHTML = "User registration successful !"      
      } else{
        document.getElementById('msg').innerHTML = "User registration failed, plz try again !"
      }
    });    
  }

}
