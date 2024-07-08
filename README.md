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
    npm run dev
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
 
 ```
To create a wireframe based on the commit message, here's a structured layout of your project:

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
1. **NavBar.jsx**: Navigation bar present on all pages.
2. **Transaction.jsx**: Represents a single transaction, likely used in lists.
3. **TransactionDetails.jsx**: Detailed view of a single transaction.
4. **TransactionEditForm.jsx**: Form to edit an existing transaction.
5. **TransactionNewForm.jsx**: Form to create a new transaction.
6. **Transactions.jsx**: List of all transactions.

#### Pages
1. **EditPage.jsx**: Page for editing a transaction, contains `TransactionEditForm`.
2. **ErrorPage.jsx**: Page displayed when a route is not found or an error occurs.
3. **HomePage.jsx**: Home page of the application.
4. **IndexPage.jsx**: Page displaying a list of all transactions, contains `Transactions`.
5. **NewPage.jsx**: Page for creating a new transaction, contains `TransactionNewForm`.
6. **ShowPage.jsx**: Page displaying details of a single transaction, contains `TransactionDetails`.

#### Static Assets
- **assets/**: Folder to store static assets like images, icons, etc.

#### Styles and Entry Points
- **App.css**: Global styles for the application.
- **App.jsx**: Main App component that includes routing and layout.
- **index.css**: Additional global styles.
- **main.jsx**: Main entry point, likely where React is rendered to the DOM.

### Creating the Directory and Files

To create this structure and files in the command line:

```bash
mkdir -p src/{Components,Pages,assets}
touch src/App.css src/App.jsx src/index.css src/main.jsx
touch src/Components/{NavBar.jsx,Transaction.jsx,TransactionDetails.jsx,TransactionEditForm.jsx,TransactionNewForm.jsx,Transactions.jsx}
touch src/Pages/{EditPage.jsx,ErrorPage.jsx,HomePage.jsx,IndexPage.jsx,NewPage.jsx,ShowPage.jsx}
```

This command will create the necessary directories and files as per the project structure outlined above.


 ```
  




## Components

### `EditTransaction.jsx`

Allows users to edit an existing transaction. It fetches the transaction data by ID and populates the form, which can be submitted to update the transaction.

### `Home.jsx`

A simple component displaying a welcome message.

### `Nav.jsx`

The navigation bar with links to different sections of the application.

### `NewTransaction.jsx`

Provides a form to create a new transaction. Submitting the form sends a POST request to the backend.

### `Transaction.jsx`

Displays details of a single transaction. It allows users to delete or edit the transaction.

### `Transactions.jsx`

Fetches and displays a list of all transactions. It calculates and displays the total budget.

## Routes

The application uses React Router to handle routing. The routes are defined in `App.jsx`:

- `/`: Home page.
- `/transactions`: Displays a list of transactions.
- `/transactions/new`: Form to add a new transaction.
- `/transactions/:id`: View details of a single transaction.
- `/transactions/:id/edit`: Form to edit an existing transaction.

## Styling

Basic styling is included in `index.css`. You can customize the styles as needed.

## Scripts

- `start`: Starts the development server.
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

> **Note** The only boilerplate file you will be heavily editing for your in-class builds is `src/App.jsx`.

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


Commit message:


## Project Structure

src/
  ├── components/
  │   ├── EditTransaction.jsx
  │   ├── Home.jsx
  │   ├── Nav.jsx
  │   ├── NewTransaction.jsx
  │   ├── Transaction.jsx
  │   └── Transactions.jsx
  ├── App.jsx
  ├── functions.js
  ├── index.css
  └── index.js
public/
  ├── index.html
  └── ...
package.json
```

Commit Message:

addition of folder src & its subfolders and files including- Components, Pages, assets, App.css, App.jsx, index.css, main.jsx; addition of NavBar.jsx Transaction.jsx TransactionDetails.jsx TransactionEditForm.jsx TransactionNewForm.jsx Transactions.jsx inside Components folder; addition of EditPage.jsx ErrorPage.jsx HomePage.jsx IndexPage.jsx NewPage.jsx ShowPage.jsx inside of Pages folder; update of index.html title