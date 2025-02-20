Operational Excellence
- Organization
- Prepare
- Operate
- Evolve

Security

Design Principles
- identity foundation
	- Least privilege
	- separation of duties
- traceability
	- real time monitoring. logs. metrics.
- security at all layers (edge of network, VPC, load balancing, every instance and compute service, operating system, application, and code)
	- defense in depth

Reliability
Reliability Best Practices
- Foundations
- Workload architecture
- Change management
- Failure management

Performance efficiency
Design Principles
- Democratize advanced technologies
	- Ex: Consume noSQL db as a service
- Go global in minutes
- Use serverless architectures
- Experiment more often
- Consider mechanical sympathy

5 Best Practices for Performance efficiency in the cloud:
- Architecture selection
- Compute and hardware
- Data management
- Networking and content delivery
- Process and culture

Architecture selection
use multiple solutions and features

 Compute and hardware
 compute is available in three forms: instances, containers, and functions

Data management
storage is available in three forms: object, block, and file

The more efficient storage solution for a system varies based on the kind of access operation (block, file, or object), patterns of access (random or sequential), required throughput, frequency of access (online, offline, archival), frequency of update (WORM, dynamic), and availability and durability constraints.

Networking and content delivery
The optimal networking solution for a workload varies based on latency, throughput requirements, jitter, and bandwidth. Physical constraints, such as user or on-premises resources, determine location options.

Process and culture
Consider these key principles to build this culture:
- Infrastructure as code - CloudFormation templates
- Deployment pipeline - use a CI/CD pipeline; source code repo, build systems, deployment, testing automation - to test your infrastructure.
- Well-defined metrics - capture KPIs
	- Tech
		- time to first byte or rendering
		- thread count
		- garbage collection rate
		- wait states
	- Business
		- Avg cumulative cost per request
- Performance test automatically
- Load generation

