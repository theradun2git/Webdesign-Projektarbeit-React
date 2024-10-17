# Webdesign-Projektarbeit-React

## Requirements

### Tested with Windows 11
- Visual Studio Code (https://code.visualstudio.com/Download)
- Docker (https://docs.docker.com/desktop/install/windows-install/)
- Node.js (https://nodejs.org/en/download/package-manager | LTS version is preferred)
- Git (https://git-scm.com/downloads)

### Recommended extensions in Visual Studio Code
- mtxr.sqltools
- mtxr.sqltools-driver-mysql
- humao.rest-client
- ms-azuretools.vscode-docker

## W3Schools Database in Docker

### Overview

Forked from https://github.com/AndrejPHP/w3schools-database for academic purposes.

This repository provides:

- a docker compose which sets up the DB on port 3309 (non-default, no clashes)
- initializes the database data from w3schools (provided by @AndrejPHP) 
- Visual Studio Code config

### Fork to your github account
Go to github.com, create a new account or login.
Fork my repo (https://github.com/theradun2git/Webdesign-Projektarbeit-React)

Now you have a repository w3schools-database in your github account.
Clone that with
```
git clone https://github.com/YOURUSERNAME/w3schools-database
cd w3schools-database
code .
```

Run the database and rest-api
```
docker-compose up
```

Start the react app like this
```
cd my-app
npm start
```

### How to reset?

Execute:

```bash
docker compose down
rm -rf data
docker compose up -d
```

### Tables

When the docker container starts, it creates database named __w3schools__ with the following tables

    categories
    customers
    employees
    orders
    order_details
    products
    shippers
    suppliers
    
and inserts the respective data. 

### Features
1. Get and list all categories
2. Create a new category
3. Update an existing category
4. Delete a category
5. Give an error message to the user when trying to delete a category that can't be deleted

## Configuration "React"- APP

### Installation with Visual Studio Code
- Open an inline Terminal
- Change to Root-Folder
- Install with `npx create-react-app my-app`
- After the install --> change to "my-app" - Folder
- Run the app with `npm start`
- Important: Change from port 3000 to 3001 => confirm with "Y"

### Configuration "CORS"
- Install CORS in the "rest-api" - Folder with `npm install cors`
- add this text to .\rest-api\app.js: `app.use(cors({ origin: 'http://localhost:3001' })); // Allow requests from your React app` (before const relations ...)
- Rebuild Docker Container with `docker build && docker compose up` or manually delete the containers and images in Docker. Then run `Docker Compose up`

### Package required for navigation bar
- Installation via command line in "My App" `npm install react-router-dom`

### Package required for design
- Installation via command line in "My App" `npm install react-bootstrap bootstrap`

### Problems with "npm-start"
- Check Node.js with `node -v` and npm `npm -v`
- Reinstallation npm via command line in "My App" `npm install`

### Easter Egg
- "Press arrow up, arrow up, arrow down, arrow down, and guess a number between 1 and 100. Good luck!

### Features
- Display 3 different entities with `GET` (Customer list, categories, product list)
- 2 different entities with `POST`, `PATCH`, `DELETE` (Buttons with New, Edit or Delete)
- Three or more additional features are available and functional:
  - Navigation bar
  - Welcome page with banner that changes the images
  - Lists sorted from A to Z by default
  - Pages with contact & sitemap
  - Easter Egg

## Journal

### 14.09.2024
- Clarification of various questions about “React”, Docker and GitHub, among others
- Explanation of project work incl. examples

### 21.09.2024
- First steps with a tutorial
- Inserting the table “Categories”
- Problem solved with CORS

### 24.09.2024
- Further tables (Customers, Products) integrated with "GET, POST, DELETE" - commands
- Add Contact, Welcome Site 
- Add Menu navigation with "react-router-dom"

### 25.09.2024
- Add Sitemap
- Designupdate

### 07.10.2024
- Update "README.md"
