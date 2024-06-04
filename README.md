# PDF2QUIZ
Website to convert any pdf into a quiz.

## For running any backend code, certain libraries are required, try to run server.py and runLLm.py and pip install missing libraries.

### How to create a feature branch<br>
This step is not necessary at the moment.
1. `git branch feature-branch`  (You can name ur feature branch, replace with your name)
2. `git switch feature-branch`

### Before starting any work, make sure your branch is upto date with main branch on the repository
Failing to do this may cause errors in pushing code and need for rebasing
```
git switch main
git pull origin main
```

### How to add files to main branch
Do this to update main branch on the repository:<br>
`git checkout main`<br>
`git add .`<br>
`git commit -m "Add new files to feature branch"`<br>
`git push origin main`<br>
 
### How to merge changes to main branch from feature branch
This step is also unecessary at the moment.
```
git switch main
git merge feature-branch  (Replace feature-branch with actual name of your feature branch)
```

### How to run backend API
Change your directory to "backend"<br>
This starts the backend server
`python3 server.py`<br>
This runs the backend logic for quiz JSON generation (Feature under test, will be automated later)
`python3 runLLm.py`

### How to run frontend server
Change your directory to "Frontend"
`npm start`


