import "./App.css";


function formatName(user) {
  return user.firstName + " " + user.lastName;
}

const user = {
  firstName: "My",
  lastName: "Name",
};

const hello = <h1>Hello, {formatName(user)}!</h1>;





function App() {
  return <div className="App">{hello}</div>;
  
  
}

export default App;