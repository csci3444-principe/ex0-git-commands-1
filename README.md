# ex0_git_commands
Example project to show using git commands at command line

## Make sure git is installed
git --version

## First see and set, git config settings
### To see all git config settings
git config --list

### To see specific global git config setting like user.name , user.email
git config --global user.name
git config --global user.email

### To set user.name , user.email  global config setting (NOT needed if it had been set before, viewed above)
git config --global user.name  'yourGithubUsername'
git config --global user.email 'yourGithubEmail@gmail.com'

## Create a project dir
mkdir -p /c/fdu/csci3444/projects/ex0_git_commands
cd /c/fdu/csci3444/projects/ex0_git_commands
ls -a

## Create local git repo at the project's home directory
git init
ls -a

## Create some files and dir
touch index.html
touch style.css
touch script.js
touch README.md
touch letGitIgnoreMe.txt
mkdir target
touch target/someDumFile.txt

## see what git thinks about these files and dir (NOTE git sees all files and dirs as "Untracked files" displayed in red)
git status

## Create .gitignore file with below contents
```sh
# files to be ignored by git #
##############################
letGitIgnoreMe.txt

# directories to be ignored by git #
####################################
/target/

# local git repo to be ignored by git as well #
###############################################
.git/
```
## To add a file from "working"(normal) dir to git's staging(index)
git add README.md

## To undo (remove) adding a file to git's staging(index)
git rm --cached README.md

## To add all files from working dir to staging
git add .

Added THIS line
