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

**5/13**
Which type of S3 encryption shows as AES256?
**SSE-S3**

Which S3 Storage class is suitable for data which is easily replaced (choose the most cost effective)?
**S3 one Zone-IA**

Which steps are required to allow an S3 bucket to operate as a website (choose all which apply)?
**Versioning not required**
**Add a bucket policy is required**

What S3 feature allows objects storage classes to be changed and objects deleted automatically?
**S3 Lifecycle policies**

What is the default limit of the number of S3 buckets in an AWS account?
**100**

What are the valid sizes of a VPC?
**Max /16 & Min /28**

How many IP addresses are reserved in each VPC Subnet?
**5**

What is true about SG's and NACLs (choose 2)?
**NACLs can ALLOW and DENY traffic**

Can an EC2 instance be migrated between AZs ?
**No - but an AMI can be created from an instance and used to provision a clone in another AZ**

What kind of use-case suits using IO1 EBS volumes?
**When maximum consistent IOPS is a priority and data is important**

How many instances can a GP2 volume be attached to at the same time?
**1**

Can EBS volumes be attached to instances in ANY AZ ?
**No, only instances in the same AZ as the volume**

What is the best practice way of providing permissions to running containers on ECS?
**Task role**

Which mode of ECS should be used if you want as little admin overhead as possible?
**Fargate**

What part of ECS is used to configure scaling and HA for containers?
**Service**

What cluster modes are available within ECS?
**Network Only (Fargate)**
**EC2 Lirux + Networking**
**EC2 Windows + Networking**

What are the advantages/benefits of containers?
**Fast to startup**
**Portable**
**Lightweight**

What benefits does Enhanced Networking Provide?
**Higher Packets per Second (PPS)**
**Consistent Low Latency**
**High Throughput**
**(NOT) - High Consistent Latency**

What placement group should be used when you need the best performance within EC2?
**Cluster**

How many AZs can be used by a cluster placement group?
**1**

How many instances can be within a spread placement group?
**7 per AZ**

(R53)

What routing policy can be used to distribute load over recordsets in a controlled way?
**Weighted**

Which routing policy type can be used to implement simple high-availability?
**Failover**

Which type of recordset is generally used to point at AWS resources?
**A + Alias**

What feature of RDS allows the system to scale for READS?
**RDS RR**

How is the standby node of an RDS MultiAZ accessed?
**It's only accessed after a failover when it becomes the primary instance**

Which AWS Product can be used to help move data TO or FROM AWS in a controlled and configurable way?
**DMS**

What type of backup should you take of RDS if you want it to be available for up to 1 year?
**Manual Snapshot**

When restoring RDS from a snapshot or backup is any application reconfiguration required?
**A different endpoint address is created when restoring ... authentication remains the same**

Which Managed SQL database product in AWS supports 3+ AZ Resilience?
**Aurora**

What RDS DB product supports HA where all instances can be used for writes?
**Aurora (Multi-master)**

What Operating systems does EFS Support
**Linux only**

Where is EFS Accessible from?
**Inside a VPC or any on-premises locations connected to that VPC**

What is SSL Offload?
**HTTPS to the load balancer, HTTP to the instances**

What is true of Launch Configuration and Launch Templates (choose all that apply)

Where are scaling policies defined?
**Optionally in ASG**

Which load balancer is allocated with a static IP?
**NLB**

SQS Queues come in two types (choose two)
**FIFO**
**Standard**

Which configuration value controls how long something has to process and delete a queue message before it reappears?
**Visiblity Timeout**

If you are trying to decouple a super high volume application you should use a (choose one)
**SQS Standard Queue**

What needs to be changed to improve the performance of a kinesis stream?
**Stream Shards**

Which AWS service supports PUB SUB Messaging?
**SNS**

Which architecture should be used when one event needs to initiate multiple workflow processes?
**SNS + SQS Fanout**

What services are commonly used within serverless architectures?
**API Gateway**
**Lambda**
**Step Functions**
**s3**

What features are used together to ensure S3 buckets can only be accessed via CloudFront?
**OAI**
**Bucket Policies**

Which of the following are services ACM supports?
**CloudFront**
**Api Gateway**

