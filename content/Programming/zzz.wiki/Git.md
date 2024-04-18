Documentation: https://git-scm.com/downloads

Elevated perissions may be required

### Windows Setup
git config --global user.name "FIRST_NAME LAST_NAME"
git config --global user.email "[MY_NAME@example.com](mailto:MY_NAME@example.com)"

### Mac Setup
Documentation to setup Git on Mac. This information may not be accurate (last update 12/2/2022).
Keychain
https://medium.com/codex/git-credentials-on-macos-caching-updating-and-deleting-your-git-credentials-8d22b6126533
https://docs.github.com/en/get-started/getting-started-with-git/updating-credentials-from-the-macos-keychain


Git Pro Tips:
- A method for '**squashing**' commits in Git (Uses the vs code plugin: 'Git History' )
	- First, `git checkout <branchToMergeOrRebaseInto>; git pull <branchToMergeOrRebaseInto>;`
	- Then , `git checkout myBranch`
	- In VS Code, open the Git History VS Code Extension by pressing: `Ctrl + p`, then type `> git log` in the search bar.
	- Get the <hash> for previous commit
	-  `Git reset <hash> --soft`
	- Git rebase develop // if I want to rebase, or you can do `git merge develop` as well
	- Git push --force
	- Note that push --force will overwrite upstream commit history, so be careful to review when using --force.


```
### Here was the simplest method to migrate while preserving all git history & all branches:
REEA code copy:
	git clone --mirror&nbsp;[https://git.reea.net/iphoneteam/atta.git](https://git.reea.net/iphoneteam/atta.git)  
	cd .\atta.git\  
	git remote set-url --push origin&nbsp;[https://zzz@dev.azure.com/zzz/zzz%20Legacy/_git/alpha_atta](https://zzz@dev.azure.com/zzz/zzz%20Legacy/_git/alpha_atta)  
	git push --mirrorgit clone --mirror&nbsp;[https://git.reea.net/reea/atta_android.git](https://git.reea.net/reea/atta_android.git)  
	cd atta_android.git  
	git remote set-url --push origin&nbsp;[https://zzz@dev.azure.com/zzz/zzz%20Legacy/_git/alpha_AttaAndroid](https://zzz@dev.azure.com/zzz/zzz%20Legacy/_git/alpha_AttaAndroid)  
	git push --mirrorgit clone --mirror&nbsp;[https://git.reea.net/iphoneteam/atta_api.git](https://git.reea.net/iphoneteam/atta_api.git)  
	cd atta_api.git  
	git remote set-url --push origin&nbsp;[https://zzz@dev.azure.com/zzz/zzz%20Legacy/_git/alpha_atta_api](https://zzz@dev.azure.com/zzz/zzz%20Legacy/_git/alpha_atta_api)  
	git push --mirrorgit clone --mirror&nbsp;[https://git.reea.net/iphoneteam/atta-custom-api.git](https://git.reea.net/iphoneteam/atta-custom-api.git)  
	cd .\atta-custom-api.git\  
	git remote set-url --push origin&nbsp;[https://zzz@dev.azure.com/zzz/zzz%20Legacy/_git/alpha_Atta%20Custom%20API](https://zzz@dev.azure.com/zzz/zzz%20Legacy/_git/alpha_Atta%20Custom%20API)  
	git push --mirrorgit clone --mirror&nbsp;[https://git.reea.net/iphoneteam/widgetzzz.git](https://git.reea.net/iphoneteam/widgetzzz.git)  
	cd .\widgetzzz.git\  
	git remote set-url --push origin&nbsp;[https://zzz@dev.azure.com/zzz/zzz%20Legacy/_git/alpha_widgetzzz](https://zzz@dev.azure.com/zzz/zzz%20Legacy/_git/alpha_widgetzzz)  
	git push --mirror
	
### Alternative (inferior?) Method:
	https://stackoverflow.com/questions/17371150/moving-git-repository-content-to-another-repository-preserving-history
	beta is the name of the new origin
	git remote add beta https://zzz@dev.azure.com/zzz/zzz%20Legacy/_git/atta
	git push --all beta
	git push --tags beta
	
	// then, delete the old origin & make `beta` the new default origin.
	git remote rm origin
	git remote rename beta origin