# Accounts

| Email                                         | AWS Account Name            | Password      | Account ID   | Description                       | MFA Name              | IAM Sign In URL                                    |     |
| --------------------------------------------- | --------------------------- | ------------- | ------------ | --------------------------------- | --------------------- | -------------------------------------------------- | --- |
| danielrriggs@gmail.com                        |                             | AWSTraining1! | 573384713938 | Not being used (as of 10/18/2024) |                       |                                                    |     |
| danielrriggs+trainingawsgeneral@gmail.com     | AC-TRAINING-AWS-GENERAL     | AWSTraining1! | 122610492488 | Root user                         | AWSTrainingGeneral    | https://122610492488.signin.aws.amazon.com/console |     |
| danielrriggs+trainingawsproduction@gmail.com  | AC-TRAINING-AWS-PRODUCTION  | AWSTraining2! | 940482415217 |                                   | AWSTrainingProduction |                                                    |     |
| danielrriggs+trainingawsdevelopment@gmail.com | AC-TRAINING-AWS-DEVELOPMENT |               | 180294204490 |                                   |                       |                                                    |     |


Todo:
Add MFA, enable IAM Users & Role access to billing, and Billing alert for the production account.

# IAM Users

| User     | Password         | Sign In URL                                                         | Account alias                 | Account ID   |
| -------- | ---------------- | ------------------------------------------------------------------- | ----------------------------- | ------------ |
| iamadmin | AWSTraining1!    | https://danny-training-aws-general.signin.aws.amazon.com/console    | danny-training-aws-general    | 122610492488 |
| iamadmin | AWSTraining2!iam | https://danny-training-aws-production.signin.aws.amazon.com/console | danny-training-aws-production | 940482415217 |

###### Access Keys
Access keys can be created, activated/deactivated, and deleted. Only 2 keys, either active or inactive, can be created per account / user. 2 is useful in case you need to rotate keys. You can't get access to the secret access key once you've generated them, so if you lose it, you'll need to re-generate it.

###### AWS CLI
The aws cli allows us to specify a named profiles. If not specified, the default ?? is used. The named profile can be used to manage multiple aws environments.

`aws configure --profile iamadmin-general`

After setting up, test with:
`aws s3 ls --profile iamadmin-general`

`aws configure --profile iamadmin-production`

After configuring credentials, it's a good idea to delete the .csv files with the access creds for security.

# Roles

Production role
- OrganizationAccountAccessRole