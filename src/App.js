import React from 'react';
import logo from './logo.svg';
import Line from './components/charts/Line'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        this is a demo for flexible pc screen and you can see  how it work in different width 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Line />
      
      </div>
    </div>
  );
}

export default App;
