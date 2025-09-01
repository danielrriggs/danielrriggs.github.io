Summaries, Notes
[[AWS TLDR] Well-architected Framework | by Mykhailo Gorianskyi | BurdaForward | Medium](https://medium.com/burdaforward/aws-tldr-well-architected-framework-423125d5ca24)

[The 6 Pillars of the AWS Well-Architected Framework | AWS Partner Network (APN) Blog (amazon.com)](https://aws.amazon.com/blogs/apn/the-6-pillars-of-the-aws-well-architected-framework/)

[AWS Well-Architected Framework | AWS Whitepaper Summary - DEV Community](https://dev.to/awsmenacommunity/aws-well-architected-framework-aws-whitepaper-summary-335b)


6 Pillars 
- Operational Excellence
- Security
- Reliability
	- Work correctly and consistently on the workload through lifecycle.
- Performance efficiency
	- Efficiently meet system requirements. Maintain efficiency as demand changes and tech evolves.
- Cost Optimization
	- Deliver value at lowest price.
- Sustainability


Operational Excellence
Organization
Business goals
priorities
threats
risks
teams
communication
experimentation
compliance
environments
roles & responsibilities
runbook
entire workload as code (apps, infra, policy, governance, ops)
Ops success is measured by business & customer outcomes.
handle operational events. planned & unplanned.
Use run books for well understood events.
Use playbooks for resolution investigation.
Prioritize responses based on business & customer impact.
Verify that if an alert is raised (in response to an event), there's an associated process to run with a specific owner.
Operational Excellence - Evolve
continuously improve
post-incident analysis
communicate
share lessons
Analyze trends
Implement changes
Security
Segregate workloads by account - based on function / data sensitivity requirements.
Reliability
Disaster Recovery (DR)
RTO & RPO are your objectives
**Recovery Time Objective (RTO)**
**Recovery Point Objective (RPO)**
Track KPIs, RTOs, & RPOs to assess workload resiliency.

...
Provisioning network workloads
Process and culture

cost
using cost effective resources
Tag resources to get tag costs analyzed together.
Use spot instances
aws cost explorer
AWS Trusted Advisor

Sustainability
Scale infrastructure with user load
SLAs
decommission target
Decommission unused assets
Geographic workloads - Analyze network access patterns to identify where your customers are connecting from geographically.

load smoothing

... pg 81
The Well-Architected Framework emphasizes learning, measuring, and improving
