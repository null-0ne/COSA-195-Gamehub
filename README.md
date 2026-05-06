# Dice Games Project

This project is a web application built using Vite. It features a modular structure with dedicated sections for components, library logic, and example implementations

## Team Memebers

Samuel Cyrenne
Change from main

## Folder Structure

```
dice-games/
├── cypress/            The main folder testing
│   ├── component       Scripts for automated testing of components
│   │   ├── examples/   Demonstration component testing scripts
│   ├── e2e/            Scripts for automated end to end testing
│   │   ├── examples/   Demonstration end to end testing scripts
│   ├── fixtures/       Sample data used for testing e2e and components
│   │   ├── examples/   Demonstration sample data used to compare actual content
│   ├── support/        Extra files used to run command and component test
├── node_modules/       Contains the npm packages - EXCLUDED from GIT
├── public/             Static assets that are served directly
│   ├── css/            Stores global stylesheets, such as app.css
│   ├── images/         Images used throughout the UI
├── src/                The main source code directory, contains page components
│   ├── components/     Reusable UI components like the navbar.js
│   ├── examples/       Demonstration pages and components
│   ├── lib/            General-purpose utility functions and shared logic
│   ├── app.js          The main entry point for the application logic
├── uml/                Technical documentation and UML diagrams
│   ├── examples/       Demonstration documentation and diagrams
├── .gitignore          Configures git to exclude folder like node_modules
├── cypress.config.js   Configures Cypress for E2E and Component testing
├── index.html          The main HTML shell for the Vite application
├── db-for-api.json     JSON file acts as the DB for the api server
├── db-seed-data.json   JSON file with data fixtures that overwrites db-for-api
├── package.json        Defines project dependencies and scripts
├── README.md           This file
├── vite.config.js      Configures the vite packager for the project
```

## Install Dependencies (create node_modules folder)

Open terminal ensure you are in **dice-games** directory and run the following:

```termimal
npm install
```

## Run the application

Open terminal ensure you are in **dice-games** directory and run the following:

```termimal
npm run seed-data
npm start
```

# GIT Reference

## Hourly Commit

Open GitBASH ensure you are in **dice-games** directory and run the following:

```termimal
git status
git add -A
git commit –m "A descriptive commit message"
git push
```

## Setup GIT

Open GitBASH in any directory and run the following:

```termimal
git config --global push.default simple
git config --global difftool.keepbackup false
git config --global mergetool.keepbackup false
git config --global user.email yourname@saskpolytech.ca
git config --global user.name "Your Name"
```

## Clone a Repository from BitBucket

Open GitBASH ensure you are in **dice-games** directory and run the following:

```termimal
git clone https://bitbucket.org/cstprojects/team<your team color>2026.git
```

## Switch betwen branches Branch

Open GitBASH ensure you are in **dice-games** directory and run the following:

```termimal
git reset --hard
git checkout <branchname>
git pull
```

## Get latest changes Branch

Open GitBASH ensure you are in **dice-games** directory and run the following:

```termimal
git reset --hard
git pull
```

## Merge from main

Open GitBASH ensure you are in **dice-games** directory and run the following:

```termimal
git reset --hard
git checkout main
git pull
git checkout <branchname>
git merge main

## There will likely be conflicts - fix them
##Once all conflicts are resolved

git add -A
git commit –m "A descriptive commit message"
git push
```
