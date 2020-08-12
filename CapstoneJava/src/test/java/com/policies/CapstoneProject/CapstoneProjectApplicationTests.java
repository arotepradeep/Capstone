package com.policies.CapstoneProject;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import com.policies.data.CompanyPolicy;
import com.policies.data.OrgUser;
import com.policies.data.PolicyDBOperations;
import com.policies.data.UserDBOperations;

@SpringBootTest
class CapstoneProjectApplicationTests {

	@Test
	public void testInsertPolicy() {
		//This method will test insert method for company policy
		//Set policy start date
		Date polActDate = parseDate("2020-08-10");
		PolicyDBOperations pOps = new PolicyDBOperations();
		CompanyPolicy cP = new CompanyPolicy(5, "Policy_5", "Fifth Policy", polActDate, "Pol3Tag1", "Pol3Tag2", "", "This is a trial policy");
		int response = pOps.insertPolicy(cP);
		Assertions.assertEquals(cP.getPolicyNo(), response);
	
	}
	
	@Test
	public void testInsertEmp() {
		//This method will test insert method for organization user
		UserDBOperations uOps = new UserDBOperations();
		OrgUser oU = new OrgUser(1009, "1009", "Ramesh", "Sutar", "Employee");
		int response = uOps.insertUser(oU);
		Assertions.assertEquals(oU.getUserID(), response);
	}

	@Test
	public void testGetUser() {
		//This method will test get organization user based on user ID 
		int userID = 1001;
		UserDBOperations uOps = new UserDBOperations();
		OrgUser response = uOps.getUser(userID);
		Assertions.assertEquals(userID, response.getUserID());
	}	
	
	public Date parseDate(String date) {
		try {
			return new SimpleDateFormat("yyyy-MM-dd").parse(date);
		} catch (ParseException e) {
         return null;
		}
	}

}
