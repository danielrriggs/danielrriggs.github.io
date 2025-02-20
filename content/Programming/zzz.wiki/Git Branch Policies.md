Azure Git Branching Policies

- Mainline development - commit directly to master.
	- `develop` - the team may exercise [[mainline development]] practices against the `develop branch`
		- If you want development isolation, then create a feature branch. Otherwise, feel free to develop directly on `develop`.
			- Example feature branch format: `f/<branchName>`, ex: `f/myFeatureBranch`.
	- The `develop` branch will be merged to `main` branch via a [[pull request]]
		- e2e tests run
		- build Images
		- ship to ECR
		- depoys to Dev