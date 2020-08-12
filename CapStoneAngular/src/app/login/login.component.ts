
import { AppComponent } from './../app.component';
import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  desgn: String;
  // variables on page
  userID: number;
  passWord = "";
  isLogin: boolean = null;
  isMgt: boolean = null;  
  isHR: boolean = null;
  isEmp: boolean = null;
  userArray = [];

  constructor(private ser:MyserviceService,
              private appComponent: AppComponent){ }

  ngOnInit() {
  } 

  checkLogin(){
    //Calling service
    this.ser.doServeLogin(this.userID, this.passWord).subscribe(res => {       
      if (res == 1) {      
        //1 Means Management 
        this.desgn = "Management";    
        this.isMgt = true;
        this.isHR = false;
        this.isEmp = false;
        this.isLogin = true;
      } else if(res == 2){   
        //2 Means HR    
        this.desgn = "HR";
        this.isMgt = false;
        this.isHR = true;
        this.isEmp = false;
        this.isLogin = true;
      } else if(res == 3){   
        //3 Means Employee  
        this.desgn = "Employee";   
        this.isMgt = false; 
        this.isHR = false;
        this.isEmp = true;
        this.isLogin = true;
      } else{       
        //This means login failed
        this.isMgt = false;
        this.isHR = false;
        this.isEmp = false;
        this.isLogin = false;
      }   
      //Using following variables to enable, disable respective tabs on app.comp.html
      this.appComponent.isMgt = this.isMgt;
      this.appComponent.isHR = this.isHR;
      this.appComponent.isEmp = this.isEmp;
      this.appComponent.isLogin = this.isLogin;
      //Clear screen variables
      this.userID = 0;
      this.passWord = "";

      //Give message on login screen, and clear other msg
      if (this.isLogin == false) {
        document.getElementById('errorMsg').innerHTML = "Login failed, please check credentials !";
        document.getElementById('successMsg').innerHTML = "";
      } else{
        document.getElementById('successMsg').innerHTML = this.desgn + " login successful !";
        document.getElementById('errorMsg').innerHTML = "";
      }
    });  
  }


}

