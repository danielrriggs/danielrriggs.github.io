#AMI #AWS #Apache #WebServer
How to SSH into the Box
Option 1) Use the [[AWS Session Manager]] to SSH into the EC2 instance.


**Relevant File Directories**
/var/www/ - source code dir.
/var/www/log > Apache Web Server log directory. devapi or dev-app .access / .error file.
/etc/httpd/vhosts.d/ - apache config dir.
/var/www/phpMyAdmin - index ??


Dependencies. See [[AWS Secrets Manager]] for secrets.
/var/www/phpMyAdmin.config.inc.php - contains:
	SQL Connection String.
		$cfg['Servers'][$i]['host'] = zzz-dev-db.zzzzzzzzzzzz.us-east-1.rds.amazonaws.com
		$cfg['blowfish_secret'] = '<secretString>';
		


**How to Restart Apache:**
(optional) verify it's running: `netstat -tulpn| grep :80`
sudo apachectl stop
(optional) verify it's running: `netstat -tulpn| grep :80`
sudo apachectl start
Alternative method:
apachectl graceful


**How to set an environment variable.**
Define them in [[AWS Secrets Manager]].
Define them in Azure DevOps


**How to Debug Apache**
/var/www/log > devapi or dev-app .access / .error file.
**Question**: What other resources exist? (Cloudwatch, Datadog, Grafana, etc).


**Ad Hoc method for deploying files to EC2 instances:**
In Azure, make yourself a Git Credential to clone the Ad-Hoc-File Transfer repository - https://dev.azure.com/zzz/zzz%20Legacy/_git/ad-hoc-file-transfer
	Git clone the Ad-Hoc-File-Transfer repo. Put your files in the cloned repository. Git push with --force.
	Then, clone the files onto the box:
		- cd /var/www/ad
	On the box, use your credentials to clone the repo. Ex: https://daniel@dev.azure.com/zzz/zzz%20Legacy/_git/ad-hoc-file-transfer. Provide the password when prompted.


// todo - SSL documentation
How to Check SSL Cert Validity
//  where does it live (on disk)?
// where does it come from? who's the owner?
Related: [[Certbot]], [[SSL]]


todo - nvm documentation. How to install. How to use.
todo - yum usage
	Ex - yum list --installed
todo - systemctl usage


