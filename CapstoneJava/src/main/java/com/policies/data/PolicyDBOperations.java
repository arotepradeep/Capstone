package com.policies.data;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;
import org.hibernate.exception.ConstraintViolationException;
import org.springframework.http.converter.HttpMessageNotReadableException;

public class PolicyDBOperations {

	private Configuration configuration = null;
	private SessionFactory sessionFactory = null;
	private Session session = null;	
	
	public PolicyDBOperations() {
		configuration = new Configuration();
		sessionFactory = configuration.configure().buildSessionFactory();
		session = sessionFactory.openSession();		
	}
	
	public CompanyPolicy getPolicy(int policyNo) {
		//This method return policy object based on policy number received
		CompanyPolicy cPolicy = (CompanyPolicy)session.get(CompanyPolicy.class, policyNo);  
        return cPolicy;
	}
	
	public int insertPolicy(CompanyPolicy cPolicy) {
		//This method insert policy which is received as an object. 
		//-1 and -2 are errors. Policy number return is success
		int response = 0;
		int policyNo = cPolicy.getPolicyNo();
		CompanyPolicy cP = getPolicy(policyNo);		
		if (cP == null){
			Transaction tx = session.beginTransaction();
			try {
				policyNo = (int) this.session.save(cPolicy);
				tx.commit();
			}catch (Exception e) {
				//Error in Policy addition as formating error
				response = -1;				
			}
		} else {
			//Policy is already exists in database 
			response = -2;
		}
		return response;
	}
	
	public void updatePolicy(CompanyPolicy cP ) {
		//This method updates company policy as it receive as parameter
		Transaction tx = session.beginTransaction();
		CompanyPolicy cPolicy = (CompanyPolicy)session.get(CompanyPolicy.class, cP.getPolicyNo());
		//Update fields which are allowed to modify
		cPolicy.setPolicyTag1(cP.getPolicyTag1());
		cPolicy.setPolicyTag2(cP.getPolicyTag2());
		cPolicy.setPolicyDesc(cP.getPolicyDesc());
		cPolicy.setPolicyDoc(cP.getPolicyDoc());
		session.update(cPolicy); 
		tx.commit();
	}
	
	public void deletePolicy(int policyNo) {
		//This method delete company policy for which it receives policy number
		Transaction tx = session.beginTransaction();
		CompanyPolicy cP = (CompanyPolicy)session.get(CompanyPolicy.class, policyNo);
		session.delete(cP);	
		tx.commit();
    }
	
	public List<CompanyPolicy> getAllPolicies() {
		//This method returns all company policies in array list
        List<CompanyPolicy> policies = session.createQuery("FROM CompanyPolicy").list();
        return policies;
	}
	
	public void closeSession() {
		session.clear();
        session.close();		
	}
	
}