###### **5/14**
What is true of VPC Flow Logs?
**They capture packet metadata**
**They can be attached to a VPC**
**They can be attached to a subnet**
**They can be attached to an ENI**

To use S3 and DynamoDB in a private VPC which service is used?
**Gateway Endpoint**

To use SQS, SNS and Kinesis in a private VPC which service is used?
**Interface Endpoint**

Which service is used to provide outgoing only internet access to an IPv6 Instance?
**Egress-Only Internet Gateway**

To peer 4 VPC's how many peering connections are required?
**6**

**5/16**
Which storage gateway mode can replace a tape drive with S3 storage?
**VTL**

Can a private encrypted connection be created using Direct Connect? (if so how)?
**Yes by using a Site-to-Site VPN over a public VIF**

Shield Standard is automatically provided with the following services?
**CloudFront**
**R53**
(NOT) API GW

Shield protects against what type of attack?
**DDOS**

WAF Provides what type of protections?
**Layer 7 attacks**
**SQL nection**
**Cross-Site Scripting**

WAF Can be added to ...
**CloudFront**
**APIGateway**
**ALB**

The main feature which Secrets Manager provides over SSM Parameter store is..
**Password Rotation**

When can a GSI be created?
**At any time**

Which of the options below are qualities or benefits of an LSI?
**Shared Capacity Settings with the table**
**Alternative SK**

What is true about DAX?
**Supports read caching of items and query/scan results**
**(NOT) Supports read only caching**
**Supports write-through and read caching**
**Runs from within a VPC**
**(NOT) Good for write heavy workloads**
**Good for read heavy workloads**

What 4 view types are available with DDB Streams?
**KEYS ONLY**
**NEW IMAGE**
**OLD IMAGE**
**NEWAND OLD IMAGES**

###### 5/17
You need to configure 100 EC2 instances for monitoring as part of completing a project. You have been asked to gather metrics on memory utilization. What do you need to do assuming all 100 EC2 instances are t3.large size? (choose one)?
**Install the CWAgent**

Backup data is being created and placed into S3 in a central location. Objects are being replicated to a bucket in an AWS region closer to some support staff in another part of the world. Your manager has asked you to see if there is a way to reduce the S3 storage costs within this system. What storage classes will you recommend to your manager?
**Use S3 Standard-Infrequent Access for the central bucket and S3 One Zone-Infrequent Access for the regional bucket**

Which DNS Record type is used to commonly verify domain ownership?
**TXT**

You are encountering performance issues on a EBS GP2 Volume which you suspect are due to the higher than expected IOPS demands. What two tools could you use to confirm your suspicion and fix the issue (choose two)
**CloudWatch**
**EBS IO1**

An EC2 instance has been configured with a script in User Data that runs when the instance is booted. The script makes a call to S3 to copy setup and configuration calls. Upon launching the instance you realize that the script is failing as it doesn't have permission to access the S3 bucket containing the resources it needs. What solution will fix the problem while maintaining the best security practices?
**Associate an IAM role with the EC2 instance that contains permissions to the S3 bucket**

You have been asked to implement a configuration allowing access to an S3 bucket in your account to IAM users from an external account. Objects which are uploaded MUST be owned by your account, NOT the external account. Which option meets this requirement ?
**Use an IAM role in your account**

Which DNS record type is generally used to point R53 record sets at AWS logical resources?
**A + ALIAS**

You are running a custom application on a small number of EC2 instances and need to configure CloudWatch to log a custom application performance metric. Which two steps would you recommend as part of the solution? The number of instances which run the application might rapidly increase if the application usage grows.
**Install the CWAgent and configure it to capture the custom metric**
**Configure IAM roles for the instances**

You need to store files in S3 .. and they need to be encrypted at rest. You need a solution which matches the FIPS 140-2 Level 3 framework the rest of your organisation works within. Which solution meets this requirement? (Choose one)
**CLOUDHSM + Client-Side Encryption**

A scientific processing workload you are wanting to perform is only economical if it can be run at around 40% lower than EC2 on-demand rates. The processing run takes between 3 and 4 days and needs to be run once per month. It can tolerate interruption and just rerun any failed components and is not time critical or predictable. The workload can scale to as many instances as are available. Which pricing model offers the most cost-effective solution for this workload?
**Spot**

