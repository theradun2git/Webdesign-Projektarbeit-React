# Webdesign-Projektarbeit-React

## Requirements (with Windows OS)
- Visual Studio Code (https://code.visualstudio.com/Download)
- Docker (https://docs.docker.com/desktop/install/windows-install/)
- Node.js (https://nodejs.org/en/download/package-manager | LTS version is preferred)
- Git (https://git-scm.com/downloads)

### Extensions in Visual Studio Code
```
--install-extension mtxr.sqltools
--install-extension mtxr.sqltools-driver-mysql
--install-extension humao.rest-client
--install-extension ms-azuretools.vscode-docker
```

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

## React

### Installation
- Change to Root-Folder
- Install with `npx create-react-app my-app`
- After the install to run the app with `npm start`
- Important: Wechsel von Port 3000 auf 3001 => mit "Y" bestätigen

### Problems with CORS
- Install CORS in the "rest-api" - Folder with `npm install cors`
- Rebuild Docker Container with `docker build && docker compose up`
- add this text to .\rest-api\app.js: `app.use(cors({ origin: 'http://localhost:3001' })); // Allow requests from your React app` (before const relations ...)

### Journal

#### 14.09.2024
- Klärung div. Fragen u.a. zu "React", Docker und GitHub
- Erläuterung Projektarbeit inkl. Beispiele

#### 21.09.2024
- First steps with a tutorial
- Inserting the table “Categories”
- Problem solved with CORS

