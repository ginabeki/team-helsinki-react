# Project Contribution Guidelines

## Local Setup

### Fork & Clone from GitHub to Local Environment

- fork the main team-helsinki-react repo
  [![Screenshot-2022-10-20-at-2-47-14-PM.png](https://i.postimg.cc/Kz31C8cQ/Screenshot-2022-10-20-at-2-47-14-PM.png)](https://postimg.cc/LYR41R1Z)
- clone the forked repo by running the ssh or https links below:

  - ssh: `git clone git@github.com:your-username/team-helsinki-react.git`
  - https: `git clone https://github.com/your-username/team-helsinki-react.git`

### Naming branches

- create a new branch that is based on `main` using the command `git checkout -b branch-name`
- the branch name should be descriptive and wording should depend on whether you are working on a feature, chore, or bug.
- the typical convention is to use:
  - `ft` or `feature` when it is a feature or an enhancement branch. eg `feature-create-hero-component`
  - `ch` or `chore` when it is something that doesn't add to the code but is tooling around it. Eg creating linters using a branch naming like `ch-create-linter` or `chore-create-linter`
  - `bg` or `bug` when the branch is for fixing a bug. Eg `bg-fix-breaking-thing` or `bug-fix-breaking-thing`

### Install Dependencies Locally and Run Project

- run `npm i` to install `node-modules` and all project dependencies
- run `npm start` to run the app locally on `localhost:3000`

## Airbnb Style Guide

We are using the [airbnb style guide](https://github.com/airbnb/javascript/tree/master/react) to enforce JavaScript rules, but some rules are open to modification via the rules object in the `.eslintrc.js` file

### Setup ESlint, Prettier, and auto format on save

#### VSCode Extensions

in order for the linting tools to work correctly, you will need to install two VSCode extensions:

- prettier: this is an extension for enforcing code styles and preferences
- eslint: this extension helps to find and fix problems in JavaScript code.

#### Install Prettier and ESlint VS Code Extension:

- in VSCode's extension tab, search for prettier and install
- also search for ESlint and install

#### Setup auto format on save

- in VSCode, go to File > Preferences > Settings or press `ctrl + ,`
- in the search bar, type `format` and check the box for `Editor:Format On Save`
- next, search for `default formatter` and in the dropdown list under `Editor: Default Formatter` select `Prettier - Code formatter`
- exit settings by closing the tab
- test formatting by saving changes in a file within the project

## Pull Requests

- Commit your work to the branch you created using the `git checkout -b branch-name` command
- Ensure that your commits are descriptive and atomic
- Push your branch to GitHub using the command `git push your-username branch-name` or `git push` if you have already pushed the branch to GitHub
- Create a PR to main on your fork on GitHub
- Complete the PR template
- Engage with the nominated maintainers of the repo via the PR threads
- Once all changes have been accepted, your PR will be merged.
