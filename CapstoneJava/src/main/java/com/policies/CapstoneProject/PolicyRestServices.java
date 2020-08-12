package com.policies.CapstoneProject;

import java.util.ArrayList;
import java.util.List;

import javax.ws.rs.QueryParam;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.policies.data.CompanyPolicy;
import com.policies.data.OrgUser;
import com.policies.data.PolicyDBOperations;
import com.policies.data.UserDBOperations;

@CrossOrigin
@RestController
public class PolicyRestServices {
	
	@GetMapping("/login")
	public int getLogin(@QueryParam("id") Integer id, @QueryParam("pwd") String pwd) {
		//This method will return 
		//0-If login fails, 1-If user in Management, 2-If user is HR, 3-If user is Employee
		int response = 0;
		UserDBOperations userOps = new UserDBOperations();		
		OrgUser oU = userOps.getUser(id);
		if (oU != null) {
			if(pwd.compareTo(oU.getPassword()) == 0){
				String empType = oU.getRole();
				if (empType.compareTo("Management") == 0) {
					response = 1;
				} else if (empType.compareTo("HR") == 0) {
					response = 2;
				} else if (empType.compareTo("Employee") == 0) {
					response = 3;
				}
			}
		} 
		System.out.println("Method returns :" + response);
		return response;
	}

	@GetMapping("/users")
	public List<OrgUser> getUsers() {	
		//This method will return list of all users
		UserDBOperations userOps = new UserDBOperations();	
		List<OrgUser> uList = userOps.getAllUsers();
		userOps.closeSession();
		return uList;
	}
	
	@PostMapping("/user")
	public String insertUser(@RequestBody OrgUser oU) {
		//This method will return true if user record is inserted successfully
		String status = "false";
		UserDBOperations userOps = new UserDBOperations();
		int i = userOps.insertUser(oU);
		if (i > 0) {
			status = "true";
		}
		userOps.closeSession();
		return status;
	}

	@GetMapping("/policies")
	public List<CompanyPolicy> getPolicies() {	
		//This method will return list of all policies
		PolicyDBOperations policyOps = new PolicyDBOperations();	
		List<CompanyPolicy> pList = policyOps.getAllPolicies();
		policyOps.closeSession();
		return pList;
	}

	@GetMapping("/policy")
	public List<CompanyPolicy> getPolicy(@QueryParam("pNo") int policyNo) {
		//This method will return one policy whose number is requested
		List<CompanyPolicy> pList = new ArrayList<CompanyPolicy>();
		PolicyDBOperations policyOps = new PolicyDBOperations();	
		CompanyPolicy cP =  policyOps.getPolicy(policyNo);	
		pList.add(cP);
		policyOps.closeSession();
		return pList;
	}
	
	@PostMapping("/policy")
	public int insertPolicy(@RequestBody CompanyPolicy cP) {
		//This method will return 0 if policy is inserted successfully
		//-1 if error in policy addition, -2 if policy already exists 
		PolicyDBOperations policyOps = new PolicyDBOperations();
		int status = policyOps.insertPolicy(cP);
		policyOps.closeSession();
		return status;
	}
	
	@PutMapping("/policy")
	public String updateStudent(@RequestBody CompanyPolicy cP) {
		//This method will return true if policy is updated successfully
		String updateflag = "false";
		PolicyDBOperations policyOps = new PolicyDBOperations();	
		CompanyPolicy cP1 = policyOps.getPolicy(cP.getPolicyNo());
		if (cP1 != null) {
			policyOps.updatePolicy(cP);
			updateflag = "true";
		}
		return updateflag;
	}
	
	@DeleteMapping("/policy/{policyNo}")
	//This method will return list of all policies after delete operation
	public List<CompanyPolicy> deletePolicy(@PathVariable int policyNo)  {
		List<CompanyPolicy> pList = new ArrayList<CompanyPolicy>();
		PolicyDBOperations policyOps = new PolicyDBOperations();	
		policyOps.deletePolicy(policyNo);
		PolicyRestServices pRS = new PolicyRestServices();
		pList = pRS.getPolicies();
		policyOps.closeSession();
		return pList;
	}
}
