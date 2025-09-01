- Apply WAF rules & _Managed Rules_ for WAF on a group of resources
- Integrated with AWS Organizations - apply protections to resources across accounts
- apply protection policies in a hierarchical manner
- **rule group** - set of rules that you add to a web ACL or an AWS Firewall Manager policy - your own, or purchase managed rule group from AWS Marketplace.
- **AWS Firewall Manager policy** - 

---
- **Centralized Policy Management**  
	- Create and apply **security policies** (like AWS WAF rules, VPC security group rules, or AWS Shield protections) across all accounts in your AWS Organization from a **single administrator account**.

- **Integration with Other Services**
    - **AWS WAF**: Automatically apply web ACLs to CloudFront, ALB, or API Gateway.
    - **AWS Shield Advanced**: Enroll accounts/resources into Shield Advanced protection.
    - **Amazon VPC Security Groups**: Audit and manage security group configurations.
    - **Route 53 Resolver DNS Firewall**: Set DNS filtering policies across accounts.

- **Automatic Policy Enforcement**  
    Newly created resources (e.g., CloudFront distributions, ALBs) can **automatically inherit protection policies** without manual configuration.
  
- **Security Auditing and Remediation**  
    Audit for **non-compliant resources** (e.g., overly permissive security groups) and optionally **auto-remediate** them to match policy.
 
- **Multi-account Support**  
    Works natively with **AWS Organizations**, allowing the **Firewall Manager administrator account** to manage security for all member accounts.

---
[AWS Firewall Manager Cheat Sheet](https://tutorialsdojo.com/aws-firewall-manager/)