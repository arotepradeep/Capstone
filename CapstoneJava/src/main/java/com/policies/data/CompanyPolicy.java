package com.policies.data;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Lob;

import org.springframework.stereotype.Component;

@Entity
@Component
public class CompanyPolicy {
	
	@Id
	private int policyNo;
	private String policyName;
	private String policyDesc;
	private Date effectiveDate;
	private String policyTag1;
	private String policyTag2;
	private String policyUrl;
	@Lob
	private String policyDoc;
	
	public CompanyPolicy() {
		
	}

	public CompanyPolicy(int policyNo, String policyName, String policyDesc, Date effectiveDate, String policyTag1,
			String policyTag2, String policyUrl, String policyDoc) {
		super();
		this.policyNo = policyNo;
		this.policyName = policyName;
		this.policyDesc = policyDesc;
		this.effectiveDate = effectiveDate;
		this.policyTag1 = policyTag1;
		this.policyTag2 = policyTag2;
		this.policyUrl = policyUrl;
		this.policyDoc = policyDoc;
	}

	public int getPolicyNo() {
		return policyNo;
	}

	public void setPolicyNo(int policyNo) {
		this.policyNo = policyNo;
	}

	public String getPolicyName() {
		return policyName;
	}

	public void setPolicyName(String policyName) {
		this.policyName = policyName;
	}

	public String getPolicyDesc() {
		return policyDesc;
	}

	public void setPolicyDesc(String policyDesc) {
		this.policyDesc = policyDesc;
	}

	public Date getEffectiveDate() {
		return effectiveDate;
	}

	public void setEffectiveDate(Date effectiveDate) {
		this.effectiveDate = effectiveDate;
	}

	public String getPolicyTag1() {
		return policyTag1;
	}

	public void setPolicyTag1(String policyTag1) {
		this.policyTag1 = policyTag1;
	}

	public String getPolicyTag2() {
		return policyTag2;
	}

	public void setPolicyTag2(String policyTag2) {
		this.policyTag2 = policyTag2;
	}
	
	public String getPolicyUrl() {
		return policyUrl;
	}

	public void setPolicyUrl(String policyUrl) {
		this.policyUrl = policyUrl;
	}

	public String getPolicyDoc() {
		return policyDoc;
	}

	public void setPolicyDoc(String policyDoc) {
		this.policyDoc = policyDoc;
	}

	@Override
	public String toString() {
		return "CompanyPolicy [policyNo=" + policyNo + ", policyName=" + policyName + ", policyDesc=" + policyDesc
				+ ", effectiveDate=" + effectiveDate + ", policyTag1=" + policyTag1 + ", policyTag2=" + policyTag2
				+ ", policyUrl=" + policyUrl + ", policyDoc=" + policyDoc + "]";
	}
	
}
