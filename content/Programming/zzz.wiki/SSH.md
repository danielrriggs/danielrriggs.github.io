Related: [[SqlTools]], [[AWS Session Manager]], [[SDLC]]

**SSH Windows Client Setup Documentation**
1) cd to %USERPROFILE% (C:\Users\Daniel Riggs in my case). Create .ssh folder if it doesn't exist (ensure hidden folders are viewable in Windows).  
2) run C:\Users\Daniel Riggs\.ssh> `ssh-keygen -t rsa -b 4096` to create your public & private key. In this example, my private key is named `C:\Users\Daniel Riggs\.ssh\zzz`, and my public key is `C:\Users\Daniel Riggs\.ssh\zzz.pub`. As a personal preference, I also set a password on my keys.  
3) Feed the ssh tool the right arguments  
1) C:\Users\Daniel Riggs\.ssh>ssh -i zzz ec2-user@xxx(ip)
1) `zzz` - the file name of my private key  
2) ec2-user - username for the SSH session  
3) xxx(ip) - the ssh target  
4) In Windows, don't change any file permissions  
1) In Windows, I right-clicked the folder -> properties, I gave my user (Daniel Riggs) 'Full Control' over the folder. The ssh lib did not like this. To fix that problem, I backed up everything in the .ssh folder, deleted it, and re-created the .ssh folder.


**Add SSH User to Bastion Documentation**  
sudo adduser driggs  
sudo su - driggs  
mkdir .ssh  
chmod 700 .ssh  
touch .ssh/authorized_keys  
chmod 600 .ssh/authorized_keys  
Then, I pasted my public key (.pub) into driggs' authorized_keys file (vi authorized_keys; paste it; :wq).  
// vi wasn't working as expected in Windows Command Prompt; switching to Powershell seemed to work.Then, test connecting from client machine  
C:\Users\Daniel Riggs\.ssh> ssh -i zzz ec2-user@xxx(ip)

To **SSH from one box to another** as ec2-user, you need the -J jump argument:
ssh -J ec2-user@172.31.68.236

12/19/2022 snapshot of Daniel's .ssh:
```
Host zzz-dev-bastion-sudo
Hostname xxx
User ec2-user
IdentityFile ~/.ssh/ec2-user.pem

Host zzz-bastion-sudo
Hostname xxx
User ec2-user
IdentityFile ~/.ssh/ec2-user.pem

Host zzz-bastion
Hostname xxx
User erallis
IdentityFile ~/.ssh/erallis

# Staging Server
Host zzz-staging
#Hostname xxx
Hostname xxx
User ec2-user
IdentityFile ~/.ssh/zzz.pem
# local MySQL on Staging server

Host old-stage-zzz-db
User ec2-user
Hostname xxx
Localforward 3308 localhost:3306
IdentityFile ~/.ssh/zzz.pem
#
Host zzz-stage-db
User erallis
Hostname xxx
Localforward 3307 zzz-stage-db.czrelxz3tz9n.us-east-1.rds.amazonaws.com:3306
IdentityFile ~/.ssh/erallis
```
!!! todo - security audit.