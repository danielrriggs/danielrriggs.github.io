**Notes from quiz questions:**

The following ARE stored in an AMI:
- Boot Volume
- Data Volumes
- AMI Permisssions
- Block Device Mapping
The following are NOT stored in an AMI:
- Instance settings
- Network settings


Permission options an AMI has:
Public access, Owner only, Specific AWS Accounts


What is true of an AWS Public Service?
- Located in an AWS Public Zone
- Anyone can connect, but permissions are required to access the service.
My wrong answer:
Publicly accessible by anyone.


How many DNS root servers exist?
13


Which DNS Record type is how the root zone delegates control of .org to the .org registry?
Answer: NS
Wrong answer: TXT


Which type of organisation maintains the zones for a TLD (e.g .ORG)?
Answer: Registry
Wrong answer: none of the above


Which type of organisation has relationships with the .org TLD zone manager allowing domain registration?
I guessed correctly: Registrar



What is the IP CIDR of a default VPC?
Correctly kinda guessed: 172.31.0.0/16


Kinda cheated on ... IAM Groups
Know:
- Can't be used to login.
- Can't be nested
They're Admin groupings of IAM Users. They hold Identity Permissions.


What two policies are assigned to an IAM Role?
Permissions Policy
Trust Policy


What functionality is provided by CloudTrail?
Account wide Auditing and API Logging.


Is it possible to restrict what the Account Root User can do?
If AWS Organizations are used .. but not the management account.


What are valid IAM Policy types (choose all that apply)
AWS Managed Policy
Customer Managed Policy (missed this one)
Inline Policies