Provisioning network workloads
Process and culture. You want these culture principles:
- IaaC (infra as code)
- Deployment Pipelines
- Well-defined metrics
- Performance test automatically
- Load generation (automated perf tests & user journeys scripts)
- Performance visibility (# exceptions per build version)
- Visualization (performance metrics)


Cost Optimization
Design Principles
- Practice Cloud Financial Management
- Expenditure and usage awareness
- Cost-effective resources
- Manage demand and supply resources
	- Implement throttling w/ API Gateway or Amazon SQS (queues).
- Optimize over time


Sustainability
Design principles
- Understand your impact
	- Know your emissions per unit of work. Use this to establish KPIs.
- Establish sustainability goals
- Maximize utilization
- Anticipate and adopt new, more efficient hardware and software offerings
- Use managed services
	- Use serverless (AWS Fargate)
	- Use Amazon S3 Lifecycle to move infrequently accessed data to cold storage.
	- Use EC2 Auto Scaling to meet demand.
- Reduce the downstream impact of your cloud workloads

Best practice areas for sustainability in the cloud:
- Region selection
- Alignment to demand
- Software and architecture
	- implement load smoothing
	- Monitor workload activity to identify changes in utilization of individual components over time - remove workload components with low or no use.
	- Optimize areas of code that consume the most time or resources.
- Data
- Hardware and services
	- Use the minimum amount of hardware to meet your needs
	- Use instance types with the least impact (environmental impact)
	- Use managed services
	- Optimize your use of GPUs
- Process and culture


////////////////// Operational Excellence details starts on pg 72. 


# General design principles

# Operational Excellence
The ability to support development and run workloads effectively, gain insight into their operations, and to continuously improve supporting processes and procedures to deliver business value.

## Summary
- Smooth development
- Efficient workloads
- Gain insights
- Improve processes

## Operational Excellence Design Principles
- **Perform operations as code**: Code disciplines applied to whole workload. Create, update, trigger, automate the workload as code to avoid human error and enforce consistency.
- **Make frequent, small, reversible changes:** Design workloads for regular updates. Make changes in small easily reversible increments.
- **Refine operations procedures frequently:** Always look for procedures’ improvements. Use game days to validate their efficiency and ensure the teams are in sync with them.
- **Anticipate failure:** Create, plan and test failure scenarios to identify potential sources of problems and validate your understanding of their impact. Practice response procedures.
- **Learn from all operational failures:** Drive improvement through lessons learned from all operational failures, spreading the knowledge through the entire organization.

## Operational Excellence Best Practices
- **Organization:** Ensure shared cross-team understanding of: entire workload, roles and business goals. Evaluate: external customer needs, governance requirements, external compliance requirements, threat landscape, tradeoffs, benefits and risks. Ensure ownership for: resources, processes, procedures, team/cross-team responsibilities. Facilitate culture of: executive sponsorship, empowerment, escalation, communication, experimentation, growth.

- **Prepare:** Understand your workloads and their expected behaviour. Implement metrics, logs, events, and traces to know when outcomes are at risk. Adopt approaches that enable refactoring, fast feedback on quality, rapid recovery and bug fixing. Have a consistent process to evaluate your operational readiness, have runbooks and playbooks. Keep your entire workload as code.

- **Operate:** Define expected outcomes and how success is measured. Establish metrics baseline. Use runbooks for well-understood events, and use playbooks to investigate issues. Communicate the operational status of workloads through dashboards and notifications.

- **Evolve:** Learn, share, and continuously improve to sustain operational excellence. Perform post-incident analysis of all customer impacting events. Identify the contributing factors and preventative action of the issues and share those with affected communities as appropriate. Share lessons learned (and their trends) across teams.

## Operational Excellence - Best Practice Areas
**General Overview, Summary, Etc (wip)**
AWS Cloud Compliance, AWS Trusted Advisor, AWS Organizations

### Organization
- OPS 1. How do you determine what your priorities are?
	- OPS01-BP01 Evaluate customer needs
	- OPS01-BP02 Evaluate internal customer needs
	- OPS01-BP03 Evaluate governance requirements
		- AWS Config, AWS Organizations
	- OPS01-BP04 Evaluate compliance requirements
		- AWS Compute Optimizer, AWS Security Hub, AWS Audit Manager, AWS Artifact (for compliance docs).
	- OPS01-BP05 Evaluate threat landscape
		- competition, business risk and liabilities, operational risks, and information security threats
		- Related best practice
			- SEC01-BP07 Identify threats and prioritize mitigations using a threat model
		- Related documents
			- AWS Cloud Compliance
			- AWS Latest Security Bulletins
			- AWS Trusted Advisor
	- OPS01-BP06 Evaluate tradeoffs while managing benefits and risk
- OPS 2. How do you structure your organization to support your business outcomes?
	- OPS02-BP01 Resources have identified owners
		- Desired Outcome: Resources have identified owners using metadata or a central register
	- OPS02-BP02 Processes and procedures have identified owners
		- Desired Outcome: well defined and maintained set of process and procedures for operational tasks are stored in a central location.
		- Where possible, scripts, templates, and automation documents are implemented as code. They're centralized.
	- OPS02-BP03 Operations activities have identified owners responsible for their performance
	- OPS02-BP04 Mechanisms exist to manage responsibilities and ownership
		- Documentation artifacts: responsibility matrices, team definitions, or wiki pages.
	- OPS02-BP05 Mechanisms exist to request additions, changes, and exceptions
		- You need a change management process for operations activity, resources, processes & procedures- all have owners.
	- OPS02-BP06 Responsibilities between teams are predefined or negotiated
			- (for example, response times, service level objectives, or service-level agreements)
- OPS 3. How does your organizational culture support your business outcomes?
	- OPS03-BP01 Provide executive sponsorship
	- OPS03-BP02 Team members are empowered to take action when outcomes are at risk
	- OPS03-BP03 Escalation is encouraged
	- OPS03-BP04 Communications are timely, clear, and actionable
	- OPS03-BP05 Experimentation is encouraged
		- Ex anti pattern: Can't A/B test a new UI. Having only stage & prod environments & no sandbox for experimenting with new features.
	- OPS03-BP06 Team members are encouraged to maintain and grow their skill sets
	- OPS03-BP07 Resource teams appropriately

### Prepare
- OPS 4. How do you implement observability in your workload?
	- OPS04-BP01 Identify key performance indicators
	- OPS04-BP02 Implement application telemetry
	- OPS04-BP03 Implement user experience telemetry
		- Use RUM & synthetic transactions
	- OPS04-BP04 Implement dependency telemetry
	- OPS04-BP05 Implement distributed tracing
		- Use X-Ray
- OPS 5. How do you reduce defects, ease remediation, and improve flow into production?
	- OPS05-BP01 Use version control
	- OPS05-BP02 Test and validate changes
	- OPS05-BP03 Use configuration management systems
	- OPS05-BP04 Use build and deployment management systems
	- OPS05-BP05 Perform patch management
	- OPS05-BP06 Share design standards
	- OPS05-BP07 Implement practices to improve code quality
	- OPS05-BP08 Use multiple environments
	- OPS05-BP09 Make frequent, small, reversible changes
	- OPS05-BP10 Fully automate integration and deployment
- OPS 6. How do you mitigate deployment risks?
	- OPS06-BP01 Plan for unsuccessful change
	- OPS06-BP02 Test deployments
	- OPS06-BP03 Employ safe deployment strategies
	- OPS06-BP04 Automate testing and rollback
- OPS 7. How do you know that you are ready to support a workload?
	- OPS07-BP01 Ensure personnel capability
	- OPS07-BP02 Ensure a consistent review of operational readiness
	- OPS07-BP03 Use runbooks to perform procedures
	- OPS07-BP04 Use playbooks to investigate issues
	- OPS07-BP05 Make informed decisions to deploy systems and changes
		- Implement a practice of pre-mortems
	- OPS07-BP06 Create support plans for production workloads
		- Have docs for how to create tickets

### Operate
- OPS 8. How do you utilize workload observability in your organization?
	- OPS08-BP01 Analyze workload metrics
		- Prioritize business outcome metrics over technical metrics
	- OPS08-BP02 Analyze workload logs
		- Amazon Cloudwatch for log analysis, anomanly detection
	- OPS08-BP03 Analyze workload traces
		- Use AWS X-Ray for trace data analysis
	- OPS08-BP04 Create actionable alerts
	- OPS08-BP05 Create dashboards
- OPS 9. How do you understand the health of your operations?
	- OPS09-BP01 Measure operations goals and KPIs with metrics
	- OPS09-BP02 Communicate status and trends to ensure visibility into operation
	- OPS09-BP03 Review operations metrics and prioritize improvement
- OPS 10. How do you manage workload and operations events?
	- OPS10-BP01 Use a process for event, incident, and problem management
		- Standardize responses
	- OPS10-BP02 Have a process per alert
	- OPS10-BP03 Prioritize operational events based on business impact
	- OPS10-BP04 Define escalation paths
	- OPS10-BP05 Define a customer communication plan for service-impacting events
	- OPS10-BP06 Communicate status through dashboards
	- OPS10-BP07 Automate responses to events

### Evolve
- OPS 11. How do you evolve operations?
	- OPS11-BP01 Have a process for continuous improvement
	- OPS11-BP02 Perform post-incident analysis
	- OPS11-BP03 Implement feedback loops
	- OPS11-BP04 Perform knowledge management
		- Like a wiki
	- OPS11-BP05 Define drivers for improvement
	- OPS11-BP06 Validate insights
		- Common understanding and agreement of the meaning of the data you've collected.
	- OPS11-BP07 Perform operations metrics reviews
	- OPS11-BP08 Document and share lessons learned
		- Wiki for procedures & guidance; repository for scripts, libraries, code.
	- OPS11-BP09 Allocate time to make improvements

// security details starts on pg 257
# Security
AWS Organizations, AWS Config, AWS Control Tower, AWS GuardDuty
## Security - Best Practice Areas
### Security Foundations
- SEC 1. How do you securely operate your workload?
	- SEC01-BP01 Separate workloads using accounts
	- SEC01-BP02 Secure account root user and properties
	- SEC01-BP03 Identify and validate control objectives
	- SEC01-BP04 Stay up to date with security threats and recommendations
	- SEC01-BP05 Reduce security management scope
		- By using more managed services rather than virtual machines (RDS, EKS, ECS, or serverless options)
	- SEC01-BP06 Automate deployment of standard security controls
		- Use templates
	- SEC01-BP07 Identify threats and prioritize mitigations using a threat model
	- SEC01-BP08 Evaluate and implement new security services and features regularly
- SEC 2. How do you manage authentication for people and machines?
	- SEC02-BP01 Use strong sign-in mechanisms
	- SEC02-BP02 Use temporary credentials
	- SEC02-BP03 Store and use secrets securely
		- remove, replace, and rotate. Use cred manager. Separates concerns.
	- SEC02-BP04 Rely on a centralized identity provider
	- SEC02-BP05 Audit and rotate credentials periodically
	- SEC02-BP06 Employ user groups and attributes
- SEC 3. How do you manage permissions for people and machines?
	- SEC03-BP01 Define access requirements
	- SEC03-BP02 Grant least privilege access
	- SEC03-BP03 Establish emergency access process
	- SEC03-BP04 Reduce permissions continuously
	- SEC03-BP05 Define permission guardrails for your organization
	- SEC03-BP06 Manage access based on lifecycle
	- SEC03-BP07 Analyze public and cross-account access
	- SEC03-BP08 Share resources securely within your organization
	- SEC03-BP09 Share resources securely with a third party
		- Use cross-account roles to provide access to external accounts.
		- IAM Roles Anywhere
		- Use an external ID with third parties.
		- Use universally unique external IDs
		- Deprecate customer-provided long-term credentials.
		- Verify that setup has prescriptive guidance or is automated.
		- Account for changes.
### Detection
- SEC 4. How do you detect and investigate security events?
	- SEC04-BP01 Configure service and application logging
	- SEC04-BP02 Capture logs, findings, and metrics in standardized locations
	- SEC04-BP03 Correlate and enrich security alerts
	- SEC04-BP04 Initiate remediation for non-compliant resource
### Infrastructure Protection
- SEC 5. How do you protect your network resources?
	- SEC05-BP01 Create network layers
		- Use multiple public / private subnets, multiple VPCs, and even multiple VPCs across multiple accounts
	- SEC05-BP02 Control traffic flow within your network layers
	- SEC05-BP03 Implement inspection-based protection
	- SEC05-BP04 Automate network protection
- SEC 6. How do you protect your compute resources?
	- SEC06-BP01 Perform vulnerability management
	- SEC06-BP02 Provision compute from hardened images
	- SEC06-BP03 Reduce manual management and interactive access
	- SEC06-BP04 Validate software integrity
	- SEC06-BP05 Automate compute protection

### Data Protection
- SEC 7. How do you classify your data?
	- SEC07-BP01 Understand your data classification scheme
	- SEC07-BP02 Apply data protection controls based on data sensitivity
	- SEC07-BP03 Automate identification and classification
	- SEC07-BP04 Define scalable data lifecycle management
- SEC 8. How do you protect your data at rest?
- SEC 9. How do you protect your data in transit?
	- SEC09-BP01 Implement secure key and certificate management
	- SEC09-BP02 Enforce encryption in transit
	- SEC09-BP03 Authenticate network communication
### Incident response
- SEC 10. How do you anticipate, respond to, and recover from incidents?
	- SEC10-BP01 Identify key personnel and external resources
	- SEC10-BP02 Develop incident management plans
	- SEC10-BP03 Prepare forensic capabilities
	- SEC10-BP04 Develop and test security incident response playbooks
	- SEC10-BP05 Pre-provision access
	- SEC10-BP06 Pre-deploy tools
	- SEC10-BP07 Run simulations
	- SEC10-BP08 Establish a framework for learning from incidents
### Application security
- SEC 11. How do you incorporate and validate the security properties of applications throughout the design, development, and deployment lifecycle?
	- SEC11-BP01 Train for application security
	- SEC11-BP02 Automate testing throughout the development and release lifecycle
	- SEC11-BP03 Perform regular penetration testing
	- SEC11-BP04 Manual code reviews
	- SEC11-BP05 Centralize services for packages and dependencies
	- SEC11-BP06 Deploy software programmatically
	- SEC11-BP07 Regularly assess security properties of the pipelines
	- SEC11-BP08 Build a program that embeds security ownership in workload teams

# Reliability
## Reliability -  Best Practice Areas
### Foundations
- REL 1. How do you manage Service Quotas and constraints?
	- REL01-BP01 Aware of service quotas and constraints
	- REL01-BP02 Manage service quotas across accounts and regions
	- REL01-BP03 Accommodate fixed service quotas and constraints through architecture
	- serverless function invocation payload size, throttle burst
rate for of an API gateway, and concurrent user connections to a database.
	- REL01-BP04 Monitor and manage quotas
	- REL01-BP05 Automate quota management
	- REL01-BP06 Ensure that a sufficient gap exists between the current quotas and the maximum usage to accommodate failover