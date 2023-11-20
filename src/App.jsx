import React from 'react';
import Logo from './components/Logo';
import BackgroundImage from './components/BackgroundImage';
import './styles.css'; 
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="App-nav">
        <Logo />
      </nav>
      <header className='App-header'>
        <BackgroundImage />
      </header>
    </div>
  );
}

export default App;
