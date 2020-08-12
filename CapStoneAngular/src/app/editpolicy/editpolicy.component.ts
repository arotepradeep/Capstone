
import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { CompPolicy } from '../comp-policy';

@Component({
  selector: 'app-editpolicy',
  templateUrl: './editpolicy.component.html',
  styleUrls: ['./editpolicy.component.css']
})
export class EditpolicyComponent implements OnInit {
  // Variable used on html page
  pl: CompPolicy = new CompPolicy();

  constructor(private ser: MyserviceService) { }

  ngOnInit(): void {
    this.pl = this.ser.getP();
  } 

  //Update already existing policy
  savePolicy(): void { 
    this.ser.updatePolicy(this.pl).subscribe(res => {  
      if (res.toString() == "true") {    
        document.getElementById('msg').innerHTML = "Policy no. " + this.pl.policyNo + " updated successfully !";
      }else{
        document.getElementById('msg').innerHTML = "Error in updating Policy No. " + this.pl.policyNo;
      }
	  });
  }

}
