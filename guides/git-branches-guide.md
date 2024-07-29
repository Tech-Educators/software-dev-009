# Git Collaboration Workflow Guide

## Adding Collaborators to your repo

- Go to your repository on GitHub.
- Click on the **Settings** tab.
- Select **Collaborators**.
- Add GitHub usernames or email addresses of your collaborators.

Collaborators will receive an email or notification on GitHub.

## Creating a Branch

1. **Create a new branch:**
   ```sh
   git checkout -b new-branch-name
   ```

2. **Make changes and commit:**
   - Edit files and add changes to the staging area.
     ```sh
     git add .
     ```
   - Commit the changes.
     ```sh
     git commit -m "Description of changes"
     ```

3. **Push the branch to GitHub:**
   ```sh
   git push origin new-branch-name
   ```



## Creating Up a Pull Request

When you do the above steps, there will be a pop up on the repository page asking if you want to create a pull request.
Click the `Create Pull Request` and then the same button on the next page.

## Merging a Pull Request

1. **Review the pull request:**
   - Go to the **Pull requests** tab on GitHub.
   - Review the changes.

2. **Merge the pull request:**
   - Click the **Merge pull request** button.
   - Confirm the merge by clicking **Confirm merge**.
   - Delete the branch after merging (because it's neater that way)

## Start the process again

1. **Checkout main and get your merged changes, and start again:**
   ```sh
   git checkout main
   git pull origin main
   git checkout -b another-new-branch-name
   ```
This will get the most up to date version of the main branch onto your local.
