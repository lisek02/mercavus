import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HobbiesTable } from './components/HobbiesTable';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>User hobbies</h1>
      </header>
      <section>
        <HobbiesTable />
      </section>
    </div>
  );
}

export default App;
