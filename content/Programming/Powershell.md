Change file extension with PowerShell:
Get-ChildItem "*.txt" | Rename-Item -NewName { $_.Name -replace "\.txt$",".md" }

Powershell find empty folders
(gci E:\HGGOut -r | ? {$_.PSIsContainer -eq $True}) | ?{$_.GetFileSystemInfos().Count -eq 0} | select FullName

