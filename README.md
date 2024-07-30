# FinanceTrack Frontend Application

This project is the frontend application for FinanceTrack, a tool designed for budgeting and transaction management. It enables users to view, create, edit, and delete financial transactions, assisting them in effectively managing their finances.

## Features

- View a list of transactions with details.
- Add a new transaction.
- Edit an existing transaction.
- Delete a transaction.
- Calculate and display the total budget.

## Technologies Used

- React: A JavaScript library for building user interfaces.
- React Router: A collection of navigational components that compose declaratively with your application.
- Fetch API: For making HTTP requests to the backend server.

## Getting Started

### Prerequisites

- Node.js: Make sure you have Node.js installed. You can download it from [nodejs.org](https://nodejs.org/).
- npm: Node package manager, installed with Node.js.

### Installation

1. DO NOT clone the repository. Create from scratch:

   ```bash
   //Web URL
   https://github.com/incognito1025/bank-transaction-app-frontend.git
   ```

2. Initialize Vite project using Create React App and create necessary directories and files:

    ```
    npm create vite@4 bank-transaction-app-frontend
    cd bank-transaction-app-frontend
    npm install
    npm run dev
    ```

    ```
    mkdir src
    cd src
    mkdir Components Pages assets
    touch App.css App.jsx index.css main.jsx
    
    cd bank-transaction-app-frontend
    npm install
    npm install react-router-dom
    npm install axios
    npm install redux react-redux
    npm install styled-components
    npm install dotenv
    npm run dev
    ```


    ```
    //Install Dependencies: Install the necessary dependencies.
    npm install
    ```


    //Start the Development Server: Start the development server to see your new React app.
    npm run dev

    //Additional Packages
    //React Router: For handling routing in your React app.
    npm install react-router-dom

    //Axios: For making HTTP requests.
    npm install axios

    //Redux: For state management (optional).
    npm install redux react-redux

    //Styled Components: For styling your components.
    npm install styled-components







Start the Development Server: Start the development server to see your new React app.
    ```
    //packages
    npm install react-router-dom React
    npm install axios
    npm install redux react-redux
    npm install styled-components
    npm install dotenv
    ```



3. Install the dependencies:

    ```
    npm run dev
    ```

### Running the Application

1. Start the development server:

   ```
   npm run dev
   ```

2. Open your browser and navigate to `http://localhost:5173/`.

### Building for Production

To create a production build of the application, run:

```sh
npm run build
```

3. Purpose of each file.

### Main.jsx

To create a production build of the application, run:

```sh
npm run build


```


## Project Structure

```
FinanceTrack/
│
├─── node_modules/
│
├─── public/
│    └─── vite.svg
│
├─── src/
│    │
│    ├─── Components/
│    │    ├─── NavBar.jsx
│    │    ├─── Transaction.jsx
│    │    ├─── TransactionDetails.jsx
│    │    ├─── TransactionEditForm.jsx
│    │    ├─── TransactionNewForm.jsx
│    │    └─── Transactions.jsx
│    │
│    ├─── Pages/
│    │    ├─── EditPage.jsx
│    │    ├─── ErrorPage.jsx
│    │    ├─── HomePage.jsx
│    │    ├─── IndexPage.jsx
│    │    ├─── NewPage.jsx
│    │    └─── ShowPage.jsx
│    │
│    ├─── assets/
│    │
│    ├─── App.css
│    ├─── App.jsx
│    ├─── index.css
│    └─── main.jsx
│
├─── .gitignore
├─── .eslintrc.cjs
├─── README.md
├─── index.html
├─── package-lock.json
├─── package.json
└─── vite.config.js

```


## Wireframe
 
### Project Structure
```
FinanceTrack/
│
└─── src/
     │
     ├─── Components/
     │    ├─── NavBar.jsx
     │    ├─── Transaction.jsx
     │    ├─── TransactionDetails.jsx
     │    ├─── TransactionEditForm.jsx
     │    ├─── TransactionNewForm.jsx
     │    └─── Transactions.jsx
     │
     ├─── Pages/
     │    ├─── EditPage.jsx
     │    ├─── ErrorPage.jsx
     │    ├─── HomePage.jsx
     │    ├─── IndexPage.jsx
     │    ├─── NewPage.jsx
     │    └─── ShowPage.jsx
     │
     ├─── assets/
     │
     ├─── App.css
     ├─── App.jsx
     ├─── index.css
     └─── main.jsx

```

### Wireframe

#### Components
1.NavBar.js: Navigation bar present on all pages.
2.Transaction.js: Represents a single transaction, likely used in lists.
3.TransactionDetails.js: Detailed view of a single transaction.
4.TransactionEditForm.js: Form to edit an existing transaction.
5.TransactionNewForm.js: Form to create a new transaction.
6.Transactions.js: List of all transactions.

#### Pages
1.EditPage.js: Page for editing a transaction, contains `TransactionEditForm`.
2.ErrorPage.js: Page displayed when a route is not found or an error occurs.
3.HomePage.js: Home page of the application.
4.IndexPage.js: Page displaying a list of all transactions, contains `Transactions`.
5.NewPage.js: Page for creating a new transaction, contains `TransactionNewForm`.
6.ShowPage.js: Page displaying details of a single transaction, contains `TransactionDetails`.

#### Static Assets
-assets: Folder to store static assets like images, icons, etc.

#### Styles and Entry Points
-App.cs: Global styles for the application.
-App.js: Main App component that includes routing and layout.
-index.cs: Additional global styles.
-main.js: Main entry point, likely where React is rendered to the DOM.

### Creating the Directory and Files

To create this structure and files in the command line:

```bash

mkdir -p src/{Components,Pages,assets}
touch src/App.css src/App.jsx src/index.css src/main.jsx
touch src/Components/{NavBar.jsx,Transaction.jsx,TransactionDetails.jsx,TransactionEditForm.jsx,TransactionNewForm.jsx,Transactions.jsx}
touch src/Pages/{EditPage.jsx,ErrorPage.jsx,HomePage.jsx,IndexPage.jsx,NewPage.jsx,ShowPage.jsx}
```

## Components



The application uses React Router to handle routing. The routes are defined in `App.jsx`:

- `/`: Home page.
- `/transactions`: Displays a list of transactions.
- `/transactions/new`: Form to add a new transaction.
- `/transactions/:id`: View details of a single transaction.
- `/transactions/:id/edit`: Form to edit an existing transaction.

## Styling

Basic styling is included in `index.css`. You can customize the styles as needed.

## Scripts

- `dev : Starts the development server.
- `build`: Creates a production build.
- `test`: Runs tests.
- `eject`: Ejects the application, providing full control over the configuration.

## Dependencies

- `@testing-library/jest-dom`
- `@testing-library/react`
- `@testing-library/user-event`
- `react`
- `react-dom`
- `react-router-dom`
- `react-scripts`
- `web-vitals`

## Backend Repository


## Detailed Explanation of Vite files and folders

>Not The only boilerplate file you will be heavily editing for your in-class builds is `src/App.jsx`.

### `src/`
The `src/` folder (short for source) is where you will build your React application. All the code in this folder will be bundled to build your React application. If you try to add code or assets outside of this folder, they will not be able to be loaded into your React application (which will be loaded inside the `div` with the id of `root` from `index.html`). There are several files here that demonstrate how to set up some common application elements, including:

#### `index.css` and `App.css`
These files demonstrate two different strategies for organizing CSS:
- `index.css` will apply styles to the whole app.
- `App.css` should be written to apply to styles for only the App component.
This allows you to organize your CSS in two different ways, which can help with organization and maintainability.


#### `assets/react.svg`
This example graphic is imported into `App.jsx` to demonstrate how to import and use a static graphic or image with React and Vite.



#### `main.jsx`
Entry point for the application. This will be the starting point of what is loaded into `index.html`. You can see that `React,` and `ReactDOM` are added here (React can be run in other environments like a mobile device, which is why the DOM library must be loaded as well).
It loads the `index.css` file and the `App.jsx` component.

### App.jsx
If you have started the Vite app and it has loaded in the browser, you can see the contents of this file.


### .env
Contains environment-specific variables such as the port number.


### models/transactions.js
Stores static array of transaction data in JavaScript format.


### models/transactions.json
Stores dynamic transaction data in JSON format.


### controllers/transactionsController.js
Handles CRUD operations for transactions, including GET, POST, PUT, and DELETE requests.


### .gitignore
Specifies files and directories to be ignored by Git, such as `node_modules` and `.env`.


#### `.eslintrc.cjs`
Sets some common and best practices for formatting React.


#### `vite.config.js`
Customizable configuration file for Vite to load React.


### package.json
Defines the project dependencies and scripts.


### package-lock.json 
Keeps track of the files and folders inside the `node_modules/` folder, automatically generated.


### `node_modules/`
Contains many folders (dependencies limek react) containing all of the code to run Vite and React. Do not change code. 


### `index.html`
This is the page that gets loaded into the browser. The React app will be loaded inside of the `div` with the `id` of `root`. You can change things here, like the title and favicon. However, you must always keep the `div` with the `id` of `root` and the `script` with the `type`, `module` and `src` set to `src/main.jsx`.

### `public/`
This is a folder that contains any public static assets. This folder is more important for production level applications that need to work in multiple browsers.

#### `vite.svg`
This is a [scalable vector graphic](https://en.wikipedia.org/wiki/SVG). It is simple and drawn using code, which allows it to scale to be smaller than a postage stamp, or as big as a billboard and never lose any loss of quality. This example is imported into `App.jsx` to demonstrate how to import and use one.

### README.md
Serves as documentation for the project, including description, setup instructions, usage guidelines, API document, and other relevant details.


### notes.md
Serves as personal or team-specific document used primarily for jotting down informal notes, reminders, ideas, references, or any other information relevant to the project. 


## Links

[Link](https://github.com/incognito1025/bank-transaction-app-backend.git)


Commit Message:
    npm install react-router-dom
    npm install axios
    npm install redux react-redux
    npm install styled-components
    npm install dotenv


Set up routes
1. Installed react-router-dom, axios, redux react-redux, styled-components
2. Created Components and Pages
3. Set up paths and elements for each route
4. Created boilerplates for all Pages and Components


Explanation of Components and Pages
NavBar.jsx: Navigation bar with links to the Index page and New Transaction form, and displays the app name.
App.jsx: Main component that sets up routing for different pages using React Router.
Routes:
/: Home page (HomePage.jsx)
/transactions: Index page displaying a list of transactions (IndexPage.jsx)
/transactions/new: New Transaction form (NewPage.jsx)
/transactions/:id: Show details of a single transaction (ShowPage.jsx)
/transactions/:id/edit: Edit form for a transaction (EditPage.jsx)
*: Fallback for unknown routes, displays an error page (ErrorPage.jsx)
To Add New Transaction Form and Index Display
Ensure your NewPage.jsx and IndexPage.jsx correctly handle the respective functionalities. The NewPage.jsx should contain a form for adding new transactions, and the IndexPage.jsx should display a list of transactions.
Summary
Your NavBar.jsx should have a correctly formatted link for new transactions.
Your App.jsx correctly includes the navigation bar and defines routes.
Make sure other components and pages (NewPage.jsx, IndexPage.jsx, etc.) are implemented to handle their specific functionalities.
With these changes, your navigation bar and app structure should meet the requirements and function as intended.


/*
//View Transactions
name
id
item_name
amount
date
from
category

//Add a New Transaction

//Edit Transactions

//Delete Transactions

//Track Your Budget - total budget






{ id: nanoid(), item_name: "opening deposit", amount: 10000, date: "2024-07-01", from: "self", category: "income" },

*/



