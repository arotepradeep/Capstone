package com.policies.data;

import javax.persistence.Entity;
import javax.persistence.Id;

import org.springframework.stereotype.Component;

@Entity
@Component
public class OrgUser {
	
	@Id
	private int userID;
	private String password;
	private String fName;
	private String lName;
	private String role;
	
	public OrgUser() {
		
	}

	public OrgUser(int userID, String password, String fName, String lName, String role) {
		this.userID = userID;
		this.password = password;
		this.fName = fName;
		this.lName = lName;
		this.role = role;
	}

	public int getUserID() {
		return userID;
	}

	public void setUserID(int userID) {
		this.userID = userID;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getfName() {
		return fName;
	}

	public void setfName(String fName) {
		this.fName = fName;
	}

	public String getlName() {
		return lName;
	}

	public void setlName(String lName) {
		this.lName = lName;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	@Override
	public String toString() {
		return "User [userID=" + userID + ", password=" + password + ", fName=" + fName + ", lName=" + lName + ", role="
				+ role + "]";
	}	
	
}
