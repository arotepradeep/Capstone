package com.policies.data;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;
import org.hibernate.exception.ConstraintViolationException;

public class UserDBOperations {

	private Configuration configuration = null;
	private SessionFactory sessionFactory = null;
	private Session session = null;	
	
	public UserDBOperations() {
		configuration = new Configuration();
		sessionFactory = configuration.configure().buildSessionFactory();
		session = sessionFactory.openSession();		
	}
	
	public OrgUser getUser(int userID) {
		OrgUser oU = (OrgUser)session.get(OrgUser.class, userID);  
        return oU;
	}
	
	public int insertUser(OrgUser orgU) {
		int userID = orgU.getUserID();		
		OrgUser oU = getUser(userID);
		if (oU == null){
			userID = 0;
			Transaction tx = session.beginTransaction();
			try {
				userID = (int) this.session.save(orgU);
				tx.commit();		
			}catch (ConstraintViolationException e) {
				//Error in user addition in database 
				userID = -1;
			} 
		} else {
			//user is already exists in database 
			userID = -2;
		}
		return userID;
	}
	
	public List<OrgUser> getAllUsers() {
        List<OrgUser> users = session.createQuery("FROM OrgUser").list();
        return users;
	}
	
	public void closeSession() {
		session.clear();
        session.close();		
	}

}
