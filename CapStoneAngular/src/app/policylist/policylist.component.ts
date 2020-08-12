
import { AppComponent } from './../app.component';
import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-policylist',
  templateUrl: './policylist.component.html',
  styleUrls: ['./policylist.component.css']
})
export class PolicylistComponent implements OnInit {

  allPolicies = [];
  backupAllPolicies = [];   //Use when policies are filtered
  isLogin: boolean = null;
  isMgt: boolean = null;  
  isHR: boolean = null;
  isEmp: boolean = null;

  //Variables used in html page
  criteria: string;  
  criteriaTxt: string;

  constructor(private ser:MyserviceService,
              private appComponent: AppComponent,
              private router: Router) { }

  ngOnInit(): void {    
    //Get flag values from AppComponent
    this.isMgt = this.appComponent.isMgt;    
    this.isHR = this.appComponent.isHR;
    this.isEmp = this.appComponent.isEmp;
    //Call getService method and fetch all the policies from database
    var temp = this.ser.getAllPolicies().subscribe((data)=>{  
      this.allPolicies=Array.from(Object.keys(data), i=>data[i]);
      this.backupAllPolicies = this.allPolicies;
    });
  }

  viewPolicy(policy): void {
    //Move to view policy page
    this.ser.setP(policy);
    this.router.navigateByUrl('/viewpolicy');
  }

  editPolicy(policy): void {
    //Move to edit policy page
    this.ser.setP(policy);
    this.router.navigateByUrl('/editpolicy');
  }

  deletePolicy(policy): void {
    //Delete policy and get updated list from service
    if(confirm("Are you sure to delete Policy No. : " + policy.policyNo)) {
      var temp = this.ser.deletePolicy(policy).subscribe((data)=>{  
        this.allPolicies=Array.from(Object.keys(data), i=>data[i]);
        this.backupAllPolicies = this.allPolicies;
      });
    }
  }

  filterPolicies(): void {
    //Filter policies as per user filter criteria on page
    //Filter policies by Policy Number
    if (this.criteria.toString() == "policyNumber") {
      var idToKeep = this.criteriaTxt;
      this.allPolicies = this.backupAllPolicies.filter(item=>item.policyNo == idToKeep);

    //Filter policies by Policy Name
    } else if (this.criteria.toString() == "policyName") {
      var nameToKeep = this.criteriaTxt;
      this.allPolicies = this.backupAllPolicies.filter(item=>item.policyName == nameToKeep);     

    //Filter policies by Policy effective from date
    } else if (this.criteria.toString() == "effDate") {
      var dateToKeep = this.criteriaTxt;
      this.allPolicies = this.backupAllPolicies.filter(item=>item.effectiveDate == dateToKeep);
      
    //Filter policies by Policy tag (any tag policy have)
    } else if (this.criteria.toString() == "tag") {
      var tagToKeep = this.criteriaTxt;
      this.allPolicies = this.backupAllPolicies.filter(item=>item.policyTag1 == tagToKeep);
      if (this.allPolicies.length == 0) {
        this.allPolicies = this.backupAllPolicies.filter(item=>item.policyTag2 == tagToKeep);        
      }      
    }
  }

  removeFilter(): void { 
    //Reset the filter   
    this.criteria = ""; 
    this.criteriaTxt = "";
    this.allPolicies = this.backupAllPolicies;
  }

}