A mission critical EBS volume has 20 GiB of data. A 1st EBS snapshot is taken. 6 GiB of changes are made to the drive before a 2nd snapshot is taken. 2 GiB of further changes are made, before a 3rd snapshot is taken. To save costs the first snapshot is deleted. Which statement best describes what can be recovered from the remaining snapshots?
**A full recovery can be made to either the state of the 2nd or 3rd snapshot**

Which of the following metrics can be obtained by CloudWatch from an EC2 instance WITHOUT needing CWAgent Installed (choose all that apply)?
**Network IN and Out**
(NOT) Memory Utilization
**CPU Usage**
**Disk Reads and Writes**

You have a single EC2 instance running a small public web application. You use an S3 bucket as a ‘maintenance’ page for when the application is offline or has failed. Currently this process is manual, what AWS product and feature can you use to automated this process.
(NOT) ALB
**Route53**

What feature within AWS allows you to control access to an S3 bucket so that everything BUT CloudFront Access is denied ?
**OAI**

Which of the following statements are true ?
**EIPS are per account, per region**
**ElPs have a cost if not associated with anything**

Which statement best describes an architecture using an SQS standard queue?
**System components taking messages from the SQS queue should not**
**require the messages to be in the same order that they were added**
**to the queue, and should be able to handle the same message being**
**delivered twice**

You have launched 5 EC2 instances of the same size into a cluster placement group. You attempt to launch 5 more and get an error. What options could explain this, or resolve this ? (choose all that apply)
**Use the same type and size of instances**
**Terminate the instances, relaunch 10 into the same placement group**

You are to suggest a solution for a managed SQL database which provides 3+ AZ Automatic Resilience. Which option should you suggest ?
**Use Aurora with replicas in all AZS**

**5/19**
Which of the following AWS products and features can be used to allow network connectivity between two or more VPCs?
**Transit Gateway**
**VPC peer**

Which of the following AWS products and features can be used to allow network connectivity between two or more VPCs?
**Transit Gateway**
**vpc Peer**

An application running on EC2 improves its performance by using instance store to persist cache data. Which of the following statements best describes this cache data? CHOOSE THREE ANSWERS.
**The cache data will be lost if the EC2 instance is stopped**
**The cache data will be lost if the EC2 instance is terminated**
**The cache data will be lost if the EC2 instance suffers from a**
**hardware failure**

What is an appropriate and cost-effective use for the S3 storage class Standard-Infrequent Access?
**Objects stored with 99.999999999% (11 99 durability that when**
**requested take milliseconds to be retrieved**

Due to compliance requirements, you have been instructed that data within a VPC must NOT traverse the public Internet. The system uses EC2, EBS, EFS and a Direct Connect dedicated network connection from your premises. You have been asked to report on the suitability of the architecture.
**By default data within this architecture does not traverse the public Internet.**

You are receiving large SQS bills every month for a queue which is involved in a worker processing tier. The tier has 5 instances which are static and not scaled using an ASG. There appears to be only low volume running through your SQS queue. What would likely reduce bills? (choose 2)
**Switch to long-polling**
**Re-provision the instances using an ASG based on queue length**

Your developers are refactoring a legacy application into a series of services. At this stage most of the services are long running processes using chunks of code from the original application. What architecture components would you recommend to make best use of AWS services?
**Configure the service to Docker containers and deploy with ECS**

**5/20**
Which of the following AWS products and features can be used to allow network connectivity between two VPCs
**Transit Gateway**
**VPC PEER**

You are hosting a blog platform in AWS. The blog platform has been developed to use a MySQL 5.7 using the InnoDB storage. To get the best performance from your architecture, what AWS services would you use?
**EC2 instances and AWS RDS using Aurora**

You have been alerted to suspect connections being attempted to 100 EC2 instances within an Auto-scaling-group from a group of external IP addresses. There is one range of IP addresses in a /24 network and another single IP address. What is the quickest way to block access to your EC2 instances from these IP addresses.
**NACL Inbound**

**5/23**
**AWS Artifact**
**AWS Network Firewall**
**AWS Firewall Manager**
Elastic Beanstalk
