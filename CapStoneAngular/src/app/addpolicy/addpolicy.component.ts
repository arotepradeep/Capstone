import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-addpolicy',
  templateUrl: './addpolicy.component.html',
  styleUrls: ['./addpolicy.component.css']
})

export class AddpolicyComponent implements OnInit {
  // Variables used on html page
  pNumber;
  pTitle = "";
  pDesc = "";
  pEffDate = "";
  pTag1 = "";
  pTag2 = "";
  policy = "";

  constructor(private ser: MyserviceService) { }

  ngOnInit(): void {
  }

  addPolicy(): void { 
    document.getElementById('msg').innerHTML = "";
    this.ser.postPolicy(this.pNumber, this.pTitle, this.pDesc, this.pEffDate, this.pTag1, this.pTag2, this.policy).subscribe(res => {  
      console.log("Response is :" + res)
      if (res == 0) {    
        document.getElementById('msg').innerHTML = "Policy no. " + this.pNumber + " added successfully !";
      }else if (res == -1) {
        document.getElementById('msg').innerHTML = "Error in adding Policy No. " + this.pNumber;
      }else if (res == -2) {
        document.getElementById('msg').innerHTML = "Error: Policy no. " + this.pNumber + " already exists !";
      }
	  });
  }

}
