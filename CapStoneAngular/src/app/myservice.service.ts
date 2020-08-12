
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { CompPolicy } from './comp-policy';
import { getUrlScheme } from '@angular/compiler';

@Injectable({providedIn: 'root'})

export class MyserviceService {

  p: CompPolicy = new CompPolicy();

  constructor(private http: HttpClient) { }  

  doServeLogin(userID, passWord){
    var link = "http://localhost:8007/login?id=" + userID + "&pwd=" + passWord;
    return this.http.get(link, {headers : new HttpHeaders({'Content-Type': 'application/json'})});
  }

  doServeRegistration(oU){
    var postdata = '{"userID":' + oU.userID + ', "password":"' + oU.password + '", "fName":"' + oU.fName + '", "lName":"' + oU.lName + '", "role":"' + oU.role + '"}';
    return this.http.post("http://localhost:8007/user", postdata, {headers : new HttpHeaders({ 'Content-Type': 'application/json'})});
  }
  
  postPolicy(pNumber, pTitle, pDesc, pEffDate, pTag1, pTag2, policy){    
    var postdata = '{"policyNo":' + pNumber + ', "policyName":"' + pTitle + '", "policyDesc":"' + pDesc + '", "effectiveDate":"' + pEffDate + '", "policyTag1":"' + pTag1 + '", "policyTag2":"' + pTag2 + '", "policyDoc":"' + policy + '"}';
    return this.http.post("http://localhost:8007/policy", postdata, {headers : new HttpHeaders({ 'Content-Type': 'application/json' })});
  }

  updatePolicy(policy){
    var postdata = '{"policyNo":' + policy.policyNo + ', "policyName":"' + policy.policyName + '", "policyDesc":"' + policy.policyDesc + '", "effectiveDate":"' + policy.effectiveDate + '", "policyTag1":"' + policy.policyTag1 + '", "policyTag2":"' + policy.policyTag2 + '", "policyDoc":"' + policy.policyDoc + '"}';
    return this.http.put("http://localhost:8007/policy", postdata, {headers : new HttpHeaders({ 'Content-Type': 'application/json' })});
  }

  deletePolicy(policy){
    console.log("Policy number :" + policy.policyNo);
    var link = "http://localhost:8007/policy/" + policy.policyNo;
    return this.http.delete(link, {headers : new HttpHeaders({'Content-Type': 'application/json'})});
  }
   
  getAllPolicies(){
    return this.http.get("http://localhost:8007/policies", 
    {headers : new HttpHeaders({'Content-Type': 'application/json'})});
  }
   
  getAllUsers(){
    return this.http.get("http://localhost:8007/users", 
    {headers : new HttpHeaders({'Content-Type': 'application/json'})});
  }

  setP(policy){
    this.p = policy;
  }

  getP(){
    return this.p;
  }

}
