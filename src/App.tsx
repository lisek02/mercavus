import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import { HobbiesContainer } from "./containers/Hobbies.container";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>User hobbies</h1>
      </header>
      <Router>
        <Route path="/" exact component={HobbiesContainer} />
      </Router>
    </div>
  );
};

export default App;
