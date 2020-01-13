import React from 'react';
import logo from './logo.svg';
import MainPage from './components/MainPage';
import Header from './components/Header.js';
import Portfolio from './components/Portfolio.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <MainPage />
      <Portfolio />
    </div>
  );
}

export default App;